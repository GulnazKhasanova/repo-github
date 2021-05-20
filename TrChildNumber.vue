<template>
  <tr class="all_tr" >
    <td> <button @click="$emit('remove-g', {value:number.value})">X</button> Guest №{{ number.id }}</td>
    <td> {{ number.value }} </td>
  </tr>
</template>

<script>
export default {
  name: "TrChildNumber",
  props:['number', 'id'],
}
</script>

<style scoped>

</style>