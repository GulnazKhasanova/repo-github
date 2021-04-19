<template>
  <div class="sitebar">
    <transition name="sb_form">
    <form-sb v-show="show"></form-sb>
    </transition>
    <div class="button_form" @click="show=!show">
      <div class="ellips_form_b">
        <img src="~@/assets/img/ellipse_1_2086.png" alt="">
      </div>
      <p>Напишите нам!</p>
    </div>
  </div>
</template>

<script>
import FormSb from "./FormSb";
export default {
  name: "sitebar",
  components: {  FormSb  },
  data(){
    return{
      show: true
    }
  }
}
</script>

<style lang="scss">
.sb_form-enter-from{
  opacity: 0;
  transform: translateX(-100%);}
.sb_form-enter-to{
  opacity: 1;
  transform: translateX(0);}
.sb_form-enter-active{
  transition: all 0.7s ease-in;
}
.sb_form-leave-from{
  opacity: 1;
  transform: translateX(0);}
.sb_form-leave-to{
  opacity: 0;
  transform: translateX(-100%);}
.sb_form-leave-active{
  transition: all 0.7s ease-in;
}
.sitebar{
  z-index: 40;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
  .button_form p:active{
    color: aquamarine;
  }
}
</style>