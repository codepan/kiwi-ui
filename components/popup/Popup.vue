<template>
  <div class="kw-popup" v-show="visible" :class="[popupClass]" :style="[popupStyles]">
    <slot></slot>
    <div class="kw-popup-close" v-if="position === 'center' && closable">
      <kw-icon icon="close" @click="close" size="large" color="stable"></kw-icon>
    </div>
  </div>
</template>

<script>
import { type as typeUtil } from '~src/utils'
  export default {
    name: 'kwPopup',
    data () {
      return {
        visible: false,
        maskInstance: null
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'bottom',
        validator (position) {
          return ['top', 'right', 'bottom', 'left', 'center'].includes(position)
        }
      },
      width: [String, Number],
      height: [String, Number],
      minWidth: [String, Number],
      maxWidth: [String, Number],
      minHeight: [String, Number],
      maxHeight: [String, Number],
      mask: {
        type: Boolean,
        default: true
      },
      maskClosable: {
        type: Boolean,
        default: true
      },
      closable: {
        type: Boolean,
        default: true
      },
      zIndex: {
        type: [Number, String],
        default: 999,
        validator (zIndex) {
          if (zIndex) {
            if (typeUtil.isString(zIndex)) {
              return !window.Number.isNaN(window.Number.parseInt(zIndex))
            }
          }
          return true
        }
      }
    },
    computed: {
      popupClass () {
        let className = `kw-popup-${this.position}`

        return className
      },
      popupStyles () {
        let styles = {}
        const fields = ['width', 'height', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight']
        const transformValue = value => {
          if ((typeUtil.isString(value) && Number.parseFloat(value).toString().length === value.length) || typeUtil.isNumber(value)) {
            return `${value}px`
          }
          return value
        }
        fields.forEach(field => {
          if (this[field]) {
            styles[field] = transformValue(this[field])
          }
        })
        styles['zIndex'] = this.zIndex
        return styles
      }
    },
    watch: {
      value (val) {
        this.visible = val
      },
      visible (val) {
        this.$emit('input', val)

        if (val) {
          this.mask && this.initMask()
        } else {
          console.log(333333)
          this.close()
        }
      }
    },
    methods: {
      initMask () {
        this.maskInstance = this.$mask({
          closeOnClick: this.maskClosable
        })

        this.maskInstance.on('click', () => {
          this.maskClosable && this.close()
        })
      },
      open () {
        this.visible = true
      },
      close () {
        this.$emit('close')
        this.maskInstance && this.maskInstance.close()
        this.visible = false
      }
    },
    mounted () {
      if (this.value) {
        this.visible = true
      }
    }
  }
</script>

<style lang="scss">
  .kw-popup {
    position: fixed;
    background: $color-light;
    -webkit-overflow-scrolling: touch;
    &-top, &-right, &-bottom, &-left {
      overflow: auto;
    }
    &-top {
      top: 0;
      left: 0;
      right: 0;
      transform-origin: top left;
      animation: slideInTop-enter .4s ease-out;
      @keyframes slideInTop-enter {
        from {
          transform: scaleY(0);
        }
        to {
          transform: scaleY(1);
        }
      }
    }
    &-right {
      top: 0;
      right: 0;
      bottom: 0;
      transform-origin: top right;
      animation: slideInRight-enter .4s ease-out;
      @keyframes slideInRight-enter {
        from {
          transform: scaleX(0);
        }
        to {
          transform: scaleX(1);
        }
      }
    }
    &-left {
      top: 0;
      left: 0;
      bottom: 0;
      transform-origin: top left;
      animation: slideInLeft-enter .4s ease-out;
      @keyframes slideInLeft-enter {
        from {
          transform: scaleX(0);
        }
        to {
          transform: scaleX(1);
        }
      }
    }
    &-bottom {
      left:0;
      right:0;
      bottom:0;
      transform-origin: left bottom;
      animation: slow-open .4s ease-out;
      @keyframes slow-open {
        0%{
          transform: scaleY(0);
        }
        100%{
          transform: scaleY(1);
        }
      }
    }
    &-center {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: transparent;
      animation: scaleOpen .4s ease-out;
      @keyframes scaleOpen {
        0%{
          transform: translate(-50%, -50%) scale(0);
        }
        100%{
          transform: translate(-50%, -50%) scale(1);
        }
      }
      .kw-popup-close {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 200%);
      }
    }
  }
</style>
