<template>
  <section class="demo-block">
    <h1 class="demo-block-title">{{title}}</h1>
    <div class="demo-block-content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'demo-block',
    props: ['title']
  }
</script>

<style lang="scss">
  .demo-block{
    &:not(:last-child){
      margin-bottom: 20px;
    }
    &-title{
      font-size: 14px;
      margin-bottom: 10px;
      color: #666;
      border-left: 10px solid $color-success;
      padding-left: 4px;
      margin-left: 2px;
    }
  }
</style>
