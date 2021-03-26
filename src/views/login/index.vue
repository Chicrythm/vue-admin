<template>
    <div id='login'>
        <div class='nav'>
            <ul class='nav-menu'>
                <li class='current'>登录</li>
                <li>注册</li>
            </ul>
        </div>
    </div>
</template>
<script>
// import {valideteAcc} from '@utils/validate.js';
export default {
    name:'login',
    components:{

    },
    data(){
        return{

        }
    },
    methods:{

    },
    props:{

    },
    watch:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang='scss'>
#login{
    background-color: aqua;
}
.nav{
    margin: auto;
    text-align: center;
    width: 300px;
    height: 300px;
}
.nav-menu li{
    display:inline-block;
    height: 30px;
    width: 100px;
    border-radius: 2px;
    line-height: 300px;
}
.current{
    background-color:aquamarine;
}
</style>