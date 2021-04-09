<template>
  <div id='login'>
    <div class='nav'>
      <ul class='nav-menu'>
        <li class='current' @click='toogleBar'>登录</li>
        <li>注册</li>
      </ul>
    </div>
    <button @click='tiaozhuan'>跳转</button>
  </div>
</template>
<script>
// import {valideteAcc} from '@utils/validate.js';
// import Axios from 'axios'
// 直接sha1() 函数加密需要加密的内容就可以使用
import sha1 from "js-sha1";
import { GetSms } from "../../api/login";
import { setToken, setUserName } from "../../utils/app";
import {
  onMounted,
  Ref,
  reactive,
  isRef,
  toRefs,
  ref,
} from "@vue/composition-api";
export default {
  name: "login",
  setup(props, { refs, root }) {
    //    console.log(context)

    let model = ref("login");
    let rea = reactive([
      { txt: "登录", current: true },
      { txt: "注册", current: true },
    ]);

    /**
     * mock the interface of login
     */
    const toogleBar = () => {
      // 前端首次做拦截
      console.log("点击登录");
      let data = "";
      GetSms(data);
    };

    const toogleName = (str) => {
      console.log("起飞咯");
    };

    /**
     * before login request some token info for the router intercept
     */
    const tiaozhuan = () => {
      const TOKEN = '123456'
      const USERNAME = 'yeziqing'
      setToken(TOKEN);
      setUserName(USERNAME);

      //after we add the namespaced property, we must add app prefix to use the app store thinks
      root.$store.commit('app/SET_TOKEN', TOKEN);
      root.$store.commit('app/SET_USERNAME', USERNAME);
      // use query to carry some params, use params to carry params secretly
      root.$router.push({
        name: "Console",
        // query:{
        //     id:'1',
        //     name:'yeziqing'
        // }
      });
    };

    return {
      toogleName,
      model,
      rea,
      toogleBar,
      tiaozhuan,
    };
  },
};
</script>
<style scoped lang='scss'>
#login {
  background-color: wheat;
}
.nav {
  margin: auto;
  text-align: center;
  width: 300px;
  height: 300px;
}
.nav-menu li {
  display: inline-block;
  height: 30px;
  width: 100px;
  border-radius: 2px;
}
.current {
  background-color: aquamarine;
}
</style>