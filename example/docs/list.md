# List（列表）
##### 列表组件非常常见，和Item组件配合使用
###### 功能丰富
---
## 示例
### 基本用法
List组件和Item组件配合使用
```html
<template>
  <kw-list>
    <kw-item @click="handleClick">item1</kw-item>
    <kw-item>item2</kw-item>
    <kw-item>item3</kw-item>
  </kw-list>
</template>
<script>
  export default {
    methods: {
      handleClick () {
        this.$dialog.alert('点击了item')
      }
    }
  }
</script>
```
### 可点击样式
设置is-link属性为true, 列表右侧会有个向右的箭头，点击后会有交互效果。is-link为boolean值，默认为false
```html
<kw-list>
  <kw-item is-link>item1</kw-item>
  <kw-item is-link to="icon">
    item2
    <span slot="value">查看Icon组件</span>
  </kw-item>
  <kw-item>item3</kw-item>
</kw-list>
```
### 二级列表
设置is-accordion属性为true, 通过名为accordion的slot指定子列表
```html
<kw-list>
  <kw-item is-accordion>
    北京市
    <kw-list slot="accordion">
      <kw-item>海淀区</kw-item>
      <kw-item>昌平区</kw-item>
      <kw-item>东城区</kw-item>
    </kw-list>
  </kw-item>
</kw-list>
```
### 智能化布局
title,subtitle,content,value,note等多个属性来快速完成布局，同时也可以通过同名的slot自定义。value和note一般不要同时使用。
```html
 <kw-list>
  <kw-item title="title" value="value" is-link></kw-item>
  <kw-item note="12-20 08:20">
    value和note的区别在于：value始终垂直居中，而note始终显示在右上（下）角，当内容超过1行时，两者差异会明显
  </kw-item>
  <kw-item title="幸福" subtitle="能和心爱的人淋一场雨也是一种幸福地方的沙发斯蒂芬但是防守打法但是范德萨发的是方式"></kw-item>
</kw-list>
```
### 图文列表
可以在列表中展示头像，缩略图或者其他任何图片，就像微信聊天一样。Item组件上有icon-type和icon-position两个常用来控制图片样式的属性（还有其他一些属性，详见最下方api）。icon-type主要控制图片的类型，实际为控制图片的大小，有avatar,thumbnail,icon三种取值，默认为空字符，分别表示头像、缩略图和字体图标；icon-position控制图片位置，有left和right两种取值，默认为left。
```html
 <kw-list>
  <kw-item icon-type="avatar" subtitle="iconType为avatar，iconPosition为left" title="头像居于左侧">
    <img src="../images/list/shuijiao.jpg" slot="icon">
  </kw-item>
  <kw-item icon-type="avatar" icon-position="right" subtitle="iconType为avatar，iconPosition为left" title="头像居于右侧">
    <img src="../images/list/shuijiao.jpg" slot="icon">
  </kw-item>
  <kw-item icon-type="thumbnail" subtitle="iconType为avatar，iconPosition为left" title="缩略图居于左侧">
    <img src="../images/list/shuijiao.jpg" slot="icon">
  </kw-item>
  <kw-item icon-type="thumbnail" icon-position="right" subtitle="iconType为avatar，iconPosition为left" title="缩略图居于右侧">
    <img src="../images/list/shuijiao.jpg" slot="icon">
  </kw-item>
  <kw-item icon-type="avatar" subtitle="爸爸妈妈，我们需要你们的陪伴，希望忙碌赚钱的你们能抽出时间陪陪我们" title="孩子真逗" note="下午4:30">
    <img src="../images/list/yanjing.jpg" slot="icon">
  </kw-item>
</kw-list>
```

### 自定义icon样式
如果icon-type不能满足您的需求，此时可通过icon-style属性自定义icon的样式。值为对象或者可以解析为对象的字符串，对象的属性为css的属性。
```html
<kw-list>
  <kw-item icon-style="{width: '100px', height: '100px', borderRadius: '20px', border: '1px solid red'}" subtitle="通过icon-style属性设置" title="自定义icon样式">
    <img src="../images/list/shuijiao.jpg" slot="icon">
  </kw-item>
</kw-list>
```

### 分隔类型的Item
is-divider属性可以使得Item成为分隔类型
```html
 <kw-list>
  <kw-item is-divider>城市</kw-item>
  <kw-item>北京</kw-item>
  <kw-item>上海</kw-item>
  <kw-item is-divider>爱好</kw-item>
  <kw-item>台球</kw-item>
  <kw-item>编程</kw-item>
</kw-list>
```

### 具有分隔性的Item
is-divider具有一定的局限性，divide、divide-top和divide-bottom三个属性可以更大程度的增加分隔符的灵活性。

divide属性取值可以为true,false，也可以是具体的数值类型。当为true时，默认上下分隔20px，当为false时，没有任何分隔；当为具体的数值时，表示上下分隔的距离，单位为px。

divide-top和divide-bottom属性取值为数值类型，用来分别设置top边距和bottom边距。
```html
<kw-list>
  <kw-item>北京</kw-item>
  <kw-item>上海</kw-item>
  <kw-item :divide-top="20">台球</kw-item>
  <kw-item>编程</kw-item>
  <kw-item divide>美女</kw-item>
  <kw-item>设置</kw-item>
</kw-list>
```


### 滑动触发列表项菜单
添加slidable属性，或设置值为true，则可以使列表滑动。同时需要向options属性传入一个对象数组。对象有以下三个属性：text,style,handler。text表示按钮的文字，style表示按钮的CSS样式对象，handler表示点击按钮后的回调函数，函数有一个参数，参数为当前按钮所在的Item组件的对象。例子中调用了Item组件的remove()方法，可以方便的实现删除功能。
```html
<template>
  <kw-list>
    <kw-item slidable :options="options1">上海</kw-item>
    <kw-item slidable :options="options2">北京</kw-item>
  </kw-list>
</template>
<script>
  export default {
      data () {
        let _this = this
        return {
          options1: [
            {
              text: '删除',
              handler (item) {
                _this.$dialog.confirm('确定删除吗？').then(() => {
                  item.remove()
                }).catch(() => {})
              }
            }
          ],
          options2: [
            {
              text: '删除',
              handler (item) {
                _this.$dialog.confirm('确定删除吗？').then(() => {
                  item.remove()
                }).catch(() => {})
              }
            }
          ]
        }
      }
    }
</script>
```
## API
### List
#### Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
type|标题|string|-|0|
### Item
#### Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
is-link|是否是链接item，右侧含有向右的箭头，点击会有反馈|boolean|true,false|false
activable|是否可激活，如果为true，则点击会有反馈，与is-link属性的不同仅仅为右侧是否含有箭头|boolean|true,false|false
to|路由path|string|-|-
title|标题|string|-|-
subtitle|子标题|string|-|-
value|值|string|-|-
note|小note|string|-|-
note-position|标记位置|string|top,bottom|bottom
is-accordion|是否含有子列表|boolean|true,false|false
is-divider|是否是分隔列表|boolean|true,false|false
divide|是否具有上下分隔，亦可设置分隔的距离|boolean,number|true,false或具体的数值|当divide为true时，默认上下分隔20px
divide-top|上分隔的距离|number|-|0
divide-bottom|下分隔的距离|number|-|0
align|内容文字对齐方式|string|left,center,right|left
icon-type|图标类型|string|avatar,thumbnail|-
icon-position|图标位置|string|left,right|left
icon-style|图标样式|object|css样式|-
slidable|是否可滑动|boolean|true,false|false
options|可滑动列表操作按钮的相关配置|Array[{text：'按钮文字', style: {}, handler (item) {item.remove()}}]|-|-
#### Slots
名称|描述
---|---
default|内容
title|标题
subtitle|子标题
value|value
note|note
accordion|子列表
