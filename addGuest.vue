<template>
  <div>
  <input type="text" v-model.lazy='value' @change="$emit('add-guest', { id: number.id, value: value})">
  </div>

</template>

<script>
export default {
  name: "addGuest",
  props:['number','id'],
  data(){
    return {value:''}
  }
}
</script>

<style scoped>

</style>