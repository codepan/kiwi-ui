<template>
  <div class="doc-preview">
    <iframe :src="src" frameborder="0" class="doc-preview-window"></iframe>
  </div>
</template>

<script>
  export default {
    props: ['src']
  }
</script>

<style lang="scss">
  .doc-preview {
    background: url('../assets/images/phone.png') no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    width: 350px;
    padding: 100px 15px;
    &-window {
      width: 100%;
      height: 100%;
      background: #fff;
    }
  }
</style>
