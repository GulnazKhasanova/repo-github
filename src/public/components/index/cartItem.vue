<template>
  <div class="show_basket" id="basket_item">
    <div class="cart_basket_img">
      <img :src="cartItem.productImg" alt="" class="img_basket" />
      <div class="text_img_basket">
        <p>
          {{ cartItem.productName }} <br />
          <span>{{ cartItem.amount }} x {{ cartItem.productPrice }}</span>
        </p>
        <p>
          <i class="far fa-star star_color"></i>
          <i class="far fa-star star_color"></i>
          <i class="far fa-star star_color"></i>
          <i class="far fa-star star_color"></i>
          <i class="far fa-star star_color"></i>
        </p>
        <a
          href="#"
          class="fas fa-times-circle"
          @click.prevent="createEvent(cartItem)"
          name="remov"
          data-id="cartItem.productId"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cart-item"],
  methods: {
    createEvent(cartItem) {
      this.$emit('additem', cartItem) 
    }
  }
};
</script>

<style>
</style>