<template>
  <div class="contacts">
    <div class="blue_cont">
      <h4>Lorem ipsum dolor sit amet</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <ul>
        <li>Индивидуальные занятия</li>
        <li>Занятия в паре</li>
        <li>Занятия в мини-группе</li>
        <li>Занятия в группе</li>
      </ul>
    </div>
    <div class="pink_cont">
      <h4>Lorem ipsum dolor sit amet</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <ul>
        <li>Индивидуальные занятия</li>
        <li>Занятия в паре</li>
        <li>Занятия в мини-группе</li>
        <li>Занятия в группе</li>
      </ul>
    </div>
    <div class="box_img">
      <img src="~@/assets/img/layer_22_1967.png" alt="">
      <img src="~@/assets/img/layer_24_1970.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
name: "Contacts"
}
</script>

<style lang="scss">
.contacts{
  margin: 50px auto 0;
  position: relative;
  display: flex;
  flex-direction: row;
  max-width: 950px;
  width: 100%;
  height: 527px;
  justify-content: space-between;
& > .blue_cont{
    position: relative;
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1%;
    padding-right: 3%;
& > h4{
    text-shadow: -1px 1px 0px 0px #003c66;
    font-family: $ing-it;
    font-size: 36px;
    line-height: 1.2;
    font-weight: 700;
    font-style: italic;
    color: #0694f8;
  }
& > h4, p, ul{text-align: left;
    width: 70%;
  }
& > ul{
    font-weight: 700;
& > li {
    padding: 0 15px;
    list-style: none;
    background: url('~@/assets/img/ind_1784.png') no-repeat left center;
  }
}
}
& > .pink_cont{
    position: relative;
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-left: 3%;
    padding-right: 1%;
& > h4{
    text-shadow: -1px 1px 0px 0px #003c66;
    font-family: $ing-it;
    font-size: 36px;
    line-height: 1.2;
    font-weight: 700;
    font-style: italic;
    color: #ff431e;
  }
& > h4, p, ul{
    width: 70%;
    text-align: right;
  }
& > ul{
    font-weight: 700;
& > li {
    padding: 0 15px;
    list-style: none;
    background: url('~@/assets/img/ind_1772.png') no-repeat right center;
  }
}
}
}.box_img{
   margin: 0 auto;
   height:650px;
   max-width:950px;
   width: 100%;
   position: absolute;
   background:
       url('~@/assets/img/layer_23_1968.png')no-repeat 50% 40%,
       url('~@/assets/img/box2_402.png')no-repeat 50% 50%;
   & > img:first-child{
     margin-left: -155px;
     margin-top: 150px;
     margin-right: 15px;
   }
   & > img:last-child{
     margin-bottom: 180px;
   }
 }
</style>