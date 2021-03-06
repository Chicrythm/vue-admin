import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueCompositionApi from "@vue/composition-api";
import "./router/guard.js";

// vue2.0 the global function() Vue.use to register
// import global from './utils/global';
// import Axios from 'axios'

// Vue.prototype.$http = Axios

Vue.component('svg-icon',{
  template:`<div>asdfghjk</div>`
})

// Vue.use(global);

Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

Vue.use(ElementUI);



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
