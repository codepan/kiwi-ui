# Popup (弹出框)
##### 弹出层出现的位置可以为上下左右中
###### 可以自定义内容
---
## 示例
### 显示与隐藏
通过v-model进行双向绑定，值为boolean类型。
```html
<template>
  <kw-button @click="isShow = true">显示popup</kw-button>
  <kw-popup v-model="isShow">
    <kw-list>
      <kw-item>item 1</kw-item>
      <kw-item>item 2</kw-item>
      <kw-item>item 3</kw-item>
    </kw-list>
  </kw-popup>
</template>
<script>
  export default {
    data: () => ({isShow: false})
  }
</script>
```
### 调整显示位置
通过position属性控制popup的显示位置。可选的值有：top、right、bottom、left和center五个选项，默认为bottom。

居中显示时的popup可配置是否显示关闭按钮，通过closable配置，默认为true，配置为false时，将不显示关闭按钮。居中显示常用在充满popup的图片进行广告宣传提示的场景。
```html
<template>
  <kw-button @click="isShow1 = true">上方</kw-button>
  <kw-button @click="isShow2 = true">右侧</kw-button>
  <kw-button @click="isShow3 = true">左侧</kw-button>
  <kw-button @click="isShow4 = true">中心</kw-button>
  <kw-popup v-model="isShow1" position="top">
    出现在上方
  </kw-popup>
  <kw-popup v-model="isShow2" position="right">
    <kw-button @click="isShow2 = false">关闭</kw-button>
  </kw-popup>
  <kw-popup v-model="isShow3" position="left">
    <kw-button @click="isShow3 = false">关闭</kw-button>
  </kw-popup>
  <kw-popup v-model="isShow4" position="center" :mask-closable="false">
    <img class="image" src="../assets/images/popup.jpeg"/>
  </kw-popup>
</template>
<script>
  export default {
    data: () => ({
      isShow1: false,
      isShow2: false,
      isShow3: false,
      isShow4: false
    })
  }
</script>
<style>
.image {
  width:250px;
  height: 400px;
}
</style>
```
### 指定宽高，限制最大宽度或最大高度
默认组件容器的宽高是由其内部内容的宽高决定的，当内部无内容，或内部内容无法撑起组件宽高时，可能会有未知的布局问题产生，所以组件提供了以下两个属性用以自由设置：width、height、min-width、max-width、min-height、max-height

当内容过多可能会超过屏幕时，或无内容导致popup不可见时，可以通过min-width、max-width、max-height和max-height四个属性来分别限制最小宽度、最大宽度、最小高度和最大高度，当内容超过最大宽高的限制时，其就会左右上下滚动显示。

```html
<template>
  <kw-button @click="isShow = true">限制最大高度为屏幕高度的80%</kw-button>
  <kw-popup v-model="isShow" max-height="80%">
      <kw-list>
        <kw-item v-for="item in 20" :key="item">item {{item}}</kw-item>
      </kw-list>
    </kw-popup>
</template>
<script>
  export default {
    data: () => ({isShow: false})
  }
</script>
```
### 不显示遮罩
当不需要显示遮罩时，将mask属性设置为false。此时需要手动调用组件的 close 方法关闭组件。
```html
<template>
  <kw-button @click="isShow = true">不显示遮罩</kw-button>
  <kw-popup v-model="isShow" position="top" :mask="false" ref="popupRef">
    <p class="notice">更新成功</p>
  </kw-popup>
</template>
<script>
  export default {
    data: () => ({isShow: false}),
    watch: {
      isShow (val) {
        window.setTimeout(() => {
          val && this.$refs.popupRef.close()
        }, 2000)
      }
    }
  }
</script>
<style>
.notice {
  margin: 0;
  padding: 10px 0;
  text-align: center;
  background: rgba(0, 0, 0, .7);
  color: #fff;
}
</style>
```
### 监听关闭事件
监听close事件可以处理关闭popup时的逻辑
```html
<template>
  <kw-button @click="isShow = true">监听close事件</kw-button>
  <kw-popup v-model="isShow" @close="handleClose">
    <kw-list>
      <kw-item v-for="item in 6" :key="item">item {{item}}</kw-item>
    </kw-list>
  </kw-popup>
</template>
<script>
  export default {
    data: () => ({isShow: false}),
    methods: {
      handleClose () {
        this.$toast('popup被关闭')
      }
    }
  }
</script>
```
## API
### Props
名称 |描述|类型|可选值|默认值
-----|-------|---|-----|-----
value|通过v-model双向绑定，控制popup的显示与隐藏|boolean|`true` `false`|false
position|显示的位置|string|`top` `right` `bottom` `left` `center`|bottom
mask|是否显示遮罩|boolean|`true` `false`|true
mask-closable|点击遮罩时是否关闭|boolean|`true` `false`|true
z-index|同CSS中z-index属性，可传入合法的数字以及能够转换成数字的字符串|number/string|-|999
width|宽度，同CSS中width属性，非百分比且没有单位时默认单位为px|string/number|-|-
height|高度，同CSS中height属性，非百分比且没有单位时默认单位为px|string/number|-|-
min-width|最小宽度，同CSS中min-width属性，非百分比且没有单位时默认单位为px|string/number|-|-
max-width|最大宽度，同CSS中max-width属性，非百分比且没有单位时默认单位为px|string/number|-|-
min-height|最小高度，同CSS中min-height属性，非百分比且没有单位时默认单位为px|string/number|-|-
max-height|最大高度，同CSS中max-height属性，非百分比且没有单位时默认单位为px|string/number|-|-
### Methods
名称 |描述|参数
-----|-----|---
open|打开|-
close|关闭|-
### Events
名称 |描述|参数
-----|-----|---
close|关闭时触发|-
