import cookie from "cookie_js";

// 当参数出现两次甚至是多次的时候可以统一用一个变量进行接收进行代码的优化

const adminToken = 'admin_token'
const userName = 'admin'

/**
 * the utils to get the cookies info and user info
 * @returns 
 */
export function getToken() {
    return cookie.get(adminToken)
}

export function setToken(value) {
    cookie.set(adminToken,value)
}

export function getUserName() {
    return cookie.get(userName)
}

export function setUserName(value) {
    cookie.set(userName,value)
}

// 把清理消息的全写到一个新的函数上
export function clearLogoutInfo() {
    cookie.remove(adminToken)
    cookie.remove(userName)
}