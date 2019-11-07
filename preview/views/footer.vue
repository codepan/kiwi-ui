<template>
  <kw-layout>
    <kw-nav>底部栏</kw-nav>
    <kw-main has-nav has-footer>
      <demo-block title="背景颜色和文字颜色">
        <kw-footer :fixed="false" bg-color="success">绿色背景</kw-footer><br/>
        <kw-footer :fixed="false" color="danger">红色文字</kw-footer>
      </demo-block>
    </kw-main>
    <kw-footer>Footer</kw-footer>
  </kw-layout>
</template>

<script>
  export default {
  }
</script>

<style>

</style>
