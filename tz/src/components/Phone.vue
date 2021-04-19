<template>
  <div class="phone">
    <img src="~@/assets/img/phone_1875.png" alt="" class="img_phone">
    <p>
      Позвоните нам и получите
      <span class="cash">500</span> рублей в подарок!<br> <span class="phone_num">+7 (8162) 12 34 56</span>
    </p>
  </div>
</template>

<script>
export default {
name: "Phone"
}
</script>

<style lang="scss">
.phone{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto 100px;
  height:270px;
  max-width:800px;
  width: 596px;
  background: url('~@/assets/img/layer_21_1878.png') no-repeat 65% 0,
  url('~@/assets/img/1_1871.png') no-repeat 65% 0,
  url('~@/assets/img/2_1873.png') no-repeat 50% 100%,
  url('~@/assets/img/3_1874.png') no-repeat 0 100%;
& > .img_phone{
    margin-left: 10%;
    margin-bottom: 13%;
    width: 123px;
    height: 210px;
  }
& > p{margin-bottom: 15px;
    padding: 0 15px !important;
    text-align: left;
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
</style>