<template>
  <div id='nav'>
    <el-menu default-active="2" 
    class="el-menu-vertical-demo" 
    @open="handleOpen" 
    @close="handleClose" 
    background-color='transparent' 
    text-color='white'
    router>
      <template v-for='(item,index) in route'>
        <el-submenu :key='item.id' :index='index.toString()' v-if='!item.hidden'>
        <template slot='title'>
            <i class="el-icon-menu"></i>
            <span>{{item.meta.name}}</span>
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
import {
  onMounted,
  Ref,
  reactive,
  isRef,
  toRefs,
  ref,
} from "@vue/composition-api";
export default {
  name: "Nav",
  setup(props, { root }) {
    const route = root.$router.options.routes;

    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };

    return {
      handleOpen,
      handleClose,
      route,
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
}
.el-menu-vertical-demo {
  border: none;
  padding: 0;
}
</style>