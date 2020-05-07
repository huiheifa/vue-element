<template>
  <div class="app-container">
    <h-table show-operate show-operate-width="100" :loading="loading">
      <div slot="oprtate" slot-scope="data">
        <el-button type="text" size="small" @click="handleOperate(data.row,data.index)">操作测试</el-button>
      </div>
    </h-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    handleOperate(row, index) {
      console.log(row)
      console.log(index)
    }
  }
}
</script>
