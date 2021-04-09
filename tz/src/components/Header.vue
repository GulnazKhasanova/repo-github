<template>
  <div id="menu">
    <ul>
      <li><img src="../src/assets/img/shape_1_190.png" alt=""> Описание услуги</li>
      <li><img src="../src/assets/img/shape_2_191.png" alt="">Зачем мне это?</li>
      <li><img src="../src/assets/img/shape_3_192.png" alt="">Почему мы?</li>
      <li><img src="../src/assets/img/shape_4_193.png" alt="">А что есть?</li>
      <li><img src="../src/assets/img/icon_195.png" alt="">А где?</li>
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
  &{
    width: 100%;
    min-height: 120px;
    display: flex;
    flex-direction: row;
    &{
      display: flex;
      flex-direction: column;
    }

  }
}

</style>