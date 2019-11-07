<template>
  <kw-layout>
    <kw-nav>Loadmore</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本用法">
        <kw-button @click="loadmore()" size="full">加载更多</kw-button>
      </demo-block>
      <demo-block title="配置加载文字">
        <kw-button @click="loadmore('text')" size="full">加载更多</kw-button>
      </demo-block>
      <demo-block title="已全部加载">
        <kw-button @click="loadmore('allLoaded')" size="full">加载更多</kw-button>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>

<script>
  export default {
    methods: {
      loadmore (name) {
        this.$router.push({
          name: 'example-loadmore',
          query: {
            name
          }
        })
      }
    }
  }
</script>
