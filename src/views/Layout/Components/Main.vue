<template>
    <div id='main'>
        <!-- 主体部分，没有内容 -->
        <div class='main-content'>
            <router-view />
        </div>
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
    @include webkit(box-sizing,border-box);
    @include webkit(border_close, all .3s ease 0s);
    @include webkit(transition, all .3s ease 0s);

    @keyframes border_close{
        0%{
            border: 30px solid transparent;
            
        }
        100%{
            border: 30px solid #f7f7f7;
        }
    }
}
.open{
    #main {  left: $navMenu; }
}
.close{
    #main {  
      left: $menuClose; 
    }
}
.main-content{
    width: 100%;
    height: 100%;
    border: 30px solid #f7f7f7;
    border-bottom: none;
    box-sizing:border-box;
    padding: 30px 30px 0 30px;
}
</style>