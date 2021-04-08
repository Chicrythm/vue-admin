import router from "../router"
import {getToken} from '../utils/app'

const whiteRoute = ['/login','/'];


// NMD 这个函数参数的顺序是有讲究的 必须是to from 和 next
// 有些问题一开始能找到问题的时候，好处理就尽快处理 否则到后期更难找到bug的存在

router.beforeEach((to, from, next) => {
    if(getToken()) {
        next()
        // console.log('exist')
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
