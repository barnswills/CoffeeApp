import Vue from "vue";
import App from "./App.vue";
import SuiVue from "semantic-ui-vue";
import store from "./store/store";
import Vuex from "vuex";

Vue.use(SuiVue);
Vue.use(Vuex);

Vue.config.productionTip = false;

//Vue.use(Vuex);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
