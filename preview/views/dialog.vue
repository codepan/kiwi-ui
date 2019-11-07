<template>
  <kw-layout>
    <kw-nav>Dialog 对话框</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本用法">
        <kw-button @click="openDialog('欢迎使用kiwi-ui', '提示')">显示dialog</kw-button>
      </demo-block>
      <demo-block title="传入对象">
        <kw-button @click="openDialog({type: 'alert', message: 'kiwi-ui很好', title: '提示'})">显示dialog</kw-button>
      </demo-block>
      <demo-block title="alert弹框">
        <kw-button @click="openAlertDialog('很好的框架')">打开alert</kw-button>
      </demo-block>
      <demo-block title="confirm弹框">
        <kw-button @click="openConfirmDialog">打开confirm</kw-button>
      </demo-block>
      <demo-block title="prompt弹框">
        <kw-button @click="openPromptDialog">打开prompt</kw-button>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
<script>
  export default {
    methods: {
      openDialog (message, title) {
        if (typeof message === 'object') {
          this.$dialog(message)
        } else {
          this.$dialog(message, title)
        }
      },
      openAlertDialog (message, title, options) {
        this.$dialog.alert(message, title, options).then(() => this.$toast('谢谢支持'))
      },
      openConfirmDialog () {
        this.$dialog.confirm('kiwi-ui框架你喜欢吗？', '调查').then(() => {
          this.$toast('点击了确定，感谢')
        }).catch(() => {
          this.$toast('点击了取消，我会更加努力的')
        })
      },
      openPromptDialog () {
        this.$dialog.prompt({
          inputValidator (value) {
            if (value.length < 3) {
              return '最少三个字'
            } else {
              return true
            }
          }
        }).then((value) => {
          console.log(value)
        }).catch(() => {

        })
      }
    }
  }
</script>
