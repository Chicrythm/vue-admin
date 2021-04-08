import cookie from "cookie_js";

// 当参数出现两次甚至是多次的时候可以统一用一个变量进行接收进行代码的优化

const adminToken = 'admin_token'
const userName = 'admin'

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