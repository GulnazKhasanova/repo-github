<template>
  <header>
    <div class="header_1">
      <div class="logo">
        <img src="../../assets/img/group_2_18.png" alt="" class="log" />
      </div>
      <p class="name_site">BRAN<span class="symbol_d">D</span></p>
      <div class="search">
        <my-search :userSearch="userSearch" @search="searchProduct(userSearch)"></my-search>
      </div>
      <router-link :to="{ name: 'cart' }">to cart</router-link>
      <div id="basket_shop">
        <a href="" class="cart" @click.prevent="cartShow"
          ><img src="../../assets/img/forma_1_1113.svg" alt=""
        /></a>
        <cart
          :cart-items="cartItems"
          :showCart="showCart"
          @additem="createEvent($event)"
        ></cart>
      </div>
      <a class="shop_account"
        >My Account
        <img src="../../assets/img/__1109.png" alt="" class="bstrela"
      /></a>
    </div>
    <div class="nav">
      <ul class="h_shop">
        <li class="h_shop_style">
          <router-link :to="{ name: 'main' }"
          ><a href="" class="h_link h_link_activ"> Home</a></router-link>
        </li>
        <li class="h_shop_style"><router-link :to="{name:'prodpage'}">
          <a href="" class="h_link">Man</a>
        </router-link>
        </li>
        <li class="h_shop_style"><a href="" class="h_link">Women</a></li>
        <li class="h_shop_style"><a href="" class="h_link">Kids</a></li>
        <li class="h_shop_style"><a href="" class="h_link">Accoseriese</a></li>
        <li class="h_shop_style"><a href="" class="h_link">Featured</a></li>
        <li class="h_shop_style"><a href="" class="h_link">Hot Deals</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
import Cart from "comp/cart";
import MySearch from "comp/mySearch";

export default {
  components: {
    MySearch,
    Cart,
  },
  data: () => ({
    showCart: false,
    userSearch: ""
  }),
  props: ["cart-items", "my-search"],
  methods: {
    searchProduct(userSearch){
      this.$emit("search", userSearch)
    },
    createEvent(cartItem) {
      this.$emit("additem", cartItem);
    },
    cartShow() {
      this.showCart = !this.showCart;
    },
  },
};
</script>

<style>
</style>