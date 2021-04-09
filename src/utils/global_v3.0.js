import { MessageBox } from 'element-ui';
import {ref} from '@vue/composition-api';

export function global(){

    const str = ref('11111')

    const confirm = (params) =>{
        MessageBox
        .confirm(params.message || "此操作将删除勾中的选项, 是否继续?", "删除", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
        .then(() => {
            // console.log(params.id)
            params.fn && params.fn(params.userName)
        })
        .catch(() => {
        });
    }

    return {
        confirm,
        str
    }
}