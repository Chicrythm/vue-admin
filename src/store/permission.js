import {defaultRouterMap, asnycRouterMap} from '../router.js'
import store from '../store.js';



const state = {
    allRouter: defaultRouterMap,
    addRouter: [],
    roles: []
};

const getters = {
    roles: state => state.roles,
    allRouter: state => state.allRouter,
    addRouter: state => state.addRouter
};

const mutations = {
    SET_ROLES(state, value){
        state.roles = value
    },
    SET_ROUTER(state, value) {
        state.addRouter = value
        state.allRouter = defaultRouterMap.concat(state.addRouter)
    }
};

// use root.$store.dispatch('app/exit', params) to invoke
const actions = {
    getRouter({commit}, requestData){
        return new Promise((resolve, reject) => {
            // modify to request the interface
            const user = ['infoSystem']
            // const user = []
            // console.log('1111')
            store.commit('permission/SET_ROLES', user)
            resolve()
        })
    },

    // 创建路由
    createRouter({commit}, requestData){
        return new Promise((resolve, reject) => {
            let data = requestData
            // filter语法
            const addRouter = asnycRouterMap.filter(item =>{
                // es6 循环语法
                if (data.includes(item.meta.system)){
                    return item
                }
            })
            store.commit('permission/SET_ROUTER',addRouter)
            resolve()
        })
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
