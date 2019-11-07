# InputNumber (数字输入框)
##### 购物车使用的最频繁
###### 既可以手动输入，也可以点击左右加减号
---
## 示例
### 基本用法
通过v-model绑定当前值，为数字类型
```html
<template>
  <kw-input-number v-model="value"></kw-input-number>
</template>
<script>
  export default {
    data () {
      return {
        value: 2
      }
    }
  }
</script>
```
### 取值范围
min设置最小值，max设置最大值。min默认为0
```html
<kw-input-number :min="0" :max="10"></kw-input-number>
```
### 步数
step可以设置每次加减的步数，可以是小数
```html
<kw-input-number :step="2"></kw-input-number>
```
### 尺寸大小
通过设置size属性为large和small将输入框设置为大和小尺寸，不设置为默认（中）尺寸。
```html
<kw-input-number size="small"></kw-input-number>
<kw-input-number></kw-input-number>
<kw-input-number size="large"></kw-input-number>
```
### 禁用状态
disabled为true时，禁用输入框。默认为false
```html
<kw-input-number disabled></kw-input-number>
```
### 只读
readonly为true时，只读状态。默认为false。
```html
<kw-input-number readonly v-model="value"></kw-input-number>
```
### 是否可编辑
editable属性控制输入框是否可编辑。默认为true
```html
<kw-input-number :editable="false"></kw-input-number>
```
### 加减按钮事件处理
plus事件和minus事件分别对应加按钮和减按钮，有两个参数，第一个为当前值，第二个为变化前的值
```html
<template>
  <kw-input-number @plus="handlePlus" @minus="handleMinus" v-model="value"></kw-input-number>
</template>
<script>
  export default {
    data () {
      return {
        value: 2
      }
    },
    methods: {
      handlePlus (newVal, oldVal) {
        this.$toast(`当前值为：${newVal}，旧值为：${oldVal}`)
      },
      handleMinus (newVal, oldVal) {
        this.$toast(`当前值为：${newVal}，旧值为：${oldVal}`)
      }
    }
  }
</script>
```
# API
## Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
value|输入框的值，通过v-model指定|number|-|1
min|最小值|number|-|-Infinity
max|最大值|number|-|Infinity
step|步数，每次加减的步数，可以是小数|number|-|1
size|尺寸|string|small,large,default(不写)|-
disabled|禁用状态|boolean|true,false|false
readonly|只读状态|boolean|true,false|false
editable|是否可编辑|boolean|true,false|true
## Events
名称|描述|参数
---|---|---
change|值发生改变是触发|当前值
input|通过键盘使输入框的值发生改变时触发，和change事件不同点在于：通过加减按钮改变输入框的值是不会触发该事件的|当前值
plus|点击加号时触发|有两个参数，第一个是当前值，第二个是上一次的值
minus|点击减号时触发|有两个参数，第一个是当前值，第二个是上一次的值
