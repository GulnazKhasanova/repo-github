<template>
  <shopping
  v-for="item of shopping"
  :key="item.productId"
  :shopping ="item">
  </shopping>
</template>

<script>
  import shopping from "comp/shopping";
  export default {
    props:["shopping"],
    components: { shopping }
}
</script>

<style>

</style>