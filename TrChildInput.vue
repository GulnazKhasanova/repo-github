<template>
  <tr class="all_tr" >
    <td>{{ input.name }}</td>
    <td> {{ input.value }} </td>
  </tr>
</template>

<script>
export default {
  name: "TrChildInput",
  props:['input']
}
</script>

<style scoped>

</style>