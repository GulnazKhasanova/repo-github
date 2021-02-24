<template>
  <div>
  <div class="new_arrivals_background">
    <div class="new_arrivals">
      <p class="text_new_top">
        New Arrivals
      </p>
      <ul class="men_menu">
        <li class="men_menu_item"><a href="" class="men_menu_a">Home/</a></li>
        <li class="men_menu_item"><a href="" class="men_menu_a">Men/</a></li>
        <li class="men_menu_item"><a href="" class="men_menu_a men_menu_a_activ">New Arrivals</a></li>
      </ul>
    </div>
  </div>
  <main>
    <div class="shipping_adress">
      <h2 class="shiping_">01. Shipping Adress</h2>
      <div class="check_register">
        <div class="check">
          <p class="guest">Check as a guest or register</p>
          <p class="sub_guest">Register with us for future convenience</p>
          <form method="post" name="log_in" action="" @submit.prevent="submitHandler">
            <div class="radio">
              <div>
                <input type="radio" id="gast_radio" name="a">
                <label for="gast_radio" class="label_radio">checkout as guest</label>
              </div>
              <div>
                <input type="radio" id="register_radio" name="a" checked>
                <label for="register_radio" class="label_radio">register</label>
              </div>
            </div>
            <p class="save_tame">register and save time!</p>
            <p class="sub_guest">Register with us for future convenience</p>
            <p class="sub_guest" style="padding-top: 15px;"> <i class="fa-angle-double-right" aria-hidden="true"></i> Fast and easy checkout</p>
            <p class="sub_guest" style="padding-bottom: 38px;"><i class="fa-angle-double-right" aria-hidden="true"></i> Easy access to your order history and status</p>
            <button type="submit" class="continue">Continue</button>
          </form>
        </div>
        <div class="registed">
          <p class="guest">Already registed?</p>
          <p class="sub_guest">Please log in below</p>
          <form method="post" name="log_in" action="" @submit.prevent="submitHandler">
            <div class="text_login">
              <lable for="gast_email" class="email_password">EMAIL ADDRESS <span class="zvezda">*</span> </lable>
              <input type="text"
                     id="gast_email"
                     v-model.trim="email"
                     :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
                     placeholder=""
                     autofocus pattern="^([A-Za-z0-9\.-]+)(@)([a-z0-9-]+)(\.)([a-z0-9]{2,})$">
              <small v-if="($v.email.$dirty && !$v.email.required)" class="validate_form_invalid">Введите email</small>
              <small v-else-if="($v.email.$dirty && !$v.email.email)" class="validate_form_invalid">Введите корректный email</small>

              <lable for="gast_password" class="email_password">PASSWORD <span class="zvezda">*</span></lable>
              <input type="text"
                     id="gast_password"
                     v-model.trim="password"
                     :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
                     placeholder="">
              <small v-if="($v.password.$dirty && !$v.password.required)" class="validate_form_invalid">Введите пароль</small>
              <small v-else-if="($v.password.$dirty && !$v.password.minLength)" class="validate_form_invalid">Пароль не должен быть меньше {{$v.password.$params.minLength.min}} символов</small>
            </div>
            <p class="required_fileds" style="padding-bottom: 22px;">*Required Fileds</p>
            <button type="submit" class="continue">Log in</button>
            <a href="" class="forgot">Forgot Password ?</a>
          </form>
        </div>
      </div>
    </div>
    <div class="paragraph1_6">
      <h2 class="paragraph">02. BILLING INFORMATION</h2>
    </div>
    <div class="paragraph1_6">
      <h2 class="paragraph">03. SHIPPING INFORMATION</h2>
    </div>
    <div class="paragraph1_6">
      <h2 class="paragraph">04. SHIPPING METHOD</h2>
    </div>
    <div class="paragraph1_6">
      <h2 class="paragraph">05. PAYMENT METHOD</h2>
    </div>
    <div class="paragraph1_6">
      <h2 class="paragraph">06. ORDER REVIEW</h2>
    </div>
  </main>
  </div>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
export default {
name: "checkout",
  data: () => ({
    email:'',
    password:''
}),
  validations: {
    email:{email, required},
    password: {required, minLength:minLength(12)}
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData);
      this.$router.push('/');
    }

  }
}
</script>

<style scoped>
.validate_form_invalid {
  font-size: small;
  color: red;
}
</style>