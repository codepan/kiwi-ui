# Button (按钮)
##### 按钮是移动app不可或缺的一部分，就像Header一样。不同风格的app，需要的不同按钮的样式。
###### 功能丰富 扩展性强
---
## 示例
### 按钮颜色
按钮颜色有：白色（默认），灰色、蓝色、浅蓝色、绿色、黄色、红色、橙色、紫色。通过设置color为light、stable、primary、info、success、warning、danger、lively、royal创建不同颜色的按钮，不设置默认样式。
```html
<kw-button>白色</kw-button>
<kw-button color="stable">灰色</kw-button>
<kw-button color="primary">蓝色</kw-button>
<kw-button color="info">信息</kw-button>
<kw-button color="success">成功</kw-button>
<kw-button color="warning">警告</kw-button>
<kw-button color="danger">危险</kw-button>
<kw-button color="lively">橙色</kw-button>
<kw-button color="royal">紫色</kw-button>
```
### 按钮尺寸
按钮尺寸有：小、默认（中）、大、充满。通过设置size为small、large、full将按钮设置为小、大、充满父容器的尺寸，不设置为默认（中）尺寸。full尺寸的按钮一般用在Footer组件中。
```html
<kw-button size="small">small</kw-button>
<kw-button>default</kw-button>
<kw-button size="large">large</kw-button>
<kw-button color="lively" size="full">full</kw-button>
```
### 按钮类型
按钮类型有：outline和text。通过设置type为outline将按钮设置为仅含边框，不设置为默认（有背景色）。
```html
<kw-button type="outline" color="primary">Outline</kw-button>
```
### 按钮形状
按钮形状有：直角、圆角、椭圆和圆形。通过设置shape为rect、round或circle将按钮设置为直角按钮、椭圆按钮或圆形按钮，不设置为默认（圆角）。
```html
<kw-button shape="rect" color="primary">rect</kw-button>
<kw-button color="primary">Default</kw-button>
<kw-button shape="round" color="primary">round</kw-button>
<kw-button shape="circle" color="primary">circle</kw-button>
```
### 含有Icon
icon属性可以指定在按钮的文本左侧显示一个图标，取值与Icon组件相同
```html
<kw-button color="info" icon="star" shape="circle"></kw-button>
<kw-button color="info" icon="star">级别</kw-button>
```
### 设置圆角尺寸
可以使用百分比或具体的数值通过radius属性指定按钮的圆角尺寸
```html
<kw-button color="royal" radius="8">圆角为8</kw-button>
```
### 禁用
按钮被禁用后，点击事件会失效，样式上也会有所区分
```html
<kw-button disabled>禁用</kw-button>
<kw-button disabled color="lively">禁用</kw-button>
<kw-button disabled color="lively" type="outline">禁用</kw-button>
```

### 含加载动画
点击按钮，等待异步操作结果返回时非常适用，处于加载中的按钮为禁用状态，可以避免按钮多次点击。loading为true开启动画，默认为false；loading-text可以指定加载中的按钮文字，当且仅当loading为true时生效；loading-type动画的类型，其取值参见Spinner组件的type属性，实际上加载动画使用的就是Spinner组件。
```html
<template>
  <kw-button loading>保存</kw-button>
  <kw-button loading loading-text="保存中..." color="primary">保存</kw-button>
  <kw-button
    :loading="loading"
    loading-text="加载中..."
    loading-type="snake"
    color="primary"
    type="outline"
    @click="handleClick">重试</kw-button>****
</template>
<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      handleClick () {
        this.loading = true
        window.setTimeout(() => {
          this.loading = false
        }, 2000)
      }
    }
  }
</script>
```

## API
### Props
名称 |描述|类型|可选值|默认值
-----|-------|---|-----|-----
color|颜色，取值参见Color组件|string|Color组件中内置的颜色字符串|-
size|尺寸，当为full时按钮宽度将充满父容器|string|`small` `large` `full`|-
type|类型|string|`outline` `text`|-
shape|形状|string|`rect` `round` `circle`|-
icon|图标，显示在按钮文字的左侧|string|参见Icon组件|
radius|圆角半径，可以是百分比，也可以是具体的数值|string/number|-|-
disabled|禁用|boolean|`true` `false`|false
loading|是否显示加载动画|boolean|`true` `false`|false
loading-text|加载时的文字|string|-|-
loading-type|动画类型|string|参见Spinner组件的type属性|snow
### Slots
名称|描述
---|---
-|文字
icon|图标
### Events
名称|描述|参数
---|------|---
click|点击按钮时触发|-

