# Modal (模态框)
##### 显示在屏幕中间的弹框，可以自定义标题和内容
###### 注意和Popup组件、Dialog组件做以区分
---
## 示例
### 显示与隐藏
#### 通过v-model进行双向绑定，值为boolean类型。
```html
<template>
  <kw-button @click="isShow = true">居中弹出popup</kw-button>
  <kw-popup v-model="isShow">
    这是一个最简单的popup，但是样子可能特别丑
  </kw-popup>
</template>
<script>
  export default {
    data () {
      return {
        isShow: false
      }
    }
  }
</script>
```
### 调整显示位置
#### 通过position属性控制。可选的值有：center，top，right，bottom，left。默认为center。
```html
<template>
  <kw-button @click="isShow = true">底部弹出popup</kw-button>
  <kw-popup v-model="isShow" position="bottom">
    <kw-list>
      <kw-item>item 1</kw-item>
      <kw-item>item 2</kw-item>
      <kw-item>item 3</kw-item>
    </kw-list>
  </kw-popup>
</template>
<script>
  export default {
    data () {
      return {
        isShow: false
      }
    }
  }
</script>
```
### 指定高度和限制最大高度
#### position为bottom时，可以通过top属性指定高度。当内容过多时可能会超过屏幕，此时可以通过max-height来限制最大高度，然后内部内容上下滚动显示。top属性和maxHeight属性两者的区别在于：top会完全确定高度，无论内容的多少；而maxHeight会根据内容的多少自适应高度，当超过临界值时，maxHeight会见效。
```html
<template>
  <kw-button @click="isShow = true">限制最大高度为屏幕高度的80%</kw-button>
  <kw-popup v-model="isShow" position="bottom" max-height="80%">
      <kw-list>
        <kw-item v-for="item in 20" :key="item">item {{item}}</kw-item>
      </kw-list>
    </kw-popup>
</template>
<script>
  export default {
    data () {
      return {
        isShow: false
      }
    }
  }
</script>
```
### 监听关闭事件
#### 监听close事件可以处理关闭popup时的逻辑
```html
<template>
  <kw-button @click="isShow = true">监听close事件</kw-button>
  <kw-popup v-model="isShow" position="bottom" @close="handleClose">
    <kw-list>
      <kw-item v-for="item in 6" :key="item">item {{item}}</kw-item>
    </kw-list>
  </kw-popup>
</template>
<script>
  export default {
    data () {
      return {
        isShow: false
      }
    }
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
value|通过v-model双向绑定，控制popup的显示与隐藏|boolean|true，false|false
top|距离屏幕顶端的距离，可以传入百分比，数字，或数字字符串，没有单位时默认单位为px|string，number|-|-
position|显示的位置|string|center，top，right，bottom，left|center
max-height|最大高度，可以传入百分比，数字，或数字字符串，没有单位时默认单位为px|string，number|-|-
full|是否全屏，即充满屏幕|boolean|true，false|false
### Events
名称 |描述|参数
-----|-----|---
close|关闭时触发|-
