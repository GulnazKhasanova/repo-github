<template>
  <div class="pop_up">
    <div class="pop_up_cont">
      <div class="thanks">
        <p>Спасибо!</p>
      </div>
      <div class="pop_text">
        <p>В ближайшее время
          мы с вами обязательно
          свяжемся</p>
      </div>
      <button class="button_pop" @click.prevent="$emit('cb-button',$event)">Ok</button>
    </div>
  </div>
</template>

<script>
export default {

  name: "PopUp",
}
</script>

<style lang="scss">
.pop_up{
  z-index: 99;
  position: absolute;
  display: block;
  width: 100%;
  height: 4890px;
  background-color: rgb(1, 1, 1, 0.5) ;


  & > .pop_up_cont{
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    position: fixed;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    height: 260px;
    background-color: #ffffff;
    border: 1px solid #c8c8c8;
    border-radius: 4px;
    & > .thanks{
      display: flex;
      width: 320px;
      height: 50px;
      background-color: #ff431e;
      border-radius: 4px;
      justify-content: center;
      align-items: center;
      & > p{
        font-family: "Open Sans";
        font-size: 18px;
        line-height: 24px;
        font-weight: 700;
        color: #ffffff;
      }
    }
    & > .pop_text{
      margin:30px 0;
      font-family: "Open Sans";
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
      color: #505050;
      & > p{
        padding: 0 50px;
      }

    }
    & > button{
      width: 120px;
      height: 40px;
      background-color: #ff431e;
      box-shadow: inset 0px -2px 0px 0px #bb2406;
      border-radius: 4px;
      font-family: "Open Sans";
      font-size: 14px;
      line-height: 24px;
      font-weight: 700;
      color: #ffffff;
    }
  }
}
</style>