<!-- components 主要是一些公共能用的小的组建模块 像下拉的菜单框 -->
1. ref 属性绑定的变量必须跟声明出来的变量名称一致

2. 中央总线传值 所有条件下的组件都可以进行调用，但是都需要引入Bus.js 文件
@/utils/bus.js 文件下
```
import Vue from 'vue';
export default new Vue();
```
<!-- 在需要使用的地方emit -->
(1) Bus.$emit('getTarger', 11111)
<!-- 在任意的地方进行注册 -->
(2) Bus.$on('showFun', (data)={
    console.log(data)
})