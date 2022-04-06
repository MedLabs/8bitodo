import Dexie, {Table} from 'dexie'

export interface Todo {
  id: number
  task: string
  done: boolean
}

export class TodosDb extends Dexie {
  todos!: Table<Todo>;

  constructor() {
    super('TodosDb')
    this.version(1).stores({
      todos: 'id, task, done'
    })
  }
}

export const db = new TodosDb()
