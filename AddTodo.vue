<template>
  <div>
    <form @submit.prevent="OnSubmit">
      <input type="text" v-model="title">
    <button type="submit" >Create</button>
    </form>
  </div>
</template>

<script>
export default {
name: "AddTodo",
  data(){
  return{
    title:''
  }
  },
  methods: {
    OnSubmit(){
      if(this.title.trim()){
        const newTodo = {
          id: 1,
          title: this.title,
          completed: false
        }
        this.$emit('add-todo', newTodo);
        this.title = '';
      }
    }
  }
}
</script>

<style scoped>

</style>