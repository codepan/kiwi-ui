<template>
  <ul class="kw-list">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'kwList',
    props: {
      type: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss">
  .kw-list, .kw-list .kw-item{
    box-sizing: border-box;
    margin:0;
    padding:0;
    list-style: none;
  }
</style>
