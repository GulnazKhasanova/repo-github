<template>
  <div class="footer">
    <div class="cont_footer">
      <div class="map_footer">
        <img src="~@/assets/img/rectangle_9_1828.png" alt="">
      </div>
      <div class="text_footer">
        <h4>Lorem ipsum dolor sit amet, consectetur </h4>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <span>Адрес</span>
        <p>Великий Новгород,ул. Б. Санкт-Петербургская 28, офис 578</p>
        <hr>
        <span>Телефон</span>
        <p>+7 (8162) 12-34-56</p>
        <hr>
        <span>E-mail</span>
        <a href="">example@mail.ru</a>
      </div>
    </div>

    <div class="copy">
    <p>© ОАО “Badass company”, 2011-2015</p>
      <div class="logo">
        <img src="" alt="">
      </div>
      <p>Разработка и дизайн - рекламное агентство <a href="">Haloart</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">
.footer{
  margin-top: 100px;
  position: relative;
  max-width: 2200px;
  width: 100%;
  min-height: 700px;
  background:
  url('~@/assets/img/vector_smart_object_1822.png') no-repeat,
  url('~@/assets/img/bg_1825.png') no-repeat;
  & > .cont_footer{
    margin: 0 auto;
    padding: 101px 0;
    max-width: 982px;
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > .map_footer{
      width: 50%;
      & > img{
        width: 100%;
      }
    }
    & > .text_footer{
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      & > h4{text-align: right;
        font-size: 36px;
        line-height: 1.2;
        font-weight: 700;
        font-style: italic;
        color: #ffffff;}
      & > p{
        margin: 0 0 10px;
        text-align: right;
        font-family: "Open Sans";
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        font-style: normal;
        color: #ffffff;}
      & > a {
        color: #ffffff;
      }
      & > span{
        margin: 10px 0;
        text-transform: uppercase;
        color: #ffffff;
      }
      & > hr{
        width: 35%;
        padding: 0;
        height: 0;
        border: none;
        border-top: 1px solid #fff;
      }
    }
  }
  & > .copy{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    min-height: 120px;
    background-color: #fff;
    align-items: center;
    & > p{
      font-family: "Open Sans";
      font-size: 12px;
      line-height: 1.2;
      font-weight: 400;
      color: #787878;
    }
    & > a{
      text-decoration: underline;
    }
  }
  & > .logo{
    width: 100px;
    height: 100px;
  }
}
</style>