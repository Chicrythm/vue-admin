import {getToken, getUserName} from "../utils/app"

const state = {
  isCollapse: JSON.parse(window.sessionStorage.getItem("isCollapse")) || false,
  userName: getUserName() || false,
  token: getToken() || '',
};

const getters = {};

const mutations = {
  SET_COLLAPSE(state) {
    console.log('app')
    state.isCollapse = !state.isCollapse;
    // save in sessionStroage to keep the status Unchanged
    window.sessionStorage.setItem(
      "isCollapse",
      JSON.stringify(state.isCollapse)
    );
  },
  SET_TOKEN(state, value) {
    state.token = value
  },
  SET_USERNAME(state, value) {
    state.userName = value
  }
};

// use root.$store.dispatch('app/exit', params) to invoke
const actions = {
  // when the user logout from header, we clear the useful info from vuex and cookie
  exit(){

  }
};

export default {
  // 加入namespaced:true属性 引入命名空间
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
