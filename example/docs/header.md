# Header (顶部栏)
##### 移动端常见组件，固定在页面顶部
###### 注意和Nav组件区分
---
## 示例
### 基本用法
title属性或匿名Slot指定标题
```html
<kw-header title="title属性指定标题"></kw-header>
<kw-header>匿名Slot指定标题</kw-header>
```
### 背景颜色与标题颜色
通过bg-color属性与color属性分别指定背景颜色与标题颜色，默认为light，可选值参见Color组件，也可以是合法的css属性值
```html
<kw-header title="标题文字" bg-color="danger"></kw-header>
<kw-header title="标题文字" bg-color="success"></kw-header>
<kw-header title="标题文字" color="success"></kw-header>
<kw-header title="标题文字" bg-color="success" color="light"></kw-header>
```
### 左侧和右侧
左右两侧显示内容
```html
<kw-header title="标题文字">
  <kw-icon slot="left" icon="arrow-left"></kw-icon>
</kw-header>

<kw-header title="标题文字">
  <kw-icon slot="right" icon="menu"></kw-icon>
</kw-header>
```
### 固定布局
fixed设置Header采用固定布局，固定在头部，可选值有true、false，默认为true。当fixed为true时，其top默认为0，可以通过top属性对齐进行重新指定。
```html
<kw-header :fixed="false">标题文字</kw-header>
<kw-header fixed top="20">标题文字</kw-header>
```
# API
## Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
title|参见Bar组件
color|参见Bar组件
bg-color|参见Bar组件
height|参见Bar组件
fixed|固定布局|boolean|true,false|true
top|距页面顶部的距离|number,string|可传入数值或合法的css属性值，默认单位为px|0
## Slots
名称|描述
---|---
-|标题
left|左边显示元素
right|右边显示元素
