<template>
  <div class="mango_shirt_1">
  <shopping
  v-for="item of shopping"
  :key="item.productId"
  :shopping ="item"
  @remove-Shopping="removeShop">
  </shopping>
    </div>
</template>

<script>
  import Shopping from "comp/shopping";
  export default {
    props:["shop_cart"],
    components: { Shopping },
    methods: {
      removeShop($event) {
        this.$emit("remove-Shopping", $event)
      }
    }
  }
</script>

<style>

</style>