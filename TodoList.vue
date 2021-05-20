<template>
  <div>
    <ul>
      <TodoItem v-for="(todo,i) of todos" v-bind:key="todo.id"
                :todo="todo"
                :index="i"
                @remove-todo="RemoveTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
name: "TodoList",
  components:{ TodoItem },
  props: ['todos'],
  methods: {
    RemoveTodo(id){
      this.$emit('remove-todo', id)
    }
  }
}
</script>

<style scoped>

</style>