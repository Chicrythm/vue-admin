<template>
  <div>
    <!-- 表单 -->
    <el-dialog title="收货地址" :visible.sync='dialog_info_flag' @close='close'>
      sdfafadsfa
    </el-dialog>
  </div>
</template>

<script>
export default {
    name:'diagloInfo',
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