<template>
  <kw-layout>
    <kw-nav>Mask 遮罩</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本示例">
        <kw-button @click="visible = true">显示遮罩</kw-button>
      </demo-block>
      <demo-block title="遮罩被点击时不关闭">
        <kw-button @click="visible1 = true">显示遮罩</kw-button>
      </demo-block>
      <demo-block title="以插件形式使用">
        <kw-button @click="openMask">显示遮罩</kw-button>
      </demo-block>
    </kw-main>
    <kw-mask v-model="visible"></kw-mask>
    <kw-mask v-model="visible1" :close-on-click="false" @click="closeMask" ref="maskRef"></kw-mask>
  </kw-layout>
</template>
<script>
  export default {
    data () {
      return {
        visible: false,
        visible1: false
      }
    },
    methods: {
      openMask () {
        let mask = this.$mask({
          color: 'rgba(0, 255, 0, .2)',
          zIndex: 3,
          closeOnClick: false
        })

        mask.on('click', () => {
          mask.close()
          this.$toast(mask.getZIndex())
        })
      },
      closeMask () {
        this.$refs.maskRef.close()
      }
    }
  }
</script>
