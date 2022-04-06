<script setup lang="ts">
import { ref } from 'vue'
import {db} from '../db/db'
import {liveQuery} from 'dexie'
import {useObservable} from '@vueuse/rxjs'

const title = ref("Mes Taches")
const task = ref("")
const todos = useObservable(liveQuery(() => db.todos.toArray()))
const confirm = ref(false)


async function addTodo(text){
  if(text !== ""){
    await db.todos.add({id: Date.now(), task: text, done: false})
    task.value = ""
  }
}
async function removeTodo(id) {
  await db.todos.delete(id)
}

async function check(todo) {
  await db.todos.update(todo.id, {done: !todo.done})
}

async function clear() {
  await db.todos.clear()
  confirm.value = false
}
</script>

<template>
  <div v-show="confirm" class="nes-dialog" id="dialog-default">
   <form method="dialog">
     <p class="title">Confirmer</p>
     <p>Effacer toutes les taches ?</p>
     <menu class="dialog-menu">
       <button class="nes-btn" @click="confirm = false">Annuler</button>
       <button class="nes-btn is-primary" @click="clear()">Confirmer</button>
     </menu>
   </form>
 </div>
  <h1>
    <i class="snes-jp-logo is-large"></i> {{ title }} ({{todos.length}})</h1>
   <input type="text" class="nes-input" placeholder="Ajouter une tache" v-model="task" @keyup.enter="addTodo(task)" />
   <ul>
     <li :key="todo.id" v-for="todo in todos" class="flex">
       <label>
         <input type="checkbox" class="nes-checkbox is-large" @click="check(todo)" :checked="todo.done"> <span>&nbsp;</span>
       </label>
       <del v-if="todo.done">{{todo.task}}</del>
       <span v-else>{{todo.task}}</span>
      <div class="space"></div>
      <button class="nes-btn is-error padding" @click="removeTodo(todo.id)">X</button>
     </li>
   </ul>
   <button v-show="todos.length" class="nes-btn is-warning padding" @click="confirm = true">Effacer tout</button>
</template>
