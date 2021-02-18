<template>
  <div class="row_item_card">
    <product
      v-for="item of products"
      :key="item.productId"
      :product="item"
    ></product>
  </div>
</template>

<script>
import product from "comp/product";
export default {
  props: ["products"],
  components: { product },
};
</script>

<style>
</style>