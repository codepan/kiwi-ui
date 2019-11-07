# Mask（遮罩）
##### 页面有弹窗存在时，底部经常会显示一层遮罩
###### 有组件和插件两种使用方式
---
## 示例
### 基本示例
v-model绑定boolean值控制其打开与关闭。
```html
<template>
  <kw-mask v-model="visible"></kw-mask>
</template>
<script>
  export default {
    data () {
      return {
        visible: false
      }
    }
  }
</script>
```
### 遮罩被点击时不关闭
默认点击遮罩后遮罩会被关闭，可以将close-on-click设置为false，以禁止其关闭，需要手动关闭它时，可以通过添加ref，然后调用close()方法手动将其关闭
```html
<template>
  <kw-mask v-model="visible" :close-on-click="false" @click="closeMask" ref="maskRef"></kw-mask>
</template>
<script>
  export default {
    data () {
      return {
        visible: false
      }
    },
    methods: {
      closeMask () {
        this.$refs.maskRef.close()
      }
    }
  }
</script>
```
### 以插件形式使用
Mask插件以$mask()方法挂载在Vue实例上，该方法会返回一个Mask实例，实例上具有多个方法供外部使用。平时使用Mask也多采用此种方式。
* $mask(options: Object | closeOnClick: Boolean)打开Mask

  options为配置项，其配置项有：
  * zIndex：z-index值
  * color：背景颜色
  * closeOnClick：点击遮罩后，遮罩是否关闭
  
Mask实例方法：  
* close()关闭Mask
* setZIndex(zIndex)用以设置Mask的z-index的值
* getZIndex()获取Mask的z-index值
* setColor(color)设置背景颜色
* getColor()获取背景颜色
* on(name, handler)监听事件，事件有open,close,click三种
```html
<template>
  <kw-button @click="openMask">显示遮罩</kw-button>
</template>
<script>
  export default {
    methods: {
      openMask () {
        let mask = this.$mask({
          color: 'rgba(0, 255, 0, .2)',
          zIndex: 3,
          closeOnClick: false
        })

        mask.on('click', () => {
          this.$toast(mask.getZIndex())
          mask.close()
        })
      }
    }
  }
</script>
```
## API
### Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
value|通过v-model双向绑定，控制Mask的打开与关闭|boolean|true，false|false
color|背景颜色|string|-|rgba(0, 0, 0, .4)
z-index|z-index|number|-|2
closeOnClick|遮罩是否被关闭当点击时|boolean|true,false|true
### Methods
名称|描述|参数
---|---|---
close|关闭遮罩|-
setZIndex|设置z-index|z-index数值
getZIndex|获取z-index|-
setColor|设置背景色|color值
getColor|获取背景色-
on|监听事件|name, handler
### Events
名称|描述|参数
---|---|---
open|打开是触发|-
close|关闭时触发|-
click|点击时触发|-
