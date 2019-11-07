<template>
  <div class="sub-group">
    <h3 class="subgroup-title">{{title}}</h3>
    <div class="subgroup-list">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sub-group',
  props: ['title']
}
</script>
<style lang="scss">
.sub-group {
  margin: 10px 0 0 10px;
  .subgroup-title {
    margin-bottom: 5px;
    color: #999;
  }
}
</style>