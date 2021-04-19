<template>
  <div class="block_hat_form">
    <div class="hat_form_text">
      <h4>Lorem ipsum dolor sit amet, consectetur</h4>
      <p>ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
    </div>
    <div class="hat_form">
      <form-sb></form-sb>
      <div class="after_hat_form">
        <img class="hat_img" src="~@/assets/img/hat_282.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import FormSb from "./FormSb";
export default {
  name: "BlockHatForm",
  components:{ FormSb },
}
</script>

<style lang="scss">
.block_hat_form{
  margin: 0 auto;
  height: 790px;
  max-width: 950px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: url('~@/assets/img/monocle_404.png') no-repeat 15% 10%,
  url('~@/assets/img/teapot1_334.png') no-repeat 50% 15%,
  url('~@/assets/img/cup_340.png') no-repeat 30% 20%,
  url('~@/assets/img/pipe_337.png') no-repeat 45% 30%,
  url('~@/assets/img/arrows_327.png') no-repeat 55% 60%,
  url('~@/assets/img/box2_324.png') no-repeat 99% 25%,
  url('~@/assets/img/flag_311.png') no-repeat  92% 28%;

& >.hat_form_text{
    width: 50%;
& > h4{
    margin-top: 84px;
    font-family: $ing-b-it;
    font-size: 36px;
    line-height: 1.2;
    font-weight: 700;
    font-style: italic;
    color: #0694f8;
    text-align: left;
  }
& > p{
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-style: normal;
    color: #282828;
    text-align: left;
    margin-top:25px;
  }
}
& > .hat_form{
    width: 50%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-top: 120px;
& > .after_hat_form{
    position: absolute;
    margin-top: -119px;
    margin-right: 205px;
& > .hat_img{
    width: 95%;
  }
}
}
}
</style>