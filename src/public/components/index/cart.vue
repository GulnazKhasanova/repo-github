<template>
  <div class="basket_inner" v-show="visibility">
    <cart-item
      v-for="item of cartItems"
      :key="item.productId"
      :cart-item="item"
    ></cart-item>
    <div class="total_basket">
      <div class="total_txt">
        <p class="text_tot">TOTAL</p>
        <p class="text_tot" id="basket_sum">$</p>
      </div>
      <div>
        <a href="#" class="button_basket">CHECKOUT</a>
        <a href="#" class="button_basket">GO TO CART</a>
      </div>
    </div>
  </div>
</template>

<script>
import cartItem from "comp/cartItem.vue";
export default {
  props: ["cart-items", "visibility"],
  components: { cartItem },
};
</script>

<style>
</style>