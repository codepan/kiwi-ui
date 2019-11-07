<template>
  <i
    class="kw-badge"
    :class="[badgeSizeClass, badgeTypeClass, badgeColorClass, {'is-circle': isCircle}]"
    :style="badgeStyles">
    <slot></slot>
  </i>
</template>

<script>
  import {color} from '~src/utils/index'
  export default {
    name: 'kwBadge',
    data () {
      return {
        badgeStyles: {
        },
        isCircle: this.circle
      }
    },
    props: {
      type: {
        type: String,
        default: 'fill'
      },
      color: {
        type: String,
        default: 'danger'
      },
      width: {
        type: String,
        default: 'auto'
      },
      size: {
        type: String,
        validator (size) {
          return ['small', 'large'].includes(size)
        }
      },
      circle: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      badgeSizeClass () {
        return `kw-badge--${this.size}`
      },
      badgeColorClass () {
        if (color.has(this.color)) {
          return `kw-badge--${this.color}`
        } else {
          this.$set(this.badgeStyles, 'color', this.color)
          if (this.type === 'fill') {
            this.$set(this.badgeStyles, 'background', this.color)
          }
        }
      },
      badgeTypeClass () {
        return `kw-badge-${this.type}`
      }
    },
    methods: {
      computedStyle () {
        const $el = this.$el
        if ($el.innerText) {
          if ($el.innerText.length === 1) {
            this.isCircle = true
          } else {
            $el.style.borderRadius = `${window.parseInt($el.offsetWidth / 2)}px`
          }
        }

        if (this.isCircle) {
          this.$nextTick(() => {
            $el.style.height = $el.offsetWidth + 'px'
          })
        }

        if (this.width) {
          $el.style.width = `${this.width}px`
        }
      }
    },
    mounted () {
      this.computedStyle()
    }
  }
</script>

<style lang="scss">
  @mixin kw-badge--colors($type: '') {
    @if $type == outline {
      @each $key, $values in $system-colors {
        &.kw-badge--#{$key} {
          border-color: nth($values, 1);
          @if $key == light or $key == stable {
            color: $content-color;
          } @else {
            color: nth($values, 1);
          }
        }
      }
    } @else {
      @each $key, $values in $system-colors {
        &.kw-badge--#{$key} {
          background: nth($values, 1);
          @if $key == light or $key == stable {
            color: $content-color;
          } @else {
            color: $color-light;
          }
        }
      }
    }
  }
  .kw-badge{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-flow: nowrap;
    box-sizing: border-box;
    padding: 4px 6px;
    line-height: 1;
    color: $color-light;
    font-style: normal;
    font-size: 12px;
    &.is-circle{
      padding-top:0;
      padding-bottom: 0;
      border-radius: 50%;
    }
    &.kw-badge-fill{
     @include kw-badge--colors;
    }
    &.kw-badge-outline{
      border-width: 1px;
      border-style: solid;
      background: $color-light;
      @include kw-badge--colors(outline);
    }
    &.kw-badge--small{
      padding: 3px 4px;
    }
    &.kw-badge--large{
      padding: 5px 7px;
    }
  }
</style>
