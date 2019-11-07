<template>
  <kw-layout>
    <kw-nav>Toast 提示</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本用法">
        <kw-button @click="openToast('双击返回键退出')">打开Toast</kw-button>
      </demo-block>
      <demo-block title="传入对象">
        <kw-button @click="openToast({message: '检查网络连接', position: 'top', duration: 3000})">打开Toast</kw-button>
      </demo-block>
      <demo-block title="手动关闭">
        <kw-button @click="openToast({message: '检查网络连接', duration: -1})">打开Toast</kw-button>
        <kw-button @click="closeToast">关闭Toast</kw-button>
      </demo-block>
      <demo-block title="倾向类型">
        <kw-button @click="openToast({message: '保存成功', type: 'success'})">成功Toast</kw-button>
        <kw-button @click="openToast({message: '未实名认证', type: 'warning'})">警告Toast</kw-button>
        <kw-button @click="openToast({message: '网络错误', type: 'error'})">错误Toast</kw-button>
      </demo-block>
      <demo-block title="非Vue实例中使用">
        <kw-button @click="openToast1({message: '感谢使用kiwi-ui', duration: -1})">打开Toast</kw-button>
        <kw-button @click="closeToast1">关闭Toast</kw-button>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
<script>
  import Toast from '~components/toast'
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
      },
      openToast1 (message) {
        Toast.open(message)
      },
      closeToast1 () {
        Toast.close()
      }
    }
  }
</script>
