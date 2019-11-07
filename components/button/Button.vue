<template>
  <button
    class="kw-button"
    :class="[buttonTypeClass, buttonColorClass, buttonSizeClass, buttonShapeClass, {'is-highlight': isHighlight}, {'is-disabled': disabled || loading}]"
    :style="buttonStyle"
    :disabled="disabled"
    @click="handleClick">
    <kw-spinner v-if="loading" :type="loadingType" size="mini" :color="loadingColor"></kw-spinner>
    <span class="kw-button-icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <kw-icon :icon="icon" :color="(color === 'light' || color === 'stable') ? '#515a6e' : 'light'"></kw-icon>
      </slot>
    </span>
    <span v-if="$slots.default || (loading && loadingText)">
      <template v-if="loading && loadingText">{{loadingText}}</template>
      <slot v-else></slot>
    </span>
  </button>
</template>

<script>
  import { type as typeUtil, color as colorUtil } from '~src/utils'
  import loadingTypes from '../spinner/types'
  export default {
    name: 'kwButton',
    props: {
      size: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: 'light',
        validator: color => colorUtil.keys().includes(color)
      },
      disabled: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: ''
      },
      shape: {
        type: String,
        default: ''
      },
      radius: {
        type: [String, Number],
        default: ''
      },
      icon: String,
      loading: {
        type: Boolean,
        default: false
      },
      loadingText: {
        type: String,
        default: ''
      },
      loadingType: {
        type: String,
        default: 'snow',
        validator: type => loadingTypes.includes(type)
      }
    },
    data() {
      return {
        buttonColor: this.color,
        buttonSize: this.size,
        buttonStyle: {},
        isHighlight: false
      }
    },
    computed: {
      buttonColorClass: {
        get () {
          return `kw-button-${this.buttonColor}`
        },
        set (color) {
          this.buttonColor = color
        }
      },
      buttonSizeClass: {
        get () {
          return this.buttonSize ? `kw-button-${this.buttonSize}` : ''
        },
        set (size) {
          this.buttonSize = size
        }
      },
      buttonTypeClass() {
        return this.type ? `kw-button-${this.type}` : ''
      },
      buttonShapeClass() {
        return this.shape ? `kw-button-${this.shape}` : ''
      },
      computedRadius () {
        if (!this.radius) {
          return
        }

        if (typeUtil.isString(this.radius)) {
          if (this.radius.endsWith('%')) {
            return this.radius
          }
        }

        return `${this.radius}px`
      },
      loadingColor () {
        if (this.type === 'outline' || this.type === 'text') {
          return this.color
        }

        if (['light', 'stable'].includes(this.color)) {
          return 'content'
        }

        return 'light'
      }
    },
    methods: {
      handleClick(value) {
        if (this.disabled) return
        this.$emit('click', value)
      }
    },
    mounted () {
      if (this.radius) {
        this.$set(this.buttonStyle, 'borderRadius', this.computedRadius)
      }

      if (this.shape === 'circle') {
        let rect = this.$el.getBoundingClientRect()
        let size = Math.max(rect.width, rect.height)
        this.$set(this.buttonStyle, 'width', size + 'px')
        this.$set(this.buttonStyle, 'height', size + 'px')
      }
    }
  }
</script>

<style lang="scss">
  @mixin button-colors {
    @each $key, $value in $system-colors {
      &-outline{
        &.kw-button-#{$key}{
          border-color: $value;
          color: $value;
          &:active{
            border-color: mix($color-dark, $value, $button-active-mix-weight);
            color: mix($color-dark, $value, $button-active-mix-weight);
          }
        }
      }
      &-text{
        &.kw-button-#{$key}{
          color: $value;
          &:active{
            color: mix($color-dark, $value, $button-active-mix-weight);
          }
        }
      }
      &-#{$key} {
        background: $value;
        color: $color-light;
        &:active, &.is-highlight{
          background: mix($color-dark, $value, $button-active-mix-weight);
        }
      }
    }
  }
  .kw-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 4px;
    outline: none;
    border: none;
    line-height: 1;
    @include button-size;
    -webkit-appearance: none;
    user-select: none;
    text-align: center;
    font-size: $font-size;
    white-space: nowrap;
    @include button-colors;
    .kw-button-icon{
      line-height: 0;
    }
    > span:not(:first-child) {
      margin-left: 4px;
    }
    &-light, &-stable{
      border: 1px solid $border-color;
      color: $content-color;
    }
    &-outline{
      background: $color-light !important;
      border-style: solid;
      border-width: 1px;
      &:active, &.is-highlight{
        background: $color-light !important;
      }
    }
    &-text {
      background: transparent !important;
      border: none;
      &:active, &.is-highlight{
        background: transparent !important;
        border: none;
      }
    }
    &-small {
     @include button-size(small);
    }
    &-large {
     @include button-size(large);
    }
    &-full {
      display: flex;
      width: 100%;
      height: 100%;
      min-height: 36px;
    }
    &.is-disabled {
      opacity: .5;
      cursor: not-allowed;
      pointer-events: none;
    }
    &-rect {
      border-radius: 0;
    }
    &-round {
      border-radius: 20px;
    }
    &-circle {
      min-width: 0;
      border-radius: 50%;
    }
  }
</style>
