import Vue from "vue";
import App from "./App.vue";
import SuiVue from "semantic-ui-vue";
import { store } from "./store/store";

import "semantic-ui-css/semantic.min.css";

Vue.use(SuiVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
