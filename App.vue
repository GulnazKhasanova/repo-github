<template>

    <div id="app">
      <div>
        <form id="form" v-show="formDone == false" action="" method="get" @show-form="showForm" >
          <div class="row_w">

            <div class="column">
                   <guests v-for="(input, i) in inputs"
                           :key="i"
                           :input="input"
                           @isButton="ButtonIs"
                   ></guests>
            </div>
          </div>
          <hr>
          <h3>Guests</h3>

          <label for="add_guest">Guest</label>
          <button id="add_guest" @click.prevent="generItem">1</button>

          <div>
            <add-guest v-for="(number,i) in numbers"
                       :key="i"
                       :number="number"
                       :id="number.id"
            @add-guest="addGuest"></add-guest>
          </div>

          <button type="button"
                  v-bind:disabled="!isButtonDisabled"
                  @click.prevent="sendData">Send Data</button>
        </form>
      </div>

      <Table v-if="formDone == true"
             :numbers="numbers"
             :inputs="inputs"
              @rem-g="removGuest"
             @show-form="showForm">

      </Table>

    </div>

</template>

<script>
import Guests from "./components/Guests";
import addGuest from "./components/addGuest";
import Table from "./components/Table";

export default {
  name: 'App',
  components: {
    Guests, addGuest, Table
  },
  data() {
    return {
      numbers: [],
      inputs: [
        {
          value: '',
          name: 'email',
          valid: false
        },
        {
          value: '',
          name: 'phone',
          valid: false
        },
        {
          value: '',
          name: 'firstName',
          valid: false
        },
        {
          value: '',
          name: 'lastName',
          valid: false
        },

      ],
      isButtonDisabled: false,
      formDone: false,
      guestId: 0,
    }
  },
  computed: {},
  methods: {
    addGuest(data) {
      this.numbers.forEach((number) => {
        if (data.id == number.id) {
          number.value = data.value
        }
        console.log(number.value);
        console.log(data.value);
        console.log(number.id);
        console.log(data.id);
      })
    },
    sendData() {
      if (this.isButtonDisabled) {
        this.formDone = true;
        this.numbers = this.numbers.filter(number => number.value != '')
      }
      console.log(this.formDone);
    },
    showForm(data) {
      this.formDone = data.formDone
  },
  ButtonIs(data) {
    this.inputs.forEach((input) => {
      if (data.name == input.name) {
        input.value = data.value;
        input.valid = true;
      }
      console.log(data)
      console.log(input.value)
      console.log(input.valid)
    });

    this.isButtonDisabled = this.inputs.every(input => input.valid == true)
    console.log(this.isButtonDisabled)
  },
  removGuest(item) {
    console.log(item.id)
    let len = this.numbers.indexOf(item.value);
    this.numbers.splice(len,1)
    console.log(this.numbers)

  },
  generItem() {
    this.numbers.push({id: ++this.guestId, value: ''})
  },
}
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input{
  display: block;
}
.column{
  display: flex;
  flex-direction: column;
}
.row_w{
  display: flex;
  flex-direction: row;
}

li{

}
ul{
  list-style: none;
}
</style>
