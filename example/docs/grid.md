# Grid (九宫格)
##### 九宫格布局在移动端非常常见
###### 自定义非常方便
---
## 示例
### 基本用法
最简单定义一个九宫格的用法
```html
<kw-grid>
  <kw-gird-item>昨天</kw-gird-item>
  <kw-gird-item>今天</kw-gird-item>
  <kw-gird-item>明天</kw-gird-item>
  <kw-gird-item>后天</kw-gird-item>
</kw-grid>
```
### 显示边框
#### has-border为true时，单元格显示边框，默认为false
```html
<kw-grid has-border>
  <kw-gird-item>昨天</kw-gird-item>
  <kw-gird-item>今天</kw-gird-item>
  <kw-gird-item>明天</kw-gird-item>
  <kw-gird-item>后天</kw-gird-item>
</kw-grid>
```
### 控制每行单元格数量
cols属性可以传入数字来控制每行单元格数量，默认值为3。注意：当传入的cols值大于单元格总数量时，则会在一行展示全部的单元格
```html
<kw-grid :cols="2">
  <kw-gird-item>昨天</kw-gird-item>
  <kw-gird-item>今天</kw-gird-item>
  <kw-gird-item>明天</kw-gird-item>
  <kw-gird-item>后天</kw-gird-item>
</kw-grid>
```
### 带有icon的单元格
icon取值参见Icon组件。可以通过icon属性指定，也可通过名为icon的slot自定义
```html
<kw-grid>
  <kw-gird-item icon="close">昨天</kw-gird-item>
  <kw-gird-item>
    <kw-icon icon="search" color="danger" slot="icon"></kw-icon>
    今天
  </kw-gird-item>
  <kw-gird-item>
    <kw-icon icon="user" color="info" slot="icon"></kw-icon>
    明天
  </kw-gird-item>
  <kw-gird-item icon="exit">后天</kw-gird-item>
</kw-grid>
```
### 对齐方式
align控制每个单元格中内容的对齐方式，可选值有left,center,right。默认为center
```html
<kw-grid has-border>
  <kw-gird-item align="right">昨天</kw-gird-item>
  <kw-gird-item>今天</kw-gird-item>
  <kw-gird-item align="left">明天</kw-gird-item>
  <kw-gird-item>后天</kw-gird-item>
</kw-grid>
```
### 指定单元格高度
item-height属性用来设置单元格的高度，默认为80。取值可以是数值，也可是合法的css属性值，当为数值时单位为px。

该属性有一个特殊的取值为：item-width，其表示高度等于宽度，即设置单元格呈现为正方形
```html
<kw-grid item-height="item-width">
  <kw-gird-item>昨天</kw-gird-item>
  <kw-gird-item>今天</kw-gird-item>
  <kw-gird-item>明天</kw-gird-item>
  <kw-gird-item>后天</kw-gird-item>
</kw-grid>
```
### 单元格间距
item-spacing控制单元格之间的间距，默认为0，可以传入数值或合法的css属性值
```html
<template>
  <kw-grid item-height="item-width" has-border item-spacing="4">
    <kw-gird-item>昨天</kw-gird-item>
    <kw-gird-item>今天</kw-gird-item>
    <kw-gird-item>明天</kw-gird-item>
    <kw-gird-item>后天</kw-gird-item>
  </kw-grid>
  <br/>
  <kw-grid item-height="item-width" item-spacing="4">
    <kw-gird-item v-for="(image, index) in images" :key="index">
      <img :src="image" style="width: 100%;height: 100%;"></img>
    </kw-gird-item>
    <kw-gird-item class="plus-item">
      <kw-icon icon="add" size="60" color="light"></kw-icon>
    </kw-gird-item>
  </kw-grid>
</template>
<script>
  import image0 from '../assets/images/grid/0.jpg'
  import image1 from '../assets/images/grid/1.jpg'
  import image2 from '../assets/images/grid/2.jpg'
  import image3 from '../assets/images/grid/3.jpg'
  export default {
    data () {
      return {
        images: [image0, image1, image2, image3]
      }
    }
  }
</script>
<style>
  .plus-item{
    background: #d8d8d8;
  }
</style>
```
# API
## Grid
### Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
cols|每行单元格数量，即列数|number|-|3
has-border|是否有边框|boolean|true,false|false
item-height|单元格高度|string,number|特殊值item-width；数值默认单位为px；合法的css属性值|80
item-spacing|单元格间距|string,number|数值或合法的css属性值|0
## GridItem
### Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
icon|方格中显示的Icon，取值为Icon组件的值|string|-|-
align|内容对齐方式|string|left,center,right|center
### Slots
名称|描述
---|---
icon|方格中的icon，常使用Icon组件
### Events
名称|描述|参数
---|---|---
click|点击时触发|-
