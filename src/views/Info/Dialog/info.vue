<template>
  <div>
    <!-- 表单 加上.sync参数后缀的话可以同步父组件传过来的参数而不需要通过emit函数回调父组件调用函数来改-->
    <!-- 符合了数据的单向流的 -->
    <!-- close事件绑定了组件中的close函数，改变 dialog_info_flag的值，同时调用emit函数-->
    <el-dialog title="收货地址" :visible='dialog_info_flag' @close='close'>
      sdfafadsfa
    </el-dialog>
  </div>
</template>

<script>
export default {
    name:'diagloInfo',
    // props 声明父组件传输值的类型
    props:{
        flag:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            dialog_info_flag: false
        }
    },
    methods:{
        close(){
            // this is a complex situation, if there are any logic thing to handle, we should use this way or 
            // we just need to use sync property
            this.dialog_info_flag = false
            // console.log('dialog_info_flag:', this.dialog_info_flag)
            // this.$emit('updateFlag')
            this.$emit('update:flag',false);
        }
    },
    // 通过监控改父组件传值的改变，在子组件声明函数，每次改变父组件传过来的变量值的同时改变子组件中绑定的变量
    watch:{
        flag:{
            handler(newValue, oldValue) {
                this.dialog_info_flag = newValue
            }
        }
    }
};
</script>

<style lang="scss">
</style>