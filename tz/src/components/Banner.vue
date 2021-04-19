<template>
  <div class="banner_l0">
    <div class="banner_l1">
      <h3>Lorem ipsum dolor consectetuer adipiscing sed diam nonummy nibh!</h3>
    </div>
  </div>
</template>

<script>
export default {
name: "Banner"
}
</script>

<style lang="scss">
.banner_l0{
  z-index: -10;
  margin: 0 auto;
  height:600px;
  width:800px;
  position: relative;
  background:
      url('~@/assets/img/doves_82.png') no-repeat 45% 10%,
      url('~@/assets/img/bus_97.png') no-repeat 0 58%,
      url('~@/assets/img/bus_shadow_99.png') no-repeat 0 74%,
      url('~@/assets/img/tree1_73.png') no-repeat 37% 25%,
      url('~@/assets/img/big_ben_52.png') no-repeat 15% -9%,
      url('~@/assets/img/cab_140.png') no-repeat 90% 65%,
      url('~@/assets/img/guardian_142.png') no-repeat 100% 40%,
      url('~@/assets/img/phone_both_54.png') no-repeat 89% 28%,
      url('~@/assets/img/underground_sign_135.png') no-repeat 0 35%,
      url('~@/assets/img/flag_174.png') no-repeat center 2% ,
      url('~@/assets/img/tree2_93.png') no-repeat 80% 32%,
      url('~@/assets/img/tree3_117.png') no-repeat 22% 26%,
      url('~@/assets/img/london_eye_131.png') no-repeat 75% 20%,
      url('~@/assets/img/light4_184.png') no-repeat,
      url('~@/assets/img/sky_179.png') no-repeat;
}
.banner_l1{
  z-index: 1;
  margin: 0 auto;
  height:800px;
  width:800px;
  position: absolute;
  background:
      url('~@/assets/img/light_1_146.png') no-repeat 45% 35%,
      url('~@/assets/img/light_2_145.png') no-repeat 45% 30%,
      url('~@/assets/img/box1_171.png') no-repeat 45% 30%;
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
  transform: rotate(-10deg);
  width: 800px;
  margin: 0 auto;
  margin-top: 220px;
}
</style>