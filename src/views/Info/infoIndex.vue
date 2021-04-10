<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <!-- when you try to link with variable you should ues bind to achieve it -->
      <el-row>
        <el-col :span="4">
          <!-- part1 the type select button -->
          <el-form-item label="类型">
            <el-select v-model="formInline.region" placeholder="类型选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <!-- part2 the time picker -->
          <template>
            <el-form-item label='日期:'>
              <el-time-picker is-range v-model="date1.value1" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
              </el-time-picker>
            </el-form-item>
          </template>
        </el-col>
        <el-col :span="12">
          <!-- part3 select key words for search -->
          <el-form-item label="关键字">
            <template>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-form-item>
          <el-form-item>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="danger">搜索</el-button>
            <el-button type="success" @click='dialogFlag = true'>新增</el-button>
          </el-form-item>

        </el-col>
      </el-row>
    </el-form>

    <!-- the table content -->
    <template>
      <el-table :cell-style="{'text-align': 'center'}" :header-cell-style="{background:'#eef1f6',color:'#606266','text-align':'center'}" ref="multipleTable" border :data="tableData.dataList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column label="id" width="120" prop="id">
        </el-table-column>
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label='id'>
          <template slot-scope="scope">
            <!-- through scope row id to get the id domain -->
            <el-button type="danger" @click='deleteItem(scope.row.id)'>删除</el-button>
          </template>

        </el-table-column>

      </el-table>
    </template>

    <!-- delete button and page thing -->
    <div class='table-buttom'>
      <el-button class='pull-left' @click='delteteAll()'>批量删除</el-button>
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="16"
      class='pull-right'
      >
    </el-pagination>
    </div>

    <!-- add Dialog -->
    <!-- if the flag is sync, we can save many way that we achieve to modify the father's component property -->
    <DialogInfo :flag.sync="dialogFlag" @updateFlag='close' />

  </div>
</template>
<script>
import { reactive, ref } from "@vue/composition-api";
// import confirm from '@/utils/global.js';
import { global } from "@/utils/global_v3.0";

import DialogInfo from "./Dialog/info.vue";
export default {
  name: "infoIndex",
  components: {
    DialogInfo,
  },
  setup(props, { root }) {
    // f**k you bitch the funcition name get wrong
    const { confirm } = global();

    const formInline = reactive({
      user: "",
      region: "",
    });

    const date1 = reactive({
      value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
    });

    const options = reactive([
      {
        value: "选项1",
        label: "黄金糕",
      },
      {
        value: "选项2",
        label: "双皮奶",
      },
      {
        value: "选项3",
        label: "蚵仔煎",
      },
      {
        value: "选项4",
        label: "龙须面",
      },
      {
        value: "选项5",
        label: "北京烤鸭",
      },
    ]);

    const value = ref("");

    const input = ref("");

    let tableData = reactive({
      dataList: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    });

    const multipleSelection = reactive([]);

    const handleSelectionChange = (val) => {
      root.multipleSelection = val;
    };

    const dialogFlag = ref(false);

    const close = () => {
      // the css3 property should use the .value way to fix it value but not root.property!!!!!!!!remember it
      dialogFlag.value = false;
      console.log("dialogFlag:", dialogFlag.value);
    };

    const con = (value) => {
      console.log(value);
    };

    // according to id to delete the
    var arrRemoveJson = function (arr, value) {
      if (!arr || arr.length == 0) {
        return "";
      }
      let newArr = arr.filter(function (item, index) {
        return item['id'] != value;
      });
      return newArr;
    };

    /**
     * delte table data Item
     */
    const deleteItem = (itemId) => {
      confirm({
        message: "该操作将删除选中文件，是否继续",
        fn: con,
        userName: "yeziqing",
      });

      tableData.dataList = arrRemoveJson(tableData.dataList,itemId);
    };

    const delteteAll = () => {
      confirm({
        fn: con,
        userName: "yangcong",
      });
      root.$refs.multipleTable.toggleRowSelection()
    };
    
    /**
     * page utils
     */
    const currentPage4 = ref(1)

    const handleSizeChange = (val)=>{
      console.log(`每页 ${val} 条`);
    }

    const handleCurrentChange = (val) => {
      console.log(`当前页 ${val} `);
    }

    return {
      formInline,
      date1,
      options,
      value,
      input,
      tableData,
      multipleSelection,
      handleSelectionChange,
      //dialogFormVisible,
      dialogFlag,
      close,
      deleteItem,
      delteteAll,
      con,
      currentPage4,
      handleSizeChange,
      handleCurrentChange
    };
  },
};
</script>
<style lang="scss" scoped>
.table-buttom {
  padding-top: 30px;
}
</style>