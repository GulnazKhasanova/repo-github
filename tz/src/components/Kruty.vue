<template>
  <div class="kruty">
    <img src="~@/assets/img/lines_259.png" alt="" class="kruty_line">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "Kruty"
}
</script>

<style lang="scss">
.kruty{
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: auto;
  justify-content: center;
  align-items: center;
& > .kruty_img{
    width: 22px;
  }
& > p{
   font-family: inglobal;
   font-size: 18px;
   line-height: 18px;
   font-weight: 700;
   font-style: italic;
   color: #ff431e;
   margin-left: 5px;
   width: 37px
 }
& > .kruty_line{
    position: absolute;
    max-width: 800px;
    width: auto;
  }
}

</style>