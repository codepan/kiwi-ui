<template>
  <svg class="kw-icon-wrapper" :style="sizeStyle" @click="handleClick">
    <use :xlink:href="iconHref" class="kw-icon" :class="colorClass" :style="colorStyle"/>
  </svg>
</template>

<script>
  import {color, iconSize as iconSizeUtil} from '~src/utils/index'
  export default {
    name: 'kwIcon',
    data () {
      return {
        iconColor: this.color,
        iconSize: this.size
      }
    },
    props: {
      icon: {
        type: [String, Object]
      },
      size: [String, Number],
      width: {
        type: [String, Number],
        default: ''
      },
      height: {
        type: [String, Number],
        default: ''
      },
      color: String
    },
    watch: {
      color (value) {
        this.setColor(value)
      }
    },
    computed: {
      iconHref () {
        if (this.icon) {
          let icon = this.icon
          if (typeof this.icon === 'object') {
            Object.keys(this.icon).forEach(key => {
              if (this.icon[key]) {
                icon = key
              }
            })
          }
          return `#kw-icon-${icon}`
        }
        return ''
      },
      sizeStyle () {
        let width
        let height
        if (typeof this.iconSize === 'number') {
          width = height = this.iconSize
        } else {
          if (window.parseFloat(this.iconSize)) {
            width = height = window.parseFloat(this.iconSize)
          } else {
            if (this.iconSize === 'small') {
              width = height = iconSizeUtil.get('small')
            } else if (this.iconSize === 'large') {
              width = height = iconSizeUtil.get('large')
            } else {
              width = height = iconSizeUtil.get()
            }
          }
        }

        if (this.width) {
          width = this.width
        }
        if (this.height) {
          height = this.height
        }
        return {
          width: `${width}px`,
          height: `${height}px`
        }
      },
      colorClass () {
        if (this.iconColor && color.has(this.iconColor)) {
          return `kw-icon-${this.iconColor}`
        }
      },
      colorStyle () {
        if (this.iconColor && !color.has(this.iconColor)) {
          return {
            fill: this.iconColor
          }
        }
      }
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event)
      },
      setColor (color) {
        this.iconColor = color
      },
      setSize (size) {
        this.iconSize = size
      }
    }
  }
</script>

<style lang="scss">
  @mixin kw-icon-colors {
    @each $key, $values in $system-colors {
      &.kw-icon-#{$key} {
        fill: nth($values, 1);
      }
    }
  }
  .kw-icon-wrapper{
    .kw-icon{ 
      fill: $subtitle-color;
      @include kw-icon-colors;
    }
  }
</style>
