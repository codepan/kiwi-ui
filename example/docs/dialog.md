# Dialog (对话框)
##### 弹出式对话框
###### 支持多种交互形式
---
## 示例
### 基本用法
直接给$dialog方法传入字符串，第一个参数为显示内容message，第二个参数为标题title
```html
<template>
  <kw-button @click="openDialog">显示dialog</kw-button>
</template>
<script>
  export default {
    methods: {
      openDialog () {
        this.$dialog('欢迎使用kiwi-ui', '提示')
      }
    }
  }
</script>
```
### 传入对象
在调用$dialog时传入一个对象即可配置更多选项
```html
<template>
  <kw-button @click="openDialog">显示dialog</kw-button>
</template>
<script>
  export default {
    methods: {
      openDialog () {
        this.$dialog({
          type: 'alert', 
          message: 'kiwi-ui很好', 
          title: '提示'
        })
      }
    }
  }
</script>
```
### alert弹框
$dialog还具有alert()、confirm()、prompt()三个方法，它们都返回一个Promise
```html
<template>
  <kw-button @click="openAlertDialog('很好的框架')">打开alert</kw-button>
</template>
<script>
  export default {
    methods: {
      openAlertDialog (message, title, options) {
        this.$dialog.alert(message, title, options).then(() => this.$toast('谢谢支持'))
      }
    }
  }
</script>
```
### confirm弹框
点击确定回调then，点击取消回调catch
```html
<template>
  <kw-button @click="openAlertDialog('很好的框架')">打开alert</kw-button>
</template>
<script>
  export default {
    methods: {
      openConfirmDialog () {
        this.$dialog.confirm('kiwi-ui框架你喜欢吗？', '调查').then(() => {
          this.$toast('点击了确定，感谢')
        }).catch(() => {
          this.$toast('点击了取消，我会更加努力的')
        })
      }
    }
  }
</script>
```
### prompt弹框
inputType默认为text, 可以设置为textarea以输入更多的内容
```html
<template>
  <kw-button @click="openPromptDialog">打开prompt</kw-button>
</template>
<script>
  export default {
    methods: {
      openPromptDialog () {
        this.$dialog.prompt({
          inputValidator (value) {
            if (value.length < 3) {
              return '最少三个字'
            } else {
              return true
            }
          }
        }).then(value => {
          console.log(value)
        }).catch(() => {
 
        })
      }
    }
  }
</script>
```
## API
### Props
名称 |描述|类型|可选值|默认值
---|---|---|---|---
type|对话框类型|string|alert,confirm,prompt|alert
message|对话框内容|string|-|-
title|对话框标题|string|-|-
confirmButtonText|对话框确定按钮文字|string|-|确定
cancelButtonText|对话框取消按钮文字|string|-|取消
inputType|输入框类型，仅对prompt对话框有效|string|text,textarea|text
inputPlaceholder|输入框占位文字|string|-|请输入
inputLabel|输入框label|string|-|-
inputLabelPosition|输入框label位置|string|top,left,right,center|top
inputValidator|输入框内容校验,value为输入框的值。返回值类型为boolean类型时，返回false则将显示inputValidateMessage的文字；如果返回字符串，则将字符串作为inputValidateMessage的值并显示|function(value)|-|-
inputValidateMessage|输入框内容校验提示文字|string|-|-
