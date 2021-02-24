<template>
  <div>
    <div class="baner1">
      <div class="img_baner1"></div>
      <div class="text_baner1">
        <h2 class="text_content">THE BRAND</h2>
        <h3 class="text_content text_content2">OF LUXERIOUS FASHION</h3>
      </div>
    </div>
    <main>
      <div class="collection clearfix">
        <div class="block_2">
          <div class="img_block2">
            <div class="text_cont">
              <p class="t_cont1">hOT dEAL</p>
              <p class="t_cont1 t_cont2">FOR MEN</p>
            </div>
            <img
              src="../assets/img/rectangle_19_1130.jpg"
              alt=""
              class="content_img"
            />
          </div>
          <div class="img_block2_b">
            <div class="text_cont">
              <p class="t_cont1">LUXIROUS & trendy</p>
              <p class="t_cont1 t_cont2">ACCESORIES</p>
            </div>
            <img
              src="../assets/img/rectangle_19_copy_3_1144.jpg"
              alt=""
              class="content_img_b"
            />
          </div>
        </div>
        <div class="block_2">
          <div class="img_block2_b">
            <div class="text_cont">
              <p class="t_cont1">30% offer</p>
              <p class="t_cont1 t_cont2">women</p>
            </div>
            <img
              src="../assets/img/rectangle_19_copy_1136.jpg"
              alt=""
              class="content_img_b"
            />
          </div>
          <div class="img_block2">
            <div class="text_cont">
              <p class="t_cont1">new arrivals</p>
              <p class="t_cont1 t_cont2">FOR kids</p>
            </div>
            <img
              src="../assets/img/rectangle_19_copy_2_1137.jpg"
              alt=""
              class="content_img"
            />
          </div>
        </div>
      </div>
      <div class="fetured_h2_title">
        <h2 class="block_fetured">Fetured Items</h2>
        <p class="subtitle_blockitem">
          Shop for items based on what we featured in this week
        </p>
      </div>
      <div class="block_fetured_items" id="catalog">
        <products :products="products" @add-product="addProduct($event)"></products>
      </div>
      <div class="all_product">
        <a href="" class="button_prod">Browse All Product</a>
      </div>
      <div class="baner2">
        <div class="baner2_bl_1">
          <div class="ban2_t">
            <h2 class="h2_baner2_text">30% OFFER</h2>
            <p class="baner2_text">FOR WOMEN</p>
          </div>
          <img
            src="../assets/img/rectangle_21_copy_1314.jpg"
            alt=""
            class="baner2_img"
          />
        </div>
        <div class="baner2_bl_2">
          <div class="bl_2_cont_1">
            <div class="bl_2_text">
              <h3 class="bl_2_title">Free Delivery</h3>
              <p class="bl_2_p">
                Worldwide delivery on all. Authorit tively morph next-generation
                innov tion with extensive models.
              </p>
            </div>
          </div>
          <div class="bl_2_cont_2">
            <div class="bl_2_text">
              <h3 class="bl_2_title">Sales & discounts</h3>
              <p class="bl_2_p">
                Worldwide delivery on all. Authorit tively morph next-generation
                innov tion with extensive models.
              </p>
            </div>
          </div>
          <div class="bl_2_cont_3">
            <div class="bl_2_text">
              <h3 class="bl_2_title">Quality assurance</h3>
              <p class="bl_2_p">
                Worldwide delivery on all. Authorit tively morph next-generation
                innov tion with extensive models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="baner3">
      <div class="ten">
        <div class="content_baner3">
          <div class="slider_ban3">
            <img src="../assets/img/ellipse_3_2206.jpg" alt="" class="img_ban3" />
            <p class="text_ban3">
              “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
              pulvinar purus condimentum a. Aliquam condimentum mattis neque sed
              pretium”
            </p>
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
            <input type="text" class="sub_input" value="Enter Your Email" />
            <a href="" class="buton_subscribe">Subscribe</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Products from "comp/products";
export default {
  props: [ "products" ],
  components: {  Products  },
  
};
</script>

<style>
</style>