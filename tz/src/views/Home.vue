<template>

  <div ref="homehome" class="home" @scroll="handleScroll">
    <transition name="pop" >
      <pop-up v-show="showPop"></pop-up>
    </transition>

  </div>
</template>

<script>

// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';

import PopUp from "../components/PopUp";

export default {
  name: 'Home',
  components: { PopUp },
  data() {
      return  {
        showPop: false
      }
  },
  created(){
    window.addEventListener('scroll',this.handleScroll )
  },
  methods: {
    handleScroll(e){
      console.log(window.pageYOffset);
      if(window.pageYOffset > 300){
        console.log('show')
        this.showPop = true;
      } else if(e.target == document.querySelector('.button_pop')){
        console.log(e.target)
        this.showPop = false;
      }
    }
  }
}
</script>
<style lang="scss">
.pop-enter-from{
  opacity: 0;
}
.pop-enter-to{
  opacity: 1;
}
.pop-enter-active{
  transition: opacity 2s ease-in;
}

.pop-leave-from{
  opacity: 1;
}
.pop-leave-to{
  opacity: 0;
}
.pop-leave-active{
  transition: opacity 2s ease-in;
}
.phone{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  height:270px;
  max-width:800px;
  width: 596px;
  background: url('~@/assets/img/layer_21_1878.png') no-repeat,
        url('~@/assets/img/1_1871.png') no-repeat,
        url('~@/assets/img/2_1873.png') no-repeat,
        url('~@/assets/img/3_1874.png') no-repeat;
  & > .img_phone{
    width: 123px;
    height: 210px;
  }
  & > p{
    padding: 0!important;
    text-shadow: 0 2px 0 0 #0784dc;
    font-family: "Open Sans";
    font-size: 18px;
    line-height: 1.2;
    font-weight: 400;
    color: #ffffff;
    width: 301px;
    & > .phone_num{

      font-size: 33px;
      font-weight: 700;
      font-style: italic;
    }
    & > .cash{
      font-weight: 700;
    }
  }
}
.box_img{
  margin: 0 auto;
  height:650px;
  max-width:800px;
  width: 100%;
  position: relative;
  background: url('~@/assets/img/layer_23_1968.png')no-repeat,
      url('~@/assets/img/box2_402.png')no-repeat;
}
.contacts{
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: row;
  max-width: 800px;
  width: 100%;
  height: auto;
  justify-content: space-between;
  & > .blue_cont{
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & > h3, p, ul{text-align: left;}
  }
  & > .pink_cont{
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    & > h3, p, ul{
      text-align: right;
    }
  }
}
.tint-block{
  margin: 0 auto;
  height:900px;
  max-width:2200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:
  url('~@/assets/img/pin_638.png')no-repeat,
  url('~@/assets/img/shape_9_592.png')no-repeat,
  url('~@/assets/img/shape_8_591.png')no-repeat,
  url('~@/assets/img/vector_smart_object_590.png')no-repeat,
      url('~@/assets/img/pin_642.png')no-repeat,
      url('~@/assets/img/shape_7_573.png')no-repeat,
      url('~@/assets/img/vector_smart_object_572.png')no-repeat,
  url('~@/assets/img/shape_9_560.png')no-repeat,
  url('~@/assets/img/shape_8_559.png')no-repeat,
  url('~@/assets/img/vector_smart_object_557.png')no-repeat,
      url('~@/assets/img/tape_646.png')no-repeat,
      url('~@/assets/img/shape_7_551.png')no-repeat,
      url('~@/assets/img/vector_smart_object_550.png')no-repeat,
  url('~@/assets/img/tape_644.png')no-repeat,
  url('~@/assets/img/shape_11_568.png')no-repeat,
  url('~@/assets/img/shape_10_567.png')no-repeat,
  url('~@/assets/img/vector_smart_object_563.png')no-repeat,
      url('~@/assets/img/pin_643.png')no-repeat,
      url('~@/assets/img/shape_7_549.png')no-repeat,
      url('~@/assets/img/vector_smart_object_548.png')no-repeat,
  url('~@/assets/img/shape_11_583.png')no-repeat,
  url('~@/assets/img/shape_10_582.png')no-repeat,
  url('~@/assets/img/vector_smart_object_581.png')no-repeat,
      url('~@/assets/img/tape_645.png')no-repeat,
      url('~@/assets/img/shape_7_587.png')no-repeat,
      url('~@/assets/img/vector_smart_object_586.png')no-repeat,
  url('~@/assets/img/layer_18_654.png') no-repeat,
  url('~@/assets/img/bg_603.png') top right 10px no-repeat;
  & > .tint_b_comp{
    margin: 0 auto;
    height:900px;
    max-width:2200px;
    width: 800px;
    position: absolute;
    background:
        url('~@/assets/img/macbook_1630.png') no-repeat,
        url('~@/assets/img/cup_1654.png') no-repeat,
        url('~@/assets/img/layer_19_1766.png') no-repeat,
        url('~@/assets/img/shadow_1768.png') no-repeat;
  }
  & > .tint_b_text{
    background-image: linear-gradient(0.0deg, #dec8a8 0%, #b76c00 100%);
    text-shadow: 0px 1px 1px 0px #ffffff, inset -1px 1px 1px 0px #925803;
    font-family: $ing-b-it;
    font-size: 30px;
    line-height: 1.2;
    font-weight: 700;
    font-style: italic;
    color: #282828;
  }
  & > .tint_b_img{
    margin: 0 auto;
    position: absolute;
    width: 193px;
  }
}



.banner_l0{
  z-index: -10;
  margin: 0 auto;
  height:800px;
  width:800px;
  position: relative;
  background: url('~@/assets/img/doves_82.png') top right 10px no-repeat,
  url('~@/assets/img/bus_97.png') bottom left no-repeat,
  url('~@/assets/img/bus_shadow_99.png') 30px 90px no-repeat,
  url('~@/assets/img/tree1_73.png') no-repeat,
  url('~@/assets/img/big_ben_52.png') no-repeat,
  url('~@/assets/img/cab_140.png') no-repeat,
  url('~@/assets/img/guardian_142.png') no-repeat,
  url('~@/assets/img/phone_both_54.png') no-repeat,
  url('~@/assets/img/underground_sign_135.png') no-repeat,
  url('~@/assets/img/flag_174.png') no-repeat,
  url('~@/assets/img/tree2_93.png') no-repeat,
  url('~@/assets/img/tree3_117.png') no-repeat,
  url('~@/assets/img/london_eye_131.png') no-repeat,
  url('~@/assets/img/light4_184.png') no-repeat,
  url('~@/assets/img/sky_179.png') no-repeat;
}
.banner_l1{
  z-index: 1;
  margin: 0 auto;
  height:800px;
  width:800px;
  position: absolute;
  background: url('~@/assets/img/light_1_146.png') no-repeat,
  url('~@/assets/img/light_2_145.png') no-repeat,
  url('~@/assets/img/box1_171.png') no-repeat;
}
h3{
  text-shadow: #1e1e1e 0 0 5px, #1e1e1e 1px 1px 3px, #1e1e1e 2px 2px 3px, #1e1e1e 3px 3px 0px,
  #1e1e1e -1px -1px 3px, #1e1e1e -2px -2px 3px, #1e1e1e -3px -3px 0px,#1e1e1e -1px -1px 3px, #1e1e1e -2px 0 3px, #1e1e1e -3px 0 0px,#1e1e1e -1px -1px 3px, #1e1e1e 2px 0 3px, #1e1e1e -2px 0 0px, #1e1e1e -3px 0 0px,#1e1e1e -1px -1px 0px, #1e1e1e 2px 0 0px, #1e1e1e 3px 0 0px,#1e1e1e 0 1px 0px, #1e1e1e 0 2px 0px, #1e1e1e 0 3px 0px, #1e1e1e 0 -1px 0px, #1e1e1e 0 -2px 0px, #1e1e1e 0 -3px 0px;
  font-family: $ing-b-it;
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
  font-style: italic;
  color: #ffffff;
}
.kakdanu{
  position: relative;
  max-width: 800px;
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  & >.kakdanu_text{
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    & > .r_lef{
      transform: rotate(19deg);
      transform-origin: top center;
      margin-left: 45px!important;
    }
    & > .r_rig{
      transform: rotate(-19deg);
      transform-origin: top center;
      width: 82px;
    }
    & >.kak_text {
      margin: 45px 25px;
      font-family: inglobal;
      font-size: 30px;
      line-height: 24px;
      font-weight: 700;
      font-style: italic;
      color: #ff431e;
      display: flex;
      align-items: center;
    }

  }
}
.kruty{
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: auto;
  justify-content: center;
  align-items: center;
  & > .kruty_img{
    width: 22px;
  }
  &>p{
    font-family: inglobal;
    font-size: 18px;
    line-height: 18px;
    font-weight: 700;
    font-style: italic;
    color: #ff431e;
    margin-left: 5px;
    width: 37px
  }
  & > .kruty_line{
    position: absolute;
    max-width: 800px;
    width: auto;
  }
}

.sitebar{
  z-index: 40;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  & > .form_sitebar{
    width: 321px;
    height: 462px;
    background-color: #ffffff;
    border: 1px solid #c8c8c8;
    border-radius: 4px;
    & > h3, h4, h5{
      font-family: 'Open Sans', sans-serif;
    }
    & > .title_f{
      font-size: 18px;
      line-height: 24px;
      font-weight: 700;
      color: #505050;
    }
    & > .sub_title_f{
      font-size: 14px;
      font-weight: 400;
    }
    & > input {
      width: 242px;
      height: 42px;
      border: 1px solid #c8c8c8;
      box-shadow: inset -1px 1px 5px 0px rgba(0,0,0,0.24);
      border-radius: 4px;
    }
    & > button{
      width: 240px;
      height: 40px;
      background-color: #0694f8;
      box-shadow: inset 0px -2px 0px 0px #0568b5;
      border-radius: 4px;
    }
    & > img {
      width: 240px;
      height: 5px;
    }
    & > p{
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      color: #0694f8;
    }

  }
  & > .button_form{
    z-index: 1;
    height:200px;
    width:50px;
    position: relative;
    background: url('~@/assets/img/rectangle_14_2085.png')  0 50px no-repeat,
    url('~@/assets/img/rectangle_13_2083.png') no-repeat;
    & > .ellips_form_b{
      position: absolute;
      margin: 10px 10px;
    }
    & > p{
      display: block;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      line-height: 1.2;
      font-weight: 700;
      color: #ffffff;
      transform: rotate(
              270deg
      );
      transform-origin: top left;
      height: auto;
      width: 150px;
      margin-top: 193px;
      margin-left: 15px;
      position: absolute;
    }
  }
}
.block_hat_form{
  margin: 0 auto;
  height: 790px;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: url('~@/assets/img/monocle_404.png') no-repeat,
  url('~@/assets/img/teapot1_334.png') no-repeat,
  url('~@/assets/img/cup_340.png') no-repeat,
  url('~@/assets/img/pipe_337.png') no-repeat,
  url('~@/assets/img/arrows_327.png') no-repeat,
  url('~@/assets/img/flag_311.png') no-repeat,
  url('~@/assets/img/box2_324.png') no-repeat;

 & >.hat_form_text{
   width: 60%;
  & > h3{
    font-family: $ing-b-it;
    font-size: 36px;
    line-height: 1.2;
    font-weight: 700;
    font-style: italic;
    color: #0694f8;
  }
  & > p{
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-style: normal;
    color: #282828;
  }
 }
  & > .hat_form{
    width: 40%;
  }
}
</style>