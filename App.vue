<template>
  <div id="app">
    <add-todo
    @add-todo="addTodo"
    ></add-todo>
    <todo-list
        :todos="todos"
        @remove-todo="removeTodo"
    ></todo-list>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";

export default {
  name: 'App',
  components: {
    TodoList, AddTodo  },
  data() {
    return{
      todos:[
        {id:1, title: 'Купить хлеба', completed: false},
        {id:2, title: 'Купить молока', completed: false},
        {id:3, title: 'Купить колбасы', completed: false},
      ],
      index:''
    }
  },
  methods: {
    removeTodo(id){
      this.todos = this.todos.filter(t => t.id !== id);
    },
    addTodo(todo){
      this.todos.push(todo);
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
