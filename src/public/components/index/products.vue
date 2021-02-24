<template>
  <div class="row_item_card">
    <product
      v-for="item of products"
      :key="item.productId"
      :product="item"
      @add-product="addProduct($event)"
    ></product>
  </div>
</template>

<script>
import product from "comp/product";
export default {
  props: ["products"],
  components: { product },
  methods: {
    addProduct($event) {
      this.$emit("add-product", $event)
    }
  }
};
</script>

<style>
</style>