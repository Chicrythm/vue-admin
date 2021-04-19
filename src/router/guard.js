import router from "../router"
import {clearLogoutInfo, getToken, getUserName} from '../utils/app'
import store from "../store.js"
import {defaultRouterMap, asnycRouterMap} from '../router.js'
// import {getRouter} from '../store/permission'

const whiteRoute = ['/login','/'];


// NMD 这个函数参数的顺序是有讲究的 必须是to from 和 next
// 有些问题一开始能找到问题的时候，好处理就尽快处理 否则到后期更难找到bug的存在

router.beforeEach((to, from, next) => {
    if(getToken()) {
        if (to.path == '/login') {
            clearLogoutInfo()
            store.commit('app/SET_TOKEN','')
            store.commit('app/SET_USERNAME', '')
            next()
        }else{
            // 获取当前角色 若角色长度为0 时进行角色请求
            if (store.getters['permission/roles'].length === 0 ){
                // console.log('11231')
                // 完成了角色的设置
                store.dispatch('permission/getRouter').then(response => {
                    const roles = store.getters['permission/roles']
                    store.dispatch('permission/createRouter',roles).then(response => {
                        let addRouter = store.getters['permission/addRouter']
                        let allRouter = store.getters['permission/allRouter']
                        // 对路由进行更新
                        router.options.routes = allRouter
                        // 添加动态路由
                        for (i in addRouter.length){
                            console.log(i)
                            router.addRoute(addRouter[i])
                        }
                        next({...to, replace:true})

                    })
                });
                
            }
            else{
                
                next()
            }
            
            
        }
    }else{
        // indexOf == -1 的时候代表不存在
        if (whiteRoute.indexOf(to.path) !== -1){
            next()
        }else{
            console.log(to.path)
            next('login')
            console.log('doesnot exist')
        }     
    }
});
