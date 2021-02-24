<template>
  <div>
  <div class="new_arrivals_background">
    <div class="new_arrivals">
      <p class="text_new_top">
        New Arrivals
      </p>
      <ul class="men_menu">
        <li class="men_menu_item"><a href="" class="men_menu_a">Home/</a></li>
        <li class="men_menu_item"><a href="" class="men_menu_a">Men/</a></li>
        <li class="men_menu_item"><a href="" class="men_menu_a men_menu_a_activ">New Arrivals</a></li>
      </ul>
    </div>
  </div>
  <main>
    <div class="menu_shopping">
      <ul class="menu_shopping_ul">
        <li class="menu_shopping_li_one">
          <p class="menu_shopping_p">Product Details</p>
        </li>
        <li class="menu_shopping_li">
          <p class="menu_shopping_p">unitePrice</p>
        </li>
        <li class="menu_shopping_li">
          <p class="menu_shopping_p">Quantity</p>
        </li>
        <li class="menu_shopping_li">
          <p class="menu_shopping_p">shipping</p>
        </li>
        <li class="menu_shopping_li">
          <p class="menu_shopping_p">Subtotal</p>
        </li>
        <li class="menu_shopping_li">
          <p class="menu_shopping_p">ACTION</p>
        </li>
      </ul>
    </div>

      <shop_carts :shoppings="shopping" @remove-Shopping="removeShopping($event)"></shop_carts>

    <div class="shopping_cart_contin">
      <div class="shopping_button">
        <a href="" class="button_shopping">CLEAR SHOPPING CART</a>
        <a href="" class="button_shopping">cLEAR SHOPPING CART</a>
      </div>
      <div class="adress_coupon_total">
        <div class="row">
          <div class="col-md-4">
            <p class="shipping_adress">Shipping Adress</p>
            <select name="Bangladesh" id="" class="bangladesh">
              <option value="Bangladesh">Bangladesh</option>
            </select>
            <select name="State" id="" class="bangladesh">
              <option value="State">State</option>
            </select>
            <select name="Postcode / Zip" id="" class="bangladesh">
              <option value="Postcode / Zip">Postcode / Zip</option>
            </select>
            <a href="" class="button_get">get a quote</a>
          </div>
          <div class="col-md-4">
            <p class="shipping_adress">coupon discount</p>
            <p class="coupon_enter">Enter your coupon code if you have one</p>
            <select name="State" id="" class="bangladesh">
              <option value="State">State</option>
            </select>
            <a href="" class="button_get get_1">Apply coupon</a>
          </div>
          <div class="col-md-4">
            <div class="grand">
              <p class="sub_total">Sub total $900</p>
              <p class="sub_grand">GRAND TOTAL   <span class="g_total">$900</span></p>
              <div class="line_grand"></div>
              <router-link :to="{name:'checkout'}"><a href="" class="proceed">proceed to checkout</a></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <div class="baner3">
    <div class="ten">
      <div class="content_baner3">
        <div class="slider_ban3">
          <img src="../assets/img/ellipse_3_2206.jpg" alt="" class="img_ban3">
          <p class="text_ban3">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
          <p class="sign_ban3">Bin Burhan</p>
          <p class="_ban3">Dhaka, Bd</p>
          <div class="ban3_nav">
            <div class="ban3_li"></div>
            <div class="ban3_li activ_li"></div>
            <div class="ban3_li"></div>
          </div>
        </div>
        <div class="polosa"></div>
        <div class="subscribe">
          <h2 class="sub_text">Subscribe</h2>
          <p class="sub_p">FOR OUR NEWLETTER AND PROMOTION</p>
          <input type="text" class="sub_input" value="Enter Your Email">
          <a href="" class="buton_subscribe">Subscribe</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Shop_carts from "comp/shop_carts";
export default {
  props:["shop_carts"],
  components: { Shop_carts },
  }
</script>

<style>
</style>