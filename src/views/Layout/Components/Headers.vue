<template>
    <div id='header'>
        头部导航栏
    </div>
</template>
<script>
export default {
    name:'Header'
}
</script>
<style lang="scss" scoped>
@import '../../../styles/config.scss';
#header{
    position: fixed;
    left: $navMenu;
    width: 100vw;
    height: 75px;
    background-color: white;
    z-index: 1;
    -webkit-box-shadow:0 3px 16px 0 rgba(0, 0, 0, .1)
}
</style>