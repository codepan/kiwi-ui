<template>
  <kw-layout>
    <kw-nav>Route 路线</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本用法">
        <kw-route from="上海" to="北京"></kw-route>
      </demo-block>
      <demo-block title="双向">
        <kw-route from="上海" to="北京" double></kw-route>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
