<template>
 <main class="kw-main" :class="[bgColorClass, {'has-header': hasHeader, 'has-subheader': hasSubheader, 'has-nav': hasNav, 'has-footer': hasFooter}]" :style="style">
   <slot></slot>
 </main>
</template>

<script>
  import color from '~src/utils/color'
  export default {
    name: 'kwMain',
    props: {
      hasHeader: {
        type: Boolean,
        default: false
      },
      hasSubheader: {
        type: Boolean,
        default: false
      },
      hasNav: {
        type: Boolean,
        default: false
      },
      hasFooter: {
        type: Boolean,
        default: false
      },
      top: [String, Number],
      bottom: [String, Number],
      bgColor: {
        type: String,
        default: '#f8f8f8'
      }
    },
    computed: {
      bgColorClass () {
        if (this.bgColor && color.has(this.bgColor)) {
          return `kw-${this.bgColor}-bg-color`
        }
      },
      style () {
        let style = {}
        if (this.top) {
          if (/^\d+\.?\d*$/.test(this.top)) {
            style.top = `${this.top}px`
          } else {
            style.top = this.top
          }
        }

        if (this.bottom) {
          if (/^\d+\.?\d*$/.test(this.bottom)) {
            style.bottom = `${this.bottom}px`
          } else {
            style.bottom = this.bottom
          }
        }

        if (this.bgColor && !color.has(this.bgColor)) {
          style.backgroundColor = this.bgColor
        }

        return style
      }
    }
  }
</script>

<style lang="scss">
  .kw-main{
    position:fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    overflow-x: auto;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar{display: none;}
    &.has-header, &.has-nav{
      top: $bar-height;
    }
    &.has-subheader{
      top:$bar-height * 2;
    }
    &.has-footer{
      bottom: $bar-height;
    }
  }
</style>
