# Checkbox（复选框）
##### 移动端常见组件
###### 用来选择一组可选项
---
## 示例
### 基本使用
通过v-model绑定勾选状态，label属性或者默认slot指定显示文字
```html
<template>
  <kw-checkbox v-model="checked">选项一</kw-checkbox>
</template>
<script>
  export default {
    data: () => ({
      checked: false
    })
  }
</script>
```
### 禁用状态
disabled属性设置是否禁用
```html
<template>
  <kw-checkbox v-model="checked1" disabled>选项一</kw-checkbox>
  <kw-checkbox v-model="checked2" disabled>选项二</kw-checkbox>
</template>
<script>
  export default {
    data: () => ({
      checked1: false,
      checked2: true
    })
  }
</script>
```
### 选中时颜色
color属性设置选中后图标颜色，支持合法的CSS颜色字符串以及Color组件中描述颜色的字符串
```html
<template>
  <kw-checkbox v-model="checked1" color="success">选项一</kw-checkbox>
  <kw-checkbox v-model="checked2" color="info">选项二</kw-checkbox>
</template>
<script>
  export default {
    data: () => ({
      checked1: true,
      checked2: true
    })
  }
</script>
```
### 图标形状
shape指定图标的形状，有circle、square两种取值，分别表示原形和矩形，默认circle
```html
<template>
  <kw-checkbox v-model="checked1" shape="square">选项一</kw-checkbox>
  <kw-checkbox v-model="checked2" shape="square">选项二</kw-checkbox>
</template>
<script>
  export default {
    data: () => ({
      checked1: false,
      checked2: true
    })
  }
</script>
```
### 复选组
配合CheckboxGroup组件一起使用，该组件通过v-model双向绑定选中的Checkbox，值为一个数组，数组元素为Checkbox的name属性指定的值
```html
<template>
  <kw-checkbox-group v-model="result">
    <kw-checkbox
      v-for="item in list"
      :key="item"
      :name="item"
    >复选框 {{item}}</kw-checkbox>
  </kw-checkbox-group>
</template>
<script>
  export default {
    data: () => ({
      list: ['A', 'B', 'C'],
      result: ['A', 'B']
    })
  }
</script>
```
### 列表样式
list属性指定是否展示为列表样式
```html
<template>
  <kw-checkbox-group v-model="result" list>
    <kw-checkbox
      v-for="item in list"
      :key="item"
      :name="item"
    >复选框 {{item}}</kw-checkbox>
  </kw-checkbox-group>
</template>
<script>
  export default {
    data: () => ({
      list: ['A', 'B', 'C'],
      result: ['A', 'B']
    })
  }
</script>
```
### 右对齐
在列表样式下，即当list属性为true时，可以通过align属性控制对齐方式，指定为right，将右对齐。可选值有left，right。默认为left
```html
<template>
  <kw-checkbox-group  v-model="result" list align="right">
    <kw-checkbox
      v-for="item in list"
      :key="item"
      :name="item"
    >复选框 {{item}}</kw-checkbox>
  </kw-checkbox-group>
</template>
<script>
  export default {
    data: () => ({
      list: ['A', 'B', 'C'],
      result: ['A']
    })
  }
</script>
```
### 最大选择个数
max属性设置最大选择个数，默认为Infinite
```html
<template>
  <kw-checkbox-group  v-model="result" list :max="2">
    <kw-checkbox
      v-for="item in list"
      :key="item"
      :name="item"
    >复选框 {{item}}</kw-checkbox>
  </kw-checkbox-group>
</template>
<script>
  export default {
    data: () => ({
      list: ['A', 'B', 'C'],
      result: ['A', 'B']
    })
  }
</script>
```
### change事件
#### 当v-model绑定的值发生改变时触发，回调参数为value的值
```html
<template>
  <kw-radio :value="1">选项一</kw-radio>
  <kw-radio :value="2" label="选项二"></kw-radio>
</kw-radio-group>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      handleChange (value) {
        this.$toast({
          position: 'bottom',
          message: `您选择的值为 ${value}`,
          duration: 500
        })
      }
    }
  }
</script>
```
## API
### Checkbox
#### Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
value|通过v-model双向绑定是否选中|boolean|`true` `false`|false
disabled|是否禁用|boolean|`true` `false`|false
color|选中时图标颜色|string|所有合法的CSS颜色值以及Color组件中描述颜色的字符串|primary
name|标识符，用于按钮组中|any|-|-
label|文本|string|-|-
shape|图标形状|string|`circle` `square`|circle
#### Slots
名称|描述
---|---|
-|自定义文本
#### Events
名称|描述|回调参数
---|---|---
change|当绑定的值变化时触发|当前的值
### CheckboxGroup
#### Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
value|通过v-model双向绑定选中的Checkbox，数组元素为Checkbox的name值|array|-|[]
disabled|是否禁用所有复选框|boolean|`true` `false`|false
color|所有复选框选中时图标颜色|string|所有合法的CSS颜色值以及Color组件中描述颜色的字符串|primary
list|是否以列表形式展示|boolean|`true` `false`|false
max|最大选择个数|number|-|Infinite
#### Events
名称|描述|回调参数
---|---|---
change|当绑定的值变化时触发|当前的值

