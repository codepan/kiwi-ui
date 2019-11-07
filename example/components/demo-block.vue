<template>
  <div class="demo-wrapper">
    <main class="demo-container" :style="{height: isExpand ? 'auto' : '200px'}">
      <slot name="highlight"></slot>
    </main>
    <footer class="demo-toggle" @click="toggle">{{isExpand ? '显示部分' : '显示全部'}}</footer>
  </div>
</template>

<script>
  /* eslint-disable */
  import Vue from 'vue'
  export default {
    name: 'demo-block',
    data() {
      return {
        isExpand: false
      };
    },
    methods: {
      toggle() {
        this.isExpand = !this.isExpand
      }
    }
  };
</script>

<style lang="scss">
.demo-wrapper {
  .demo-container {
    overflow: hidden;
    pre {
      margin: 0;
    }
  }
  .demo-toggle {
    margin-top: 2px;
    padding: 10px 0;
    text-align: center;
    cursor: pointer;
    color: #999;
    background: #f5f5f5;
  }
}
</style>
