<template>
  <kw-layout>
    <kw-nav>Color 色彩</kw-nav>
    <kw-main has-nav>
      <demo-block title="主色">
        <div class="color-wrapper color-primary">
          <label class="label">Primary</label>
          <span class="text">#2d8cf0</span>
        </div>
      </demo-block>
      <demo-block title="辅助色">
        <div class="color-wrapper color-light">
          <label class="label">Light</label>
          <span class="text">#fff</span>
        </div>
        <div class="color-wrapper color-stable">
          <label class="label">Stable</label>
          <span class="text">#e8e8e8</span>
        </div>
        <div class="color-wrapper color-info">
          <label class="label">Info</label>
          <span class="text">#50bfff</span>
        </div>
        <div class="color-wrapper color-success">
          <label class="label">Success</label>
          <span class="text">#65ccaf</span>
        </div>
        <div class="color-wrapper color-warning">
          <label class="label">Warning</label>
          <span class="text">#f7ba2a</span>
        </div>
        <div class="color-wrapper color-danger">
          <label class="label">Danger</label>
          <span class="text">#ff4949</span>
        </div>
        <div class="color-wrapper color-lively">
          <label class="label">Lively</label>
          <span class="text">#ff7800</span>
        </div>
        <div class="color-wrapper color-royal">
          <label class="label">Royal</label>
          <span class="text">#8a6de9</span>
        </div>
      </demo-block>
      <demo-block title="中性色">
        <div class="color-wrapper color-title">
          <label class="label">标题 Title</label>
          <span class="text">#17233d</span>
        </div>
        <div class="color-wrapper color-content">
          <label class="label">正文 Content</label>
          <span class="text">#515a6e</span>
        </div>
        <div class="color-wrapper color-disabled">
          <label class="label">禁用 Disabled</label>
          <span class="text">#c0c4cc</span>
        </div>
        <div class="color-wrapper color-disabled-bg">
          <label class="label">禁用 Disabled Background</label>
          <span class="text">#f5f7fa</span>
        </div>
        <div class="color-wrapper color-border">
          <label class="label">边框 Border</label>
          <span class="text">#dcdee2</span>
        </div>
        <div class="color-wrapper color-bg">
          <label class="label">背景 Background</label>
          <span class="text">#f8f8f8</span>
        </div>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style lang="scss">
  @mixin color-examples {
    @each $key, $value in $system-colors {
      &.color-#{$key} {
        background: $value;
      }
    }
  }
  .color-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 0 20px;
    font-size: 16px;
    color: #fff;
    @include color-examples;
    &.color-light{
      color: $content-color;
    }
    &.color-title{
      background: $title-color;
    }
    &.color-content{
      background: $content-color;
    }
    &.color-disabled{
      background: $disabled-color;
    }
    &.color-disabled-bg{
      background: $disabled-bg-color;
      color: $content-color;
    }
    &.color-border{
      background: $border-color;
      color: $content-color;
    }
    &.color-bg{
      background: $bg-color;
      color: $content-color;
    }
    .label{
      margin: 0;
      padding: 0;
      font-weight: bolder;
    }
    .text{
    }
  }
</style>
