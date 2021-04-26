<template>
<div>

  <nav>
    <transition name="menu" mode="out-in">
      <span class="material-icons-outlined" v-if="!show" @click="show = !show" key="menu" >menu</span>
      <span class="material-icons-outlined" v-else @click="show = !show" key="clear">close</span>
    </transition>
    <transition name="menu">
      <ul v-if="show">
        <li v-for="item in items">{{ item }}</li>
      </ul>
    </transition>
  </nav>

</div>
</template>

<script>
export default {
name: "AdaptMenu",
  data(){
  return{
    show: false,
    items: [
        'Описание услуги',
        'Зачем мне это?',
        'Почему мы?',
        'А что есть?',
        'А где?'    ]
  }
  }
}
</script>

<style lang="scss">
@import url("https://fonts.google.com/icons?selected=Material%20Icons%20Outlined%3Aclose");
@import url("https://fonts.google.com/icons?selected=Material%20Icons%20Outlined%3Amenu");
.menu-enter, .menu-leave-to{
  opacity: 0;
}
.menu-enter-active, .menu-leave-active{
  transition: opacity 0.5s ease-in;
}
nav {
  background-color: #0694f8;
  position: relative;
  z-index:999;
  display: none;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 60px;
  border-radius: 5px;
  & > ul{
    position: absolute;
    top: 60px;
    width: 100%;
    align-items: flex-start;

    & > li{
      list-style: none;
      width: 100%;
      height: 40px;
      background-color: #c8c8c8;
      font-size: 21px;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      font-family: 'Open Sans', sans-serif;
      text-transform: uppercase;
      color: #1e1e1e;
      transition: all 0.5s ease;
    }
    & > li:last-child{
      border-radius:  0 0 5px 5px;
    }
    & > li:hover{
      background-color: #0694f8;
      color: aquamarine;
    }

  }
}

</style>