<template>
  <div class="form_sitebar">
      <h4 class="title_f">Ut enim ad minim veniam</h4>
      <h5 class="sub_title_f">quis nostrud exercitation ullamco laboris</h5>
      <input type="text">
      <input type="text">
      <button> Отправить</button>
      <img src="~@/assets/img/divider_2092.png" alt="">
      <h4 class="title_f">Ut enim ad minim veniam</h4>
      <h5 class="sub_title_f">quis nostrud exercitation ullamco laboris</h5>
      <p>+7 (8162) 12 34 56</p>
    </div>
</template>

<script>
export default {
name: "FormSb"
}
</script>

<style lang="scss">
.form_sitebar{
  width: 321px;
  height: 462px;
  background-color: #ffffff;
  border: 1px solid #c8c8c8;
  border-radius: 4px;
& > h3, h4, h5{
    font-family: 'Open Sans', sans-serif;
  }
& > .title_f:first-child{
  margin: 54px 27px 0px 27px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    color: #505050;
  }
& > .sub_title_f{
   margin-top: 4px;
    font-size: 14px;
    font-weight: 400;
  }

& > input {
  margin-top: 12px;
  margin-bottom: 6px;
    width: 242px;
    height: 42px;
    border: 1px solid #c8c8c8;
    box-shadow: inset -1px 1px 5px 0px rgba(0,0,0,0.24);
    border-radius: 4px;
  }

& > button{
  margin-top: 12px;
    width: 240px;
    height: 40px;
    background-color: #0694f8;
    box-shadow: inset 0px -2px 0px 0px #0568b5;
    border-radius: 4px;
    font-family: "Open Sans";
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    color: #ffffff;
  }
  & > button:active{
    background-color: aquamarine;
  }
& > img {
    margin:29px 0 23px 0;
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

</style>