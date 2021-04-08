<template>
  <div id='nav'>
    <div class='logo'>
      <img src="../../../imgs/2.jpeg" alt="" class='logo'>
    </div>
    <el-menu default-active="2" 
    class="el-menu-vertical-demo" 
    :collapse="isCollapse"
    background-color='transparent' 
    text-color='white' 
    router
    >
      <template v-for='(item,index) in route'>
        <el-submenu :key='item.id' :index='index.toString()' v-if='!item.hidden'>
          <template slot='title'>
            <i :class="item.meta.icon"></i>
            <span class='menu-name'>{{item.meta.name}}</span>
          </template>
          <template v-for='subItem in item.children'>
            <el-menu-item :key='subItem.id' :index='subItem.path.toString()'>{{subItem.meta.name}}</el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { computed, ref } from "@vue/composition-api";
export default {
  name: "Nav",
  setup(props, { root }) {
    const col = ref(false)
    const route = root.$router.options.routes;
    
    // 注意 需要在Nav中对store.js下的初始状态进行简单监听,且由于在完成生命周期之前就会把所有的script进行
    // Nav 中对 isCollapse 进行监控，返回的是需要监听的变量
    const isCollapse = computed(() => 
    {
      return root.$store.state.app.isCollapse
      // root.$store.dispatch('setMenuStatus',{"name":"aaaa"})
    })

    // json对象使用时，key和value都使用双引号括住
    

    return {
      route,
      isCollapse,
      col,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
#nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: $navMenu;
  background-color: #344a5f;
  z-index:100;
  // transition: all 2s ease 0;
  @include webkit(transition, all .3s ease 0s);
  
}
.open{
  #nav {  width: $navMenu; }
}
.close{
  #nav {  width: $menuClose; }
  .menu-name{
    display: none;
    transition-delay: 0.15s;
  }
}
.el-menu-vertical-demo {
  border: none;
  padding: 0;
}
.logo{
  width: 94px;
  height: 94px;
  margin: auto;
  padding-top: 15px;
  padding-bottom: 30px;
}
</style>