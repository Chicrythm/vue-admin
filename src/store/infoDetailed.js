const state = {
  id: "" || sessionStorage.getItem("Id"),
  address: "" || sessionStorage.getItem("Address"),
};

const getters = {};

//   mutations commit
const mutations = {
    SET_STATUE_VALUE(state, params){
        for(let key in params){
            console.log(key)
            console.log(params[key].value)
            state[key] = params[key].value
            if(params[key].session){
                sessionStorage.setItem(params[key].sessionKey,params[key].value)
            }
        }
    }
};

//   actions dispatch
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
