<template>
  <div class="footer">
    <div class="cont_footer">
      <div class="map_footer">
        <img src="~@/assets/img/rectangle_9_1828.png" alt="">
      </div>
      <div class="text_footer">
        <h3>Lorem ipsum dolor sit amet, consectetur </h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Адрес</p>
        <p>Великий Новгород,ул. Б. Санкт-Петербургская 28, офис 578</p>
        <p>Телефон</p>
        <p>+7 (8162) 12-34-56</p>
        <p>E-mail</p>
        <p>example@mail.ru</p>
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
      & > h3{text-align: right;}
      & > p{text-align: right;}
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