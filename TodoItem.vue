<template>
  <div>
    <li>
      <input type="checkbox" @change="todo.completed = !todo.completed">
      <span>{{ index + 1}}</span>
      <p v-bind:class="{done: todo.completed}">{{ todo.title }}</p>
      <button type="button" @click="$emit('remove-todo', todo.id)">&times;</button></li>
  </div>
</template>

<script>
export default {
name: "TodoItem",
  props:['todo', 'index']
}
</script>

<style scoped>
li{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #2c3e50;
  margin-bottom: 1rem;
}
input{
  margin-left: 45px;
  margin-right: 45px;
}
button{
  margin-left: 45px;
  margin-right: 45px;
  background-color: red;
  color:#fff;
  border-color: red;
  border-radius: 50%;
  box-shadow: 1px 2px #2c3e50;
}
.done{
  color: lightgray;
}
</style>