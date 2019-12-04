import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import vuetify from "./plugins/vuetify";
import "./plugins";
import "./plugins/firebase";
import "./plugins/vue-toasted";
import "./error";
require("./assets/style.scss");
Vue.config.productionTip = false;

Vue.filter("doubleDigits", function(val) {
  if (isNaN(val)) {
    return "00";
  } else {
    return val < 10 ? "0" + val : val;
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
