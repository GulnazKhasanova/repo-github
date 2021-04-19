<template>
  <div class="kakdanu">
    <img src="~@/assets/img/bubbles_317.png" alt="">
    <div class="kakdanu_text">
      <div class="kak_text r_lef">
        <p>Да ну!</p>
      </div>
      <div class="kak_text r_rig">
        <p>Как так?!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "KakDanu"
}
</script>

<style lang="scss">
.kakdanu{
  position: relative;
  max-width: 800px;
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
& >.kakdanu_text{
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
& > .r_lef{
    transform: rotate(19deg);
    transform-origin: top center;
    margin-left: 45px!important;
  }
& > .r_rig{
    transform: rotate(-19deg);
    transform-origin: top center;
    width: 82px;
  }
& >.kak_text {
    margin: 45px 25px;
    font-family: inglobal;
    font-size: 30px;
    line-height: 24px;
    font-weight: 700;
    font-style: italic;
    color: #ff431e;
    display: flex;
    align-items: center;
  }

}
}
</style>