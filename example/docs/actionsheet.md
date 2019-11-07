# Actionsheet（操作表）
##### 操作表，常见从底部弹出
###### 使用方便
---
## 示例
### 基本示例
v-model绑定boolean值控制其打开与关闭。

actions属性需要传入一个由对象组成的数组，其为必传参数，每个对象具有text和action两个属性。其中text指定菜单项的文字，action为点击菜单项后的回调函数。action方法被调用时会被组件注入vue实例vm，以供开发者做别的事情
```html
<template>
  <kw-actionsheet v-model="isShow" :actions="actions"></kw-actionsheet>
</template>
<script>
  export default {
    data () {
      return {
        isShow: false,
        actions: [
          {
            text: '打开照相机',
            action (vm) {
              vm.$toast('我打不开照相机哦')
            }
          },
          {
            text: '打开相册',
            action (vm) {
              vm.$toast('我打不开相册哦')
            }
          }
        ]
      }
    }
  }
</script>
```
### 设置文字颜色
文字颜色默认为primary，蓝色。color属性可以改变颜色，可取值参见Color组件，同时也支持css中所有合法的颜色值
```html
<kw-actionsheet :actions="actions" color="red"></kw-actionsheet>
```
### 指定标题
可以通过title属性指定标题，默认title为空，含义为不显示标题。当title有值时，title就会显示。
```html
<kw-actionsheet v-model="isShow" :actions="actions" title="操作表"></kw-actionsheet>
```
### 设置取消按钮样式
cancel属性可以控制取消按钮

* 可以不传，则不显示取消按钮
* 可以为字符串，则为指定按钮文字
* 可以为对象，则表示细粒度控制取消按钮，该对象可以指定以下属性
  * text：按钮文字
  * color：文字颜色，该值的优先级高于组件的color属性
  * style：合法的css在js中指定形式，如果其中包含color属性，则优先级最高
```html
<template>
  <kw-actionsheet color="red" :cancel="cancelOptions"></kw-actionsheet>
</template>
<script>
  export default {
    data () {
      return {
        cancelOptions: {
          text: '关闭',
          color: 'green',
          style: {
            textDecoration: 'underline'
          }
        }
      }
    }
  }
</script>
```
## API
### Props
名称 |描述|类型|可选值|默认值
-----|-------|---|-----|-----
value|通过v-model双向绑定，控制actionsheet的显示与隐藏|boolean|`true` `false`|false
actions|菜单项，形如`[{text: '', action (vm) {}}]`|array|-|-
title|标题，不传则不显示标题|string|-|-
cancel|取消按钮，传入字符串指定取消按钮的文字，也可传入对象`{text: '关闭', color: '#999', style: {}}`，不传值则会隐藏取消按钮|string/object|-|取消
