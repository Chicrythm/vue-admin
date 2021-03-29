<template>
    <div id='main'>
        <!-- 主体部分，没有内容 -->
        <router-view />
    </div>
</template>
<script>
export default {
    name:'Main'
}
</script>
<style lang="scss" scoped>
@import '../../../styles/config.scss';
    #main{
        position:fixed;
        top:75px;
        left:$navMenu;
        right: 0;
        height: 100vh;
        border: 30px solid #f7f7f7;
        border-bottom: none;
        // background-color: violet;
    }
</style>