import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/scss/style.scss"
import inglobalReg from './assets/fonts/inglobal.ttf';
import inglobalLight from './assets/fonts/inglobalb.ttf';
import inglobalBold from './assets/fonts/inglobalbi.ttf';
import inglobalBoldIt from './assets/fonts/inglobali.ttf';


console.log(inglobalReg, inglobalLight, inglobalBold, inglobalBoldIt);

createApp(App)
    .use(router)
    .mount("#app")

