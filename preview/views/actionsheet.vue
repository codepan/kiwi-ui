<template>
  <kw-layout>
    <kw-nav>Actionsheet 操作表</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本示例">
        <kw-button @click="isShow1 = true">打开Actionsheet</kw-button>
      </demo-block>
      <demo-block title="设置文字颜色">
        <kw-button @click="isShow2 = true">设置文字颜色</kw-button>
      </demo-block>
      <demo-block title="指定title">
        <kw-button @click="isShow3 = true">设置title="操作表"</kw-button>
      </demo-block>
       <demo-block title="设置取消按钮样式">
         <kw-button @click="isShow4 = true">设置取消按钮样式</kw-button>
      </demo-block>
    </kw-main>
    <kw-actionsheet v-model="isShow1" :actions="actions"></kw-actionsheet>
    <kw-actionsheet v-model="isShow2" :actions="actions" color="red"></kw-actionsheet>
    <kw-actionsheet v-model="isShow3" :actions="actions" title="操作表"></kw-actionsheet>
    <kw-actionsheet v-model="isShow4" :actions="actions" color="red" :cancel="cancelOptions"></kw-actionsheet>
  </kw-layout>
</template>
<script>
  export default {
    data () {
      return {
        isShow1: false,
        isShow2: false,
        isShow3: false,
        isShow4: false,
        actions: [
          {
            text: '打开照相机',
            action (vue) {
              vue.$toast('我打不开照相机哦')
            }
          },
          {
            text: '打开相册',
            action (vue) {
              vue.$toast('我打不开相册哦')
            }
          }
        ],
        cancelOptions: {
          text: '关闭',
          color: 'green',
          style: {
            textDecoration: 'underline'
          }
        }
      }
    }
  }
</script>
