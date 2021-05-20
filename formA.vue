<template>
  <div class="column">
    <label class="inp_label">{{ input.name }}</label>
    <input type="text" :class="input.styleInp" v-model.lazy='value' @change.prevent="Show" >

  </div>
</template>

<script>
export default {
  name: "formA",
  props:['input', 'name'],
  data(){
    return{
     value:'',
    }
  },
  methods:{
    Show() {
      this.input.value = this.value
      if (this.input.value == '') {

        this.input.styleInp = "style_input_danger"

        } else if( this.input.styleInp == "style_input_danger" ){
        this.input.styleInp = "style_input"
        }
      this.$emit('get-data',{ value: this.value, name: this.input.name})
    },
  },
}
</script>

<style scoped>

.style_input{
  margin: 5px 10px;
  padding: 5px;
  background-color: lightgray;
  border:1px solid darkgray;
  border-radius: 2px;
}
.style_input_danger{
  margin: 5px 10px;
  padding: 5px;
  background-color: lightpink;
  border:1px solid red;
  border-radius: 2px;
}
.column{
  width: calc(100% - (70% - 150px));
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

}
.inp_label{
  text-transform: uppercase;
  color: #2c3e50;
}
</style>