<template>
    <div class="mango_shirt_cart">
      <img :src="shopping.productImg" alt="" class="mango_shirt_cart_img">
      <div class="mango_shirt_cart_text">
        <p class="mango_shirt_cart_p_head">{{ shopping.productName }}</p>
        <p class="mango_shirt_cart_color">Color: <span class="red_mango">Red</span></p>
        <p class="mango_shirt_cart_size">Size: <span class="red_mango">Xll</span></p>
      </div>
    </div>
    <div class="param_mango">
      <div class="disp_none_mango">
        <p class="head_mango_menu">unitprice</p>
        <p class="content_mango_menu">{{ shopping.productPrice }}</p>
      </div>
      <div class="disp_none_mango">
        <p class="head_mango_menu">quantity</p>
        <input class="select_mango_menu" type="text" :value="shopping.amount" >

      </div>
      <div class="disp_none_mango">
        <p class="head_mango_menu">shipping</p>
        <p class="content_mango_menu">FREE</p>
      </div>
      <div class="disp_none_mango">
        <p class="head_mango_menu">subtotal</p>
        <p class="content_mango_menu">{{shopping.amount}} x {{shopping.productPrice}}}</p>
      </div>
      <div class="disp_none_mango">
        <p class="head_mango_menu">action</p>
        <a class="content_mango_menu" href="#"
           class="fas fa-times-circle"
           @click.prevent="$parent.$emit('removeShopping', shopping)"><i class="fa-times-circle content_mango_i"></i></a>
      </div>
    </div>

</template>

<script>
  export default {
    props: ["shopping"],
  };
</script>

<style>

</style>