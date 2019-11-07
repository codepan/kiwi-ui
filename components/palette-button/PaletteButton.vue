<template>
  <div class="kw-palette-button">
    <button class="kw-palette-button-main" :class="{'expanding': showChild}" @touchstart="toggle">{{text}}</button>
    <div class="kw-palette-button-child" :class="{'expanding': showChild, 'collapsing': !showChild}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'kwPaletteButton',
    data () {
      return {
        showChild: false
      }
    },
    props: {
      text: {
        type: String,
        default: '+'
      }
    },
    methods: {
      toggle () {
        this.showChild = !this.showChild
      },
      expand () {
        this.showChild = true
      },
      collapse () {
        this.showChild = false
      }
    }
  }
</script>

<style lang="scss">
  .kw-palette-button{
    position: relative;
    .kw-palette-button-main{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      border:none;
      outline: none;
      border-radius: 30px;
      background: $color-danger;
      color: $color-light;
      font-size: 18px;
      &.expanding{
        animation: shake .2s ease-in;
        @keyframes shake {
          0%{
            transform: scale(1.1);
          }
          50%{
            transform: scale(.9);
          }
          100%{
            transform: scale(1);
          }
        }
      }
    }
    .kw-palette-button-child{
      position: absolute;
      top: 16px;
      left: 16px;
      z-index:-1;
      &.expanding{
        top: -10px;
        left: -100%;
        transform: rotate(720deg);
        transition: all .5s ease-in;
      }
      &.collapsing{
        top: 16px;
        left: 16px;
        transform: rotate(0);
        transition: all .5s ease-in;
      }
      .kw-button{
        width: 30px;
        height: 30px;
        border:none;
        border-radius: 16px;
        background: $color-danger;
        color: $color-light;
        font-size: 12px;
        &.kw-button-normal{
          padding:0;
        }
      }
    }
  }
</style>
