<template>
  <div class="components-table">
    <el-table
      id="h-table"
      ref="h-table"
      v-loading="loading"
      :data="sourceData"
      header-cell-class-name="header-cell-class"
      cell-class-name="cell-class"
      :border="border"
      :stripe="stripe"
      :row-class-name="tabRowClassName"
    >
      <template v-for="col in columns">

        <!-- 表格内没有数据默认展示为空 -->
        <!-- <el-table-column :key="col.prop" v-bind="{ ...col }" align="center" /> -->

        <!-- 表格内没有数据展示暂无数据 -->
        <el-table-column :key="col.prop" v-bind="{ ...col }" align="center">
          <template slot-scope="scope">{{ scope.row[col.prop]||'暂无数据' }} </template>
        </el-table-column>

      </template>
      <el-table-column
        v-if="showOperate"
        fixed="right"
        label="操作"
        :width="showOperateWidth"
        align="center"
      >
        <template slot-scope="scope">
          <slot name="oprtate" :row="scope.row" :index="scope.$index" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { sourceData, columns } from './const'
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
      desc: 'loading'
    },
    sourceData: {
      type: Array,
      default: () => sourceData,
      desc: 'table数据'
    },
    columns: {
      type: Array,
      default: () => columns,
      desc: 'table表头'
    },
    showOperateWidth: {
      type: String,
      default: '100',
      desc: '操作宽度'
    },
    showOperate: {
      type: Boolean,
      default: false,
      desc: '是否显示操作'
    },
    border: {
      type: Boolean,
      default: false,
      desc: '是否带有纵向边框'
    },
    stripe: {
      type: Boolean,
      default: false,
      desc: '是否为斑马纹 table（注：不可与row-class-name自定义斑马纹同时设置）'
    }
  },
  methods: {
    // 注：不可与stripe斑马纹同时设置
    tabRowClassName({ rowIndex }) {
      const index = rowIndex + 1
      if (index % 2 === 0) {
        return 'warning-row'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep {
  .header-cell-class {
    color: #696969;
  }
  .cell-class {
    color: #696969;
  }
  .warning-row {
    background: #eef2f8;
  }
}
</style>
