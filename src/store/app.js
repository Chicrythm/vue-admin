import {getUserName} from "../utils/app"

const state = {
  isCollapse: JSON.parse(window.sessionStorage.getItem("isCollapse")) || false,
  userName: getUserName() || false,
};

const getters = {};

const mutations = {
  SET_COLLAPSE(state) {
    console.log('app')
    state.isCollapse = !state.isCollapse;
    window.sessionStorage.setItem(
      "isCollapse",
      JSON.stringify(state.isCollapse)
    );
  },
};

const actions = {};

export default {
  // 加入namespaced:true属性 引入命名空间
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
