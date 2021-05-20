<template>
  <div>
      <h3>All!</h3>
      <table id="all">

        <tr-child-input v-for="(input, j) in inputs"
                        :input="input"
                        :key="j"
        ></tr-child-input>
        <tr-child-number v-for="(number,i) in numbers"
                         :number="number"
                         :id="number.id"
                         :key="i"

                         @remove-g="RemoveG"
        ></tr-child-number>
      </table>
    <button @click.prevent="$emit('show-form',{formDone: false})">back</button>
  </div>
</template>

<script>
import TrChildInput from "./TrChildInput";
import TrChildNumber from "./TrChildNumber";

export default {
name: "Table",
  props:['inputs', 'numbers', 'formDone' ],
  components:{
  TrChildInput, TrChildNumber
  },
  methods:{
  RemoveG(data){
    console.log(data)
    this.$emit('rem-g', data)
  }
  }
}
</script>

<style scoped>

</style>