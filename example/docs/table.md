# Table (表格)
##### 移动端表格组件使用的频率较低
###### 功能相对比较简单
---
## 示例
### 基本table
data属性为一个数组，指定行数据。配合TableColumn组件使用，TableColumn组件title属性为表头，prop为数据的key
```html
<template>
  <kw-table :data="tableData">
    <kw-table-column title="姓名" prop="name"></kw-table-column>
    <kw-table-column title="年龄" prop="age"></kw-table-column>
    <kw-table-column title="性别" prop="sex"></kw-table-column>
  </kw-table>
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
        ]
      }
    }
  }
</script>
```
### 其他常用属性
border属性可让表格具有边框，stripe可让表格具有斑马条纹，align属性设置文字的对齐方式，有left,center,right三种取值，默认为left，居左对齐。
```html
<template>
  <kw-table :data="tableData" border stripe align="center">
    <kw-table-column title="姓名" prop="name"></kw-table-column>
    <kw-table-column title="年龄" prop="age"></kw-table-column>
    <kw-table-column title="性别" prop="sex"></kw-table-column>
  </kw-table>
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
        ]
      }
    }
  }
</script>
```
### 指定单元格宽度
默认每一列所占空间会均分父容器空间，但当表格的某一列（或多列）内容比较多时，可以动态指定其所占的空间比例
```html
<template>
  <kw-table :data="tableData">
    <kw-table-column title="姓名" prop="name"></kw-table-column>
    <kw-table-column title="年龄" prop="age"></kw-table-column>
    <kw-table-column title="地址" prop="address" width="220"></kw-table-column>
  </kw-table>
</template>
<script>
  export default {
    data () {
      return {
        tableData: [
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
    }
  }
</script>
```
### 响应行被点击
单击某一行会触发row-click事件，事件会返回两个参数，第一个参数为被点击的行数据，第二个参数为被点击行的索引
```html
<template>
  <kw-table :data="tableData" @row-click="handleRowClick">
    <kw-table-column title="姓名" prop="name"></kw-table-column>
    <kw-table-column title="年龄" prop="age"></kw-table-column>
    <kw-table-column title="性别" prop="sex"></kw-table-column>
  </kw-table>
</template>
<script>
  export default {
    data () {
      return {
        tableData: ...
      }
    },
    methods: {
      handleRowClick (row, index) {
        console.log(row, index)
      }
    }
  }
</script>
```
## API
### Table
#### Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
data|数据|array|-|[]
border|是否显示边框|boolean|true,false|false
stripe|是否显示斑马纹|boolean|true,false|false
align|文字对齐方式|string|left,center,right|left
#### Events
名称|描述|参数
---|---|---
row-click|某一行被单击时触发|row：当前行的数据，index：当前行的索引
### TableColumn
#### Props
名称 |描述|类型|可选值|默认值
---|---|---|---|---
title|列名|string|-|-
prop|数据属性名|string|-|-
width|列宽，默认每一列均分宽度|number|-|-
nowrap|文字是否不换行|boolean|true,false|false
