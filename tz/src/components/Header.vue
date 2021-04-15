<template>
  <div id="menu">
    <ul>
      <li><img src="@/assets/img/houseoutline_112480.svg" alt=""> <p>Описание услуги</p> </li>
      <li><img src="@/assets/img/favoritesstaroutline_112570.svg" alt=""><p>Зачем мне это? </p></li>
      <li><img src="@/assets/img/useroutline_112519.svg" alt=""><p>Почему мы?</p></li>
      <li><img src="@/assets/img/visibleeyedesigntooloutline_112522.svg" alt=""><p>А что есть?</p></li>
      <li><img src="@/assets/img/crosshair_112503.svg" alt=""><p>А где?</p></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss">


#menu{
  width: 100%;
  min-height: 120px;
  background-color: #fff;
  &>ul{
    max-width: 870px;
    margin: 0 auto;
    width: 100%;
    min-height: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;
    &>li{
      display: flex;
      flex-direction: column;
      width: auto;
      height: 61px;
      margin: 0 auto;
      justify-content: space-between;

      &>img{
        opacity: 0.4;
        height: 35px;
        width: auto;

      }
      &>p{
        margin: 0;
        font-family: inglobal;
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        font-style: italic;
        color: #969696;
      }
    }

  }
}

</style>