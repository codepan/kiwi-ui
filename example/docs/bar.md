# Bar (栏)
##### Bar组件是Header、Subheader、Footer、Nav的父组件，它可以放置标题，左右两侧可以自定义图标和文字，当然也可以放置按钮并处理响应。
###### 使用灵活
---
## 示例
### 标题
title属性或者匿名slot指定标题
```html
<kw-bar title="标题文字"></kw-bar>
<kw-bar>自定义标的标题文字</kw-bar>
```
### 背景颜色与标题颜色
通过bg-color属性与color属性分别指定背景颜色与标题颜色，默认为light，可选值参见Color组件，也可以是合法的css属性值
```html
<kw-bar title="标题文字" bg-color="danger"></kw-bar>
<kw-bar title="标题文字" bg-color="success"></kw-bar>
<kw-bar title="标题文字" color="success"></kw-bar>
<kw-bar title="标题文字" bg-color="success" color="light"></kw-bar>
```
### 左侧和右侧
左右两侧显示内容
```html
<kw-bar title="标题文字">
  <kw-icon slot="left" icon="arrow-left"></kw-icon>
</kw-bar>

<kw-bar title="标题文字">
  <kw-icon slot="right" icon="menu"></kw-icon>
</kw-bar>
```
### 固定布局
fixed设置Bar采用固定布局，可选值有true、false、top或bottom，默认false，当为true时，可以通过top、right、bottom和left四个属性来精确确定Bar的位置。也可以设置为top或bottom快速固定在顶部或底部
```html
<kw-bar fixed="top">标题文字</kw-bar>
<kw-bar fixed="bottom">标题文字</kw-bar>
```
### 指定高度
height属性修改其默认的高度尺寸，默认为50px。可传入数值或合法的css属性值，默认单位为px
```html
<kw-bar>标题文字</kw-bar>
<kw-bar fixed="bottom">标题文字</kw-bar>
```
### 左侧含有返回功能
has-back属性可以为左侧添加返回功能，默认为false，其表现为左侧含有返回箭头，点击可返回到上一级；当has-back为true时，还可使用back-text属性指定返回文字。

如若默认的样式不能满足需求，还可通过Back Slot自定义返回。该Slot仅当has-back为rue时有效
```html
<kw-bar title="导航栏" has-back></kw-bar><br/>
<kw-bar title="导航栏" has-back back-text="返回"></kw-bar>
<kw-bar title="导航栏" has-back>
  <template slot="back">
    <kw-icon icon="arrow-left"></kw-icon>
    <span>上一步</span>
  </template>
</kw-bar>
```
### 处理返回功能
如果想对返回功能进行处理，可以向back属性传入一个方法，组件会为back方法注入一个next方法作为参数，调用该参数则会继续执行组件默认的返回动作，否则不会执行。
```html
<template>
  <kw-bar title="导航栏" has-back  :back="back"></kw-bar><br/>
</template>
<script>
  export default {
    methods: {
      back (next) {
        this.$dialog.confirm('您确定要离开吗？', '提示', {
          confirmButtonText: '再想想',
          cancelButtonText: '去意已决'
        }).catch(() => {
          next()
        })
      }
    }
  }
</script>
```
# API
## Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
type|类型|类型取值有header、subheader、footer、nav四种，该属性的作用为：若type="header"，则就相当于Header组件，其他以此类推|header,subheader,footer,nav|-
title|标题|string|-|-
color|标题颜色|string|Color取值，或合法的css属性值|#17233d
bg-color|背景颜色|string|Color取值，或合法的css属性值|light
height|高度|number,string|可传入数值或合法的css属性值，默认单位为px|50
fixed|固定布局|boolean,string|true,false,top,bottom|false
top|距顶部距离|number,string|可传入数值或合法的css属性值，默认单位为px|-
right|距右侧距离|number,string|可传入数值或合法的css属性值，默认单位为px|-
bottom|距底部距离|number,string|可传入数值或合法的css属性值，默认单位为px|-
left|距左侧距离|number,string|可传入数值或合法的css属性值，默认单位为px|-
has-back|是否具有返回功能，为true时，左侧会显示一个返回图标，点击可返回到上一级页面|boolean|true,false|false
back-text|返回文字|string|-|-
back|点击返回按钮时的处理函数，Function(next)|function|-|-
## Slots
名称|描述
---|---
-|标题
left|左边显示元素
right|右边显示元素
back|返回功能，仅当has-back为true时有效
