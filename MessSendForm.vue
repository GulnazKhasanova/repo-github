<template>
  <div>
    <h2 class="green_mess">Форма отправлена</h2>
    <p>{{ sendFlage }}</p>
  </div>
</template>

<script>
export default {
name: "MessSendForm",
  props:['sendFlage'],

}
</script>

<style scoped>
.green_mess{
  color: green;
}
</style>