<template>
  <div>
    <!-- {{id}} -->
    <!-- :options="editorOption" -->
    <el-input v-model="id" placeholder="请输入内容"></el-input>
    <quill-editor :content="content"  @change="onEditorChange($event)" />
    
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
import {ref} from "@vue/composition-api";
// import Quill from 'quill'
// import yourQuillModule from '../yourModulePath/yourQuillModule.js'


export default {
  name: "infoDetailed",
  components: {
    quillEditor,
  },
  setup(props, { root }) {
    // register the Quill modules
    //   Quill.register('modules/yourQuillModule', yourQuillModule)
    // router-link :to={query:{id:scope.row.id} } 通过root.$route.query 取得其对象内所要求的传的参数

    const id = ref(sessionStorage.getItem('infoId'))
    const content = ref(sessionStorage.getItem('infoAddress'))

    const onEditorChange = ({quill, html, text}) =>{
        console.log('editor change!',html, text)
        content.value = html
    }

    return{
        // property
        content,id,
        // methods
        onEditorChange
    }
  },
};
</script>
<style lang="scss">
</style>