<template>
  <div class="item_card">
    <div class="item_img">
      <img :src="product.productImg" alt="" class="img_blockitem" />
      <div class="layer">
        <a
          href=""
          @click.prevent="$parent.$emit('add-product', product)"
          class="add_to_cart1"
          >Add to Cart</a
        >
      </div>
    </div>
    <div class="title_blockitem">
      <p class="text_blockitem">{{ product.productName }}</p>
      <p class="price_blockitem">{{ product.productPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addProduct(product) {
      this.$emit("add-product", product)
    }
  }
};
</script>

<style>
</style>