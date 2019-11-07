<template>
  <kw-layout>
    <kw-nav>Nav 导航栏</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本使用">
        <kw-nav :fixed="false" :back="goBack">导航栏</kw-nav>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
<script>
  export default {
    methods: {
      goBack (next) {
        this.$dialog.confirm('您确定要离开吗？', '提示', {
          confirmButtonText: '再想想',
          cancelButtonText: '去意已决'
        }).catch(() => {
          next()
        })
      }
    }
  }
</script>
