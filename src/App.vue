<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TodoApp from './components/TodoApp.vue'
</script>

<template>
  <TodoApp />
</template>

<style>
html, body, pre, code, kbd, samp {
  font-family: "Press Start 2P";
}

body {
  background: #20262E;
  padding: 20px;
}
@media screen and (max-width: 600px) {
  #app {
    width: 100%;
    margin: 20% auto;
    background: #fff;
    font-size: 1.5vw;
    border-radius: 4px;
    padding: 20px;
    transition: all 0.2s;
  }
}
@media screen and (min-width: 601px) {
  #app {
    width: 800px;
    margin: 50px auto;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    transition: all 0.2s;
  }
}

li {
  margin: 8px 0;
}

del {
  color: rgba(0, 0, 0, 0.3);
}

.padding {
  padding: 1px 7px 2px;
}

.flex {
  display: flex;
}

.space {
  flex-grow: 1;
}
</style>
