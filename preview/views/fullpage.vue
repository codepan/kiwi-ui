<template>
  <kw-layout>
    <kw-nav>Fullpage 全屏切换</kw-nav>
    <kw-main has-nav>
      <demo-block title="大图片全屏切换">
        <kw-button @click="fullpage" size="full">全屏切换</kw-button>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>

<script>
  export default {
    methods: {
      fullpage () {
        this.$router.push({
          name: 'example-fullpage'
        })
      }
    }
  }
</script>
