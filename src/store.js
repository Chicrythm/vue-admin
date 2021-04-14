import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import app from './store/app';
import login from './store/login';
import infoDetailed from './store/infoDetailed';


/**
 * modules the store(vuex) status manage, use namespaced to distinguish difference funtion and variable name
 */
export default new Vuex.Store({
  modules:{
      app,
      login,
      infoDetailed
  }
});
