# Tabbar（导航条）
##### 导航条，多固定在底部，点击可切换路由（页面）
###### 注意和Tabs组件区分
---
## 示例
### 配合TabbarItem组件使用
默认Tabbar显示在底部，激活后颜色为primary。配合TabbarItem组件使用，TabbarItem组件可以通过icon属性或者Icon Slot指定图标；title属性或是Title Slot指定文字
```html
<kw-tabbar>
  <kw-tabbar-item title="微信" icon="comment-outline">
  </kw-tabbar-item>
  <kw-tabbar-item title="通讯录">
    <kw-icon icon="address-book-outline" slot="icon"></kw-icon>
  </kw-tabbar-item>
  <kw-tabbar-item icon="compass-outline">
    <span slot="title">发现</span>
  </kw-tabbar-item>
  <kw-tabbar-item>
    <span slot="title">我</span>
    <kw-icon icon="user-outline" slot="icon"></kw-icon>
  </kw-tabbar-item>
</kw-tabbar>
```
### 重要的items属性
第一个示例Tabbar组件和TabbarItem组件配合使用，可以完成个性化（方便自定义）的布局，如若需快速构建UI，则可采用默认样式，然后通过items属性来构建TabbarItem

items为一个对象数组，每个对象具有icon,title,to三个属性。形如：
```
[
  {
    icon: 'contact',
    title: '联系人', 
    to: '/contact'
  }，
  {
    icon: 'user',
    title: '我', 
    to: '/me'
  }
]
```
其中icon指定图标；title指定标题；to指定点击之后路由的跳转，该属性和vue-router中内置标签`<router-link>`的取值是一样的。

***Tip：items属性的优先级高于TabbarItem组件，即如果传入了items属性，则TabbarItem子组件将会失效***
```html
<template>
  <kw-tabbar :items="items"></kw-tabbar>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            title: '按钮',
            icon: 'comment',
            to: '/button'
          },
          {
            title: '色彩',
            icon: 'address-book',
            to: '/color'
          },
          {
            title: '时间轴',
            icon: 'compass',
            to: '/timeline'
          },
          {
            title: '图标',
            icon: 'user',
            to: '/icon'
          }
        ]
      }
    }
  }
</script>
```
### 双向绑定被激活的Item
v-model属性双向绑定被激活的Item，为数值类型，绑定的为TabbarItem组件的索引，从0开始，例如v-model="1"，即表示选中第2个Item
```html
<template>
  <kw-tabbar v-model="value">
    <kw-tabbar-item title="微信">
      <kw-icon :icon="value === 0 ? 'comment' : 'comment-outline'" slot="icon"></kw-icon>
    </kw-tabbar-item>
    <kw-tabbar-item title="通讯录">
      <kw-icon :icon="value === 1 ? 'address-book' : 'address-book-outline'" slot="icon"></kw-icon>
    </kw-tabbar-item>
    <kw-tabbar-item title="发现">
      <kw-icon :icon="value === 2 ? 'compass' : 'compass-outline'" slot="icon"></kw-icon>
    </kw-tabbar-item>
    <kw-tabbar-item title="我">
      <kw-icon :icon="value === 3 ? 'user' : 'user-outline'" slot="icon"></kw-icon>
    </kw-tabbar-item>
  </kw-tabbar>
</template>
<script>
  export default {
    data () {
      return {
        value: 0
      }
    }
  }
</script>
```
### 指定角标和圆点
badge属性或badge Slot可以显示一个角标；dot属性可以指定是否显示圆点，boolean类型，默认为false，不显示
```html
<template>
  <kw-tabbar v-model="value">
    <kw-tabbar-item title="微信" badge="22">
      <kw-icon :icon="value1 === 0 ? 'comment' : 'comment-outline'" slot="icon"></kw-icon>
    </kw-tabbar-item>
    <kw-tabbar-item title="通讯录">
      <kw-badge slot="badge">1</kw-badge>
      <kw-icon :icon="value1 === 1 ? 'address-book' : 'address-book-outline'" slot="icon"></kw-icon>
    </kw-tabbar-item>
    <kw-tabbar-item title="发现" dot>
      <kw-icon :icon="value1 === 2 ? 'compass' : 'compass-outline'" slot="icon"></kw-icon>
    </kw-tabbar-item>
    <kw-tabbar-item title="我">
      <kw-icon :icon="value1 === 3 ? 'user' : 'user-outline'" slot="icon"></kw-icon>
    </kw-tabbar-item>
  </kw-tabbar>
</template>
<script>
  export default {
    data () {
      return {
        value: 0
      }
    }
  }
</script>
```
### 控制图标显示的位置
图标默认显示在顶部，可以通过icon-position属性改变其位置，有top,right,bottom,left四种取值，默认为top
```html
<kw-tabbar icon-position="right">
  <kw-tabbar-item title="微信" icon="comment-outline">
  </kw-tabbar-item>
  <kw-tabbar-item title="通讯录">
    <kw-icon icon="address-book-outline" slot="icon"></kw-icon>
  </kw-tabbar-item>
  <kw-tabbar-item icon="compass-outline">
    <span slot="title">发现</span>
  </kw-tabbar-item>
  <kw-tabbar-item>
    <span slot="title">我</span>
    <kw-icon icon="user-outline" slot="icon"></kw-icon>
  </kw-tabbar-item>
</kw-tabbar>
```
### 设置背景颜色和边框颜色
默认背景颜色为light(白色)，边框颜色默认为透明色，bg-color属性指定背景色；border-color属性指定边框颜色，默认只会显示top边框，但是当position属性(下文讲解该属性)为top时，显示的为bottom边框。
```html
<kw-tabbar bg-color="stable" border-color="#bbb">
  <kw-tabbar-item title="微信" icon="comment-outline"></kw-tabbar-item>
  <kw-tabbar-item title="通讯录" icon="address-book-outline"></kw-tabbar-item>
  <kw-tabbar-item title="发现" icon="compass-outline"></kw-tabbar-item>
  <kw-tabbar-item title="我" icon="user-outline">
  </kw-tabbar-item>
</kw-tabbar>
```
### 改变文字、图标的默认尺寸颜色以及被激活时的颜色
默认激活的颜色为primary，active-color可改变它。通过color属性指定未被激活时的颜色。icon-size和font-size分别设置图标和文字的尺寸大小。
```html
<kw-tabbar icon-size="30" font-size="16" active-color="lively">
  <kw-tabbar-item title="微信" icon="comment-outline"></kw-tabbar-item>
  <kw-tabbar-item title="通讯录" icon="address-book-outline"></kw-tabbar-item>
  <kw-tabbar-item title="发现" icon="compass-outline"></kw-tabbar-item>
  <kw-tabbar-item title="我" icon="user-outline">
  </kw-tabbar-item>
</kw-tabbar>
```
### 容器尺寸的改变
默认容器上下具有4px的内填充，通过padding属性指定；默认容器高度是自适应了，如果你想固定高度，可以通过height属性进行限制
```html
<kw-tabbar padding="20">
  <kw-tabbar-item title="微信" icon="comment-outline"></kw-tabbar-item>
  <kw-tabbar-item title="通讯录" icon="address-book-outline"></kw-tabbar-item>
  <kw-tabbar-item title="发现" icon="compass-outline"></kw-tabbar-item>
  <kw-tabbar-item title="我" icon="user-outline">
  </kw-tabbar-item>
</kw-tabbar>
```
## API
### Tabbar
#### Props
名称 |描述|类型|可选值|默认值
---|---|---|---|---
value|通过v-model双向绑定选中的Item|number|-|0
items|配置TabbarItem组件的数组|array|-|[]
fixed|固定在顶部或底部，默认不固定，如若指定了top或bottom，则会被固定在top或bottom|string|top,bottom|-
color|默认颜色|string|参见Color组件，或传入合法的css的颜色值|#515a6e
active-color|激活的颜色|string|参见Color组件，或传入合法的css的颜色值|primary
bg-color|背景颜色|string|参见Color组件，或传入合法的css的颜色值|light
border-color|边框颜色|string|参见Color组件，或传入合法的css的颜色值|transparent
icon-position|Icon的位置，仅当有icon时该属性才起作用|string|top,right,bottom,left|top
icon-size|图标的尺寸|string,number|取值参见Icon组件的size属性|-
font-size|文字的尺寸|string,number|取值可以是small,large两个关键字，其中small=12px,large=16px。也可以传入代表字体大小的数字，或合法的css字号值|-
padding|内填充，仅为上下内填充|string,number|传入数值，则默认单位为px，或传入合法的css属性值|4px
height|高度|string,number|传入数值，则默认单位为px，或传入合法的css属性值|-
### TabbarItem
#### Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
title|标题|string|-|-
icon|图标|string|参见Icon组件|-
to|路由跳转|string,object|参见vue-router的<router-link>中to属性的取值|-
badge|角标|string,number|-|-
dot|是否显示圆点|boolean|true,false|false
#### Slots
名称|描述
---|---
icon|图标
title|标题
badge|角标
