<template>

  <div ref="homehome" class="home" @scroll="handleScroll">
    <transition name="pop" >
      <pop-up v-show="showPop" @cbButton="closePopUp($event)"></pop-up>
    </transition>
    <banner></banner>
    <kak-danu></kak-danu>
    <kruty>
      <img class="kruty_img" src="~@/assets/img/shape_6_217.png" alt="">
      <p id="home">Крути вниз</p>
    </kruty>
    <sitebar></sitebar>
    <block-hat-form></block-hat-form>
    <kruty><img class="kruty_img" src="~@/assets/img/shape_6_350.png" alt="">
      <p id="for">Зачем мне это?</p></kruty>
    <tint-block></tint-block>
    <kruty><img class="kruty_img" src="~@/assets/img/shape_6_1672.png" alt="">
      <p id="have">А что есть?</p></kruty>
    <contacts></contacts>
      <phone></phone>
    <kruty><img class="kruty_img" src="~@/assets/img/shape_6_217.png" alt="">
      <p id="where">А где?</p></kruty>
  </div>
</template>

<script>

// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';

import PopUp from "../components/PopUp";
import Banner from "../components/Banner";
import KakDanu from "../components/KakDanu";
import BlockHatForm from "../components/BlockHatForm";
import TintBlock from "../components/TintBlock";
import Contacts from "../components/Contacts";
import Phone from "../components/Phone";
import Kruty from "../components/Kruty";
import sitebar from "../components/sitebar";

export default {
  name: 'Home',
  components: { PopUp, Banner, KakDanu, BlockHatForm, TintBlock, Contacts, Phone, Kruty, sitebar},
  data() {
      return  {
        showPop: false,
        flag: true
      }
  },
  created(){
    window.addEventListener('scroll',this.handleScroll )
  },
  methods: {
    closePopUp(e){
      console.log(e.target);
      this.showPop = false;
      this.flag = false;
    },
    handleScroll(){
      console.log(window.pageYOffset);
      if(window.pageYOffset > 300 && this.flag){
        console.log('show')
        this.showPop = true;
      }
    }
  },
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
  transition: opacity 1s ease-in;
}

.pop-leave-from{
  opacity: 1;
}
.pop-leave-to{
  opacity: 0;
}
.pop-leave-active{
  transition: opacity 1s ease-in;
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

</style>