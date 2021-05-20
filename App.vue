<template>
  <div id="app">
    <form method="get" >
      <form-a v-for="(input,i) in inputs"
              :key="i"
              :input="input"
              :inputs="inputs"
              @get-data="validFunc">
      </form-a>
      <div v-show="sendFlage == false">
        <h3  class="err_mess">Проверьте правильность заполнения полей</h3>
      </div>
      <input class="but_subm" type="submit" @click.prevent="SendData($event)">

      <mess-send-form v-show="isAct == true" ></mess-send-form>
    </form>
  </div>
</template>

<script>
import MessSendForm from "@/components/MessSendForm";
import formA from "@/components/formA";

export default {
  name: 'App',
  components: {MessSendForm, formA},
  data() {
    return {
      inputs: [
        {styleInp: 'style_input',
          value: '',
          name: 'email',
          valid: false
        },
        {
          styleInp: 'style_input',
          value: '',
          name: 'phone',
          valid: false
        },
        {styleInp: 'style_input',
          value: '',
          name: 'firstName',
          valid: false
        },
      ],
      regTel: /^\d+$/,
      regName: /^[а-яА-Яa-zA-Z_]+$/,
      regEm: /^\w+@+?/,
      sendFlage: true,
      isAct: false,
    }
  },
  computed: {},
  methods: {
    checkValid(inp){
      console.log(inp.value)
        if((inp.name == 'email' ) && (inp.value)){
          return this.regEm.test(inp.value)
        }
        else if((inp.name == 'phone') && (inp.value)){
          return this.regTel.test(inp.value)}
        else if((inp.name == 'firstName') && (inp.value)){
          return this.regName.test(inp.value)
        }
    },

    validFunc(data) {
      console.log(data.value)

      if (data.value){
        this.inputs.forEach(elem => {
          if ((elem.name == data.name) && this.checkValid(elem)){
            elem.valid = true
          }

        })
      } else {
        data.styleInp = "style_input_danger"
      }
    },

    SendData(e) {
      if (this.inputs.every(elem => elem.valid == true)) {

        this.sendFlage = true
        this.isAct = true

      } else {
        this.inputs.forEach(elem => {
          if(elem.value == ''){
              elem.styleInp = "style_input_danger"
          }
        })
        this.sendFlage = false
        this.isAct = false
        e.preventDefault()
      }
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.err_mess{
  color:red;
}
.but_subm{
  color:#fff;
  text-transform: uppercase;
  width: 150px;
  height: 35px;
  border: 1px solid #e5e5e5;
  border-radius: 5%;
  background-color: cornflowerblue;
}
.but_subm:hover{
 background-color: aquamarine;
}
.but_subm:active{
  background-color: cadetblue;
}

</style>
