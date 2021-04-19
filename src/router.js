import Vue from "vue";
import Router from "vue-router";
import Layout from "@/views/Layout/index.vue";

Vue.use(Router);

/**
 * 默认路由
 */
export const defaultRouterMap = [
  // 默认路由
  {
    path: "/",
    name: "首页",
    redirect: "login",
    hidden: true,
  },

  // 登录路由
  {
    path: "/login",
    name: "Login",
    hidden: true,
    component: () => import("./views/login/index.vue"),
  },

  // 控制台
  {
    path: "/console",
    name: "Console",
    redirect: "/index",
    hidden: false,
    meta: {
      name: "控制台",
      icon: "el-icon-user-solid",
    },
    component: Layout,
    children: [
      {
        path: "/index",
        name: "Index",
        meta: {
          name: "主页",
        },
        hidden: false,
        component: () => import("./views/Console/index.vue"),
      },
    ],
  },
]



export const asnycRouterMap = [
  // 信息管理
  {
    path: "/info",
    name: "Info",
    hidden: false,
    meta: {
      name: "信息管理",
      icon: "el-icon-star-on",
      system:"infoSystem"
    },
    component: Layout,
    children: [
      {
        path: "/infoIndex",
        name: "InfoIndex",
        meta: {
          name: "信息列表",
        },
        hidden: false,
        component: () => import("./views/Info/infoIndex.vue"),
      },
      {
        path: "/infoCata",
        name: "InfoCata",
        meta: {
          name: "信息分类",
        },
        hidden: false,
        component: () => import("./views/Info/infoCata.vue"),
      },
      {
        path: "/infoDetailed",
        name: "InfoDetailed",
        meta: {
          name: "信息分类",
        },
        hidden: false,
        component: () => import("./views/Info/infoDetailed.vue"),
      },
    ],
  },

  // 用户管理
  {
    path: "/user",
    name: "User",
    hidden: false,
    meta: {
      name: "用户管理",
      icon: "el-icon-question",
      system:"userSystem"
    },
    component: Layout,
    children: [
      {
        path: "/userIndex",
        name: "UserIndex",
        meta: {
          name: "用户列表",
        },
        hidden: false,
        component: () => import("./views/User/userIndex.vue"),
      },
    ],
  },
]


export default new Router({
  routes: defaultRouterMap 
  
});
