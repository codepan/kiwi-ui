# Toast (提示)
##### 简短的消息提示框
###### 支持自定义位置、持续时间和样式。
---
## 示例
### 基本用法
直接给$toast方法传入字符串，即为显示的内容。当然该方法也可以传入一个对象，设置message属性，以传入显示的内容。
```html
<template>
  <kw-button @click="openToast('双击返回键退出')">点击弹出Toast</kw-button>
</template>
<script>
  export default {
    methods: {
      openToast (message) {
        this.$toast(message)
      }
    }
  }
</script>
```
### 传入对象
在调用$toast时传入一个对象即可配置更多选项。message为显示的文字；position为Toast的显示位置有left,middle,bottom三种取值，默认bottom；duration为Toast显示持续的时间，单位毫秒，默认为2000ms
```html
<template>
  <kw-button @click="openToast({message: '检查网络连接', position: 'top', duration: 3000})">打开Toast</kw-button>
</template>
<script>
  export default {
    methods: {
      openToast (options) {
        this.$toast(options)
      }
    }
  }
</script>
```
### 手动关闭
duration等于-1，可以使得Toast不会自动关闭，而需要我们手动去关闭它，$toast()方法会返回Toast的一个单例实例，可以调用实例的close()方法来关闭Toast
```html
<template>
  <kw-button @click="openToast({message: '检查网络连接', duration: -1})">打开Toast</kw-button>
  <kw-button @click="closeToast">关闭Toast</kw-button>
</template>
<script>
  export default {
    data () {
      return {
        toast: null
      }
    },
    methods: {
      openToast (message) {
        this.toast = this.$toast(message)
      },
      closeToast () {
        this.toast.close()
      }
    }
  }
</script>
```
### 倾向类型
倾向类型，UI表现为左侧含有倾向性图标。通过type属性指定，默认为text，即无倾向性，不显示图标

其它三种取值分别为：success、warning、error，分别对应成功、警告、错误

除了传入对象类型的options之外，组件提供了更加便捷的调用方式：$toast对外暴露了success()、warning()、error()三个方法，其为推荐的调用方式。
```html
<template>
  <kw-button @click="openSuccessToast('保存成功')">成功Toast</kw-button>
  <kw-button @click="openWarningToast('网络错误')">错误Toast</kw-button>
  <kw-button @click="openErrorToast('未实名认证')">警告Toast</kw-button>
</template>
<script>
  export default {
    methods: {
      openSuccessToast (message) {
        this.$toast.success(message)
        /*
        this.$toast({
          message,
          type: 'success'
        })
        */
      },
      openWarningToast (message) {
        this.$toast.warning(message)
        /*
        this.$toast({
          message,
          type: 'warning'
        })
        */
      },
      openErrorToast (message) {
        this.$toast.error(message)
        /*
        this.$toast({
          message,
          type: 'error'
        })
        */
      }
    }
  }
</script>
```
### 非Vue实例中使用
在Vue环境中我们可以使用this.$toast()来显示toast，在非Vue环境中可以单独导入Toast，Toast具有open()和close()两个静态方法用来显示Toast和关闭Toast
```html
<template>
  <kw-button @click="openToast1({message: '感谢使用kiwi-ui', duration: -1})">打开Toast</kw-button>
  <kw-button @click="closeToast">关闭Toast</kw-button>
</template>
<script>
  import {Toast} from '@codepan/kiwi-ui'
  export default {
    methods: {
      openToast (options) {
        Toast.open(options)
      },
      closeToast () {
        Toast.close()
      }
    }
  }
</script>
```
## API
### Options
名称|描述|类型|可选值|默认值
---|---|---|---|---
message|文本内容|string|-|-
position|显示的位置|string|top,middle,bottom|bottom
type|倾向类型，UI表现为左侧图标不同，默认为text，即无倾向性|string|`success` `warning` `error` `text`|text
duration|持续时间（毫秒），若为-1则不会自动关闭|number|-|2000
### $toast
名称|描述|参数
---|---|---
$toast()|打开Toast|string：显示的内容；<br>object：参见上文的Options
$toast().close()|关闭Toast|-
$toast.success()|打开成功Toast|string：显示的内容；<br>object：参见上文的Options，其中type选项强制为success
$toast.warning()|打开警告Toast|string：显示的内容；<br>object：参见上文的Options，其中type选项强制为warning
$toast.error()|打开错误Toast|string：显示的内容；<br>object：参见上文的Options，其中type选项强制为error
### Toast Methods
名称|描述|参数
---|---|---
open|打开Toast|string：显示的内容；<br>object：参见上文的Options
close|关闭Toast|-
