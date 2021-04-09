<template>
  <div id='header'>
    <div class='pull-left'>
      <div>
        <i class='el-icon-s-operation' @click='open'></i>
      </div>
    </div>
    <!-- if i use display inline block there will be some px left in the top for no reason -->
    <!-- so that i use pull-left class to make sure that the div and the icon can leave in the same line     -->
    <div class='pull-right'>
      <div>
        <img src="../../../imgs/2.jpeg" alt="grandpa mao" class='pull-left user-pic'>
        <div class='user-info pull-left'>{{userName}}</div>
        <router-link to='login'>
          <i class='el-icon-switch-button'></i>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  setup(props, { root }) {
    // 在Header对vuex中的state进行改变，在Nav中进行监听

    const userName = root.$store.state.app.userName;

    /**
     * request store-state to control the status of nav-meun open 
     */
    const open = () => {
      root.$store.commit("app/SET_COLLAPSE");
      // root.$store.dispatch('setMenuStatus',{"name":"aaaaaa"})
    };


    return { open, userName };
  },
};
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
#header {
  position: fixed;
  left: $navMenu;
  top: 0;
  right: 0;
  // width: 85vw;
  height: 75px;
  background-color: transparent;
  z-index: 1;
  line-height: 75px;
  // -webkit-box-shadow:0 3px 16px 0 rgba(0, 0, 0, .1);
  @include webkit(box-shadow, 0 3px 16px 0 rgba(0, 0, 0, 0.1));
  @include webkit(transition, all 0.3s ease 0s);
}
.open {
  #header {
    left: $navMenu;
  }
}
.close {
  #header {
    left: $menuClose;
  }
}
.el-icon-s-operation {
  font-size: 25px;
  padding: 24px 0px 0px 32px;
  cursor: pointer;
}
.el-icon-switch-button {
  font-size: 25px;
  padding: 24px 32px 0px 32px;
  cursor: pointer;
}
.user-info {
  height: 100%;
  padding: 0 25px;
  margin-bottom: 4px;
  border-right: 1px solid #ededed;
  display: inline-block;
}
.user-pic {
  width: 50px;
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
}
</style>