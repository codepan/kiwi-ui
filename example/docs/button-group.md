# ButtonGroup (按钮组)
##### 按钮组是常见的web组件，ButtonGroup需要和Button组件配合使用
###### 基本用法和Button组件相
---
## 示例
### 基本用法
不设置为默认样式
```html
 <kw-button-group>
  <kw-button>左手</kw-button>
  <kw-button>猪手</kw-button>
  <kw-button>右手</kw-button>
</kw-button-group>
```
### 不同颜色
通过color属性为按钮设置颜色，取值和Button组件完全一样
```html
<kw-button-group color="danger">
  <kw-button>左手</kw-button>
  <kw-button>猪手</kw-button>
  <kw-button>右手</kw-button>
</kw-button-group>
<kw-button-group color="primary">
  <kw-button>左手</kw-button>
  <kw-button>猪手</kw-button>
  <kw-button>右手</kw-button>
</kw-button-group>
<kw-button-group color="success">
  <kw-button>左手</kw-button>
  <kw-button>猪手</kw-button>
  <kw-button>右手</kw-button>
</kw-button-group>
```
### 不同尺寸
通过size属性设置按钮大小，有small,default(或者不写),large三种取值，default
```html
<kw-button-group size="small">
  <kw-button>左手</kw-button>
  <kw-button>猪手</kw-button>
  <kw-button>右手</kw-button>
</kw-button-group>
<kw-button-group>
  <kw-button>左手</kw-button>
  <kw-button>猪手</kw-button>
  <kw-button>右手</kw-button>
</kw-button-group>
<kw-button-group size="large">
  <kw-button>左手</kw-button>
  <kw-button>猪手</kw-button>
  <kw-button>右手</kw-button>
</kw-button-group>
```
### 圆角样式
设置shape属性为round，可以显示一个圆角样式的button group，shape属性只有一个round取值
```html
<kw-button-group shape="round" color="info">
  <kw-button>左手</kw-button>
  <kw-button>猪手</kw-button>
  <kw-button>右手</kw-button>
</kw-button-group>
```
### 高亮效果
设置highlight属性值为true，被点击的按钮就会高亮显示
```html
<kw-button-group color="info" highlight>
  <kw-button>左手</kw-button>
  <kw-button>猪手</kw-button>
  <kw-button>右手</kw-button>
</kw-button-group>
<kw-button-group color="royal" highlight>
  <kw-button>左手</kw-button>
  <kw-button>猪手</kw-button>
  <kw-button>右手</kw-button>
</kw-button-group>
```
### 点击按钮
```html
<template>
<kw-button-group color="info" highlight @click="handleClick">
  <kw-button>左手</kw-button>
  <kw-button>猪手</kw-button>
  <kw-button>右手</kw-button>
</kw-button-group>
</template>
<script>
  export default {
    methods: {
      handleClick(activeIndex) {
        this.$toast(`您点击了第${activeIndex + 1}个按钮`)
      }
    }
}
</script>
```
## API
### Props
名称 |描述|类型|可选值|默认值
---|----|---|----|----
color|颜色|string|参见Color组件|-
size|尺寸|string|small/large|-
shape|形状|string|round|-
highlight|高亮效果|boolean|true/false|-
### Events
名称|描述|参数
---|---|---
click|点击按钮时触发|当前被点击的按钮索引

