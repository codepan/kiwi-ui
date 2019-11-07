<template>
  <div class="kw-index-item" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script type="es6">
  export default {
    name: 'kwIndexItem'
  }
</script>

<style lang="scss">
</style>
