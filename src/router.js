import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    // 默认路由
    {
      path: "/",
      name:"首页",
      redirect: "login",
      hidden: true,
    },


    // 登录路由
    {
      path: "/login",
      name: "Login",
      hidden: true,
      component: () =>
        import("./views/Login/index.vue")
    },


    // 控制台
    {
      path: "/console",
      name: "Console",
      redirect:'/index',
      hidden: false,
      meta:{
        name:'控制台'
      },
      component: () =>
        import("./views/Layout/index.vue"),
      children: [
        {
          path: "/index",
          name: "Index",
          meta:{
            name:'主页'
          },
          hidden: false,
          component: () =>
            import("./views/Console/index.vue"),
        }
      ]
    },

    // 信息管理
    {
      path: "/info",
      name: "Info",
      hidden: false,
      meta:{
        name:'信息管理'
      },
      component: () =>
        import("./views/Layout/index.vue"),
      children: [
        {
          path: "/infoIndex",
          name: "InfoIndex",
          meta:{
            name:'信息列表'
          },
          hidden: false,
          component: () =>
            import("./views/Info/infoIndex.vue"),
        },
        {
          path: "/infoCata",
          name: "InfoCata",
          meta:{
            name:'信息分类'
          },
          hidden: false,
          component: () =>
            import("./views/Info/infoCata.vue"),
        }
      ]
    },


    // 用户管理
    {
      path: "/user",
      name: "User",
      hidden: false,
      meta:{
        name:'用户管理'
      },
      component: () =>
        import("./views/Layout/index.vue"),
      children: [
        {
          path: "/userIndex",
          name: "UserIndex",
          meta:{
            name:'用户列表'
          },
          hidden: false,
          component: () =>
            import("./views/User/userIndex.vue"),
        }
      ]
    },
  ]
});
