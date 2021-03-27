<template>
    <div id='login'>
        <div class='nav'>
            <ul class='nav-menu'>
                <li class='current' @click='toogleBar'>登录</li>
                <li>注册</li>
            </ul>
        </div>
    </div>
</template>
<script>
// import {valideteAcc} from '@utils/validate.js';
import {onMounted, Ref, reactive, isRef, toRefs, ref} from '@vue/composition-api';
export default {
    name:'login',
    setup(props, context){

       

        let model = ref('login')
        let rea =  reactive([
            {txt:'登录',current:true},
            {txt:'注册',current:true},
        ])

        const toogleBar = ( ()=>{
            console.log('点击登录')
        })

         const toogleName = (str =>{
            console.log('起飞咯')
        })

        onMounted(() => {
            
        })

        return{
            toogleName,
            model,
            rea,
            toogleBar
        }
    },
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
}
.current{
    background-color:aquamarine;
}
</style>