<template>
  <div class="tint-block">
    <h4 class="tint_b_text">Нам доверяют</h4>
    <div class="tint_b_comp">
      <p class="row1">
        <img class="tint_b_img" src="~@/assets/img/layer_11_607.png" alt="">
        <img class="tint_b_img" src="~@/assets/img/layer_17_619.png" alt="">
      </p>
      <p class="row2">
        <img class="tint_b_img" src="~@/assets/img/layer_12_609.png" alt="">
        <img class="tint_b_img" src="~@/assets/img/layer_15_615.png" alt="">
        <img class="tint_b_img" src="~@/assets/img/layer_16_617.png" alt="">
      </p>
      <p class="row3">
        <img class="tint_b_img" src="~@/assets/img/layer_13_611.png" alt="">
        <img class="tint_b_img" src="~@/assets/img/layer_14_613.png" alt="">
        <img class="tint_b_img" src="~@/assets/img/layer_10_513.png" alt="">
      </p>

    </div>
  </div>
</template>

<script>
export default {
name: "TintBlock"
}
</script>

<style lang="scss">
.tint-block{
  margin: 100px auto 0;
  height:1100px;
  max-width:2200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:
      url('~@/assets/img/pin_638.png')no-repeat 36% 10%,
      url('~@/assets/img/shape_9_592.png')no-repeat 34.2% 20.6%,
      url('~@/assets/img/shape_8_591.png')no-repeat 35.3% 10%,
      url('~@/assets/img/vector_smart_object_590.png')no-repeat 35% 10%,
      url('~@/assets/img/pin_642.png')no-repeat 63% 10%,
      url('~@/assets/img/shape_7_573.png')no-repeat 64% 10%,
      url('~@/assets/img/vector_smart_object_572.png')no-repeat 63% 10%,
      url('~@/assets/img/shape_9_560.png')no-repeat 54.5% 33%,
      url('~@/assets/img/shape_8_559.png')no-repeat 57.6% 25%,
      url('~@/assets/img/vector_smart_object_557.png')no-repeat 57% 25%,
      url('~@/assets/img/tape_646.png')no-repeat 45.5% 20.5%,
      url('~@/assets/img/shape_7_551.png')no-repeat 45.3% 24.8%,
      url('~@/assets/img/vector_smart_object_550.png')no-repeat 45% 25%,
      url('~@/assets/img/tape_644.png')no-repeat 66% 29%,
      url('~@/assets/img/shape_11_568.png')no-repeat 64.3% 42.2%,
      url('~@/assets/img/shape_10_567.png')no-repeat 63.5% 34%,
      url('~@/assets/img/vector_smart_object_563.png')no-repeat 63% 35%,
      url('~@/assets/img/pin_643.png')no-repeat 50% 30%,
      url('~@/assets/img/shape_7_549.png')no-repeat 50.6% 34.6%,
      url('~@/assets/img/vector_smart_object_548.png')no-repeat 50% 35%,
      url('~@/assets/img/shape_11_583.png')no-repeat 38% 43.5%,
      url('~@/assets/img/shape_10_582.png')no-repeat 38% 35%,
      url('~@/assets/img/vector_smart_object_581.png')no-repeat 37% 35%,
      url('~@/assets/img/tape_645.png')no-repeat 28% 20%,
      url('~@/assets/img/shape_7_587.png')no-repeat 31% 25%,
      url('~@/assets/img/vector_smart_object_586.png')no-repeat 30% 25%,
      url('~@/assets/img/layer_18_654.png') no-repeat,
      url('~@/assets/img/bg_603.png') top right 10px no-repeat;
& > .tint_b_comp{
    margin: 0 auto;
    height:1200px;
    max-width:2200px;
    width: 1100px;
    position: absolute;
    background:
        url('~@/assets/img/macbook_1630.png') no-repeat 30% 82%,
        url('~@/assets/img/cup_1654.png') no-repeat 100% 76% ,
        url('~@/assets/img/layer_19_1766.png') no-repeat 2% 72%,
        url('~@/assets/img/shadow_1768.png') no-repeat 8% 87%;
& > .row1{
    margin-left:9%;
    margin-right:9%;
    margin-top: 150px;
& > img{
    margin-left:19%;
    margin-right:18%;
  }
}
& > .row2{
    margin-left:12%;
    margin-right:27%;
    margin-top: 30px;
& > img{
    margin-left:5%;
    margin-right:10%;}
}
& > .row2 img:nth-child(n+2){
    margin-left:6%;
    margin-bottom:4%;
  }
& > .row3 {
    margin-top: 5px;
    margin-left:21%;
    margin-right:21%;
& > img{
    margin-left:6%;
    margin-right:6%;
  }
}
& > .row3 img:nth-child(n+3){
    margin-top:4%;
  }
> .row3 img:not(:last-child){
  margin-bottom:4%;
}

}
& > .tint_b_text{
    margin-top: 100px;
    background: linear-gradient(0.0deg, #dec8a8 0%, #b76c00 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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


</style>