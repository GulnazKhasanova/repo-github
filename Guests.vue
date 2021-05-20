<template>
  <ul>
    <li>
      <label class="column">{{ input.name }} </label>
      <input type="text" v-model='value' @change="$emit('isButton', {value:value, name: input.name})">
    </li>
  </ul>
</template>

<script>
export default {
  props: ['input'],
  name: "Guests",
  data(){
    return {
     value: ''
    }
  }
}
</script>

<style scoped>
li{

}
ul{
  list-style: none;
}
</style>