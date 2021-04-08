import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import app from './store/app';
import login from './store/login';

export default new Vuex.Store({
  modules:{
      app,
      login
  }
});
