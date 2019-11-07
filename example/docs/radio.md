# Radio（单选按钮）
##### 移动端常见组件
###### 在一组中选定一个值，每个选项为互斥的
---
## 示例
### 基本使用
配合RadioGroup组件，通过v-model绑定radio的值。name指定选中后的结果值；label或默认slot指定显示的文字。
```html
<template>
  <kw-radio-group  v-model="radioValue">
    <kw-radio name="1">选项一</kw-radio>
    <kw-radio name="2" label="选项二"></kw-radio>
  </kw-radio-group>
</template>
<script>
  export default {
    data: () => ({
      radioValue: '1'
    })
  }
</script>
```
### 列表样式
list属性设置是否展示为列表样式
```html
<template>
  <kw-radio-group  v-model="radioValue" list>
    <kw-radio name="1">选项一</kw-radio>
    <kw-radio name="2">选项二</kw-radio>
    <kw-radio name="3">选项三</kw-radio>
  </kw-radio-group>
</template>
<script>
  export default {
    data: () => ({
      radioValue: '1'
    })
  }
</script>
```
### 设置禁用选项
disabled设置为true 将radio禁用。也可在Radio组件上使用disabled属性来单独设置
```html
<template>
  <kw-radio-group  v-model="radioValue" list disabled>
    <kw-radio name="1">选项一</kw-radio>
    <kw-radio name="2">选项二</kw-radio>
    <kw-radio name="3">选项三</kw-radio>    
  </kw-radio-group>
</template>
<script>
  export default {
    data: () => ({
      radioValue: '1'
    })
  }
</script>
```
### 设置选中颜色
color属性可以自定义选中时图标颜色，支持所有CSS合法的颜色取值以及Color组件中描述颜色的字符串，默认值为primary。也可在Radio组件上使用color属性来单独设置
```html
<template>
  <kw-radio-group  v-model="radioValue" color="success">
    <kw-radio name="1">选项一</kw-radio>
    <kw-radio name="2">选项二</kw-radio>
    <kw-radio name="3">选项三</kw-radio>    
  </kw-radio-group>
</template>
<script>
  export default {
    data: () => ({
      radioValue: '1'
    })
  }
</script>
```
### 右对齐
align设为right，将右对齐。可选值有left，right。默认为left
```html
<template>
<kw-radio-group  v-model="radioValue" list align="right">
  <kw-radio name="1">项目经验</kw-radio>
  <kw-radio name="2">爱好</kw-radio>
  <kw-radio name="3">工作经验</kw-radio>
  <kw-radio name="4">特长</kw-radio>
</kw-radio-group>
</template>
<script>
  export default {
    data: () => ({
      radioValue: '1'
    })
  }
</script>
```
## API
### Radio
#### Props
名称 |描述|类型|可选值|默认值
---|---|---|---|---
name|组件标识|any|-|-
label|显示文字|string|-|-
color|选中时图标颜色|string|所有CSS合法的颜色取值以及Color组件中描述颜色的字符串|-
disabled|是否禁用|boolean|`true` `false`|false
#### Slots
名称|描述
---|---
-|显示文字
### RadioGroup
#### Props
名称 |描述|类型|可选值|默认值
---|---|---|---|---
value|通过v-model绑定，值为选中的单选框的name属性值|any|-|-
color|所有单选框选中时图标颜色|string|所有CSS合法的颜色取值以及Color组件中描述颜色的字符串|-
disabled|是否禁用所有单选框|boolean|`true` `false`|false
#### Events
名称|描述|回调参数
---|---|---
change|选中的单选框改变时触发|被选中单选框的name属性值

