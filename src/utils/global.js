import { MessageBox } from 'element-ui';
export default {
  install(Vue, options) {
    Vue.prototype.confirm = (params) => {
      MessageBox
        .confirm(params.message || "此操作将删除勾中的选项, 是否继续?", "删除", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
        .then(() => {
          console.log('confirm.then')
          params.fn && params.fn(params.userName)
        //     this.$message({
        //     type: "success",
        //     message: "删除成功!",
        //   });
        })
        .catch(() => {
        //     this.$message({
        //     type: "warning",
        //     message: "已取消删除",
        //   });
        });
    };
  },
};
