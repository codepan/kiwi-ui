<template>
  <kw-layout>
    <kw-nav>Table 表格</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本table">
        <kw-table :data="tableData">
          <kw-table-column title="姓名" prop="name"></kw-table-column>
          <kw-table-column title="年龄" prop="age"></kw-table-column>
          <kw-table-column title="性别" prop="sex"></kw-table-column>
        </kw-table>
      </demo-block>
      <demo-block title="其他常用属性">
        <kw-table :data="tableData" border stripe align="center">
          <kw-table-column title="姓名" prop="name"></kw-table-column>
          <kw-table-column title="年龄" prop="age"></kw-table-column>
          <kw-table-column title="性别" prop="sex"></kw-table-column>
        </kw-table>
      </demo-block>
      <demo-block title="指定单元格宽度">
        <kw-table :data="tableData2">
          <kw-table-column title="姓名" prop="name"></kw-table-column>
          <kw-table-column title="年龄" prop="age"></kw-table-column>
          <kw-table-column title="地址" prop="address" width="220"></kw-table-column>
        </kw-table>
      </demo-block>
      <demo-block title="响应行被单击">
        <kw-table :data="tableData" @row-click="handleRowClick">
          <kw-table-column title="姓名" prop="name"></kw-table-column>
          <kw-table-column title="年龄" prop="age"></kw-table-column>
          <kw-table-column title="性别" prop="sex"></kw-table-column>
        </kw-table>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
<script>
  export default {
    data () {
      return {
        tableData: [
          {
            name: 'li',
            age: 20,
            sex: '男'
          },
          {
            name: 'zhang',
            age: 21,
            sex: '女'
          },
          {
            name: 'wang',
            age: 30,
            sex: '男'
          }
        ],
        tableData2: [
          {
            name: 'li',
            age: 20,
            address: '北京市海淀区上地七街'
          },
          {
            name: 'zhang',
            age: 21,
            address: '北京市石景山区古城南路小商品市场'
          },
          {
            name: 'wang',
            age: 30,
            address: '上海市闸北区'
          }
        ]
      }
    },
    methods: {
      handleRowClick (row, index) {
        console.log(row, index)
      }
    }
  }
</script>
