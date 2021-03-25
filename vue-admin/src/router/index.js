import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";
import login from "../views/login/login.vue";


const routes = [
  {
    path:'/',
    name:'login',
    component: ()=>
    import("../views/login/login.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: ()=>
      import("../views/login/login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
