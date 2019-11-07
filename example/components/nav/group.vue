<template>
  <div class="group">
    <h2 class="group-title">{{title}}</h2>
    <div class="group-list">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style lang="scss">
  .group {
    box-sizing: border-box;
    margin: 15px;
    .group-title {
      color: #515a6e;
    }
    .group-list {
      margin: 0;
    }
  }
</style>
