<template>
  <kw-layout>
    <kw-nav title="Layout 布局" color="success"></kw-nav>
    <kw-subheader title="这是子标题" color="stable"></kw-subheader>
    <kw-main has-subheader has-footer>
      <kw-list>
        <kw-item v-for="i in 20" :key="i">
          {{i}}
        </kw-item>
      </kw-list>
    </kw-main>
    <kw-footer color="success">底部</kw-footer>
  </kw-layout>
</template>

<script>
  export default {}
</script>
