<template>
  <div class="kw-switch"
       @click="handleSwitch"
       :class="[{'is-active': active, 'is-disabled': disabled, 'kw-switch-small': size === 'small', 'kw-switch-large': size === 'large'}, colorClass]"
       :style="style">
    <div class="kw-switch-inner">
      <div class="kw-switch-inner-on">
        <slot name="on"></slot>
      </div>
      <div class="kw-switch-inner-off">
        <slot name="off"></slot>
      </div>
    </div>
    <div class="kw-switch-handle"></div>
  </div>
</template>

<script>
  import {color} from '~src/utils/index'
  export default {
    name: 'kwSwitch',
    data () {
      return {
        active: false,
        style:{}
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      size: String,
      color: {
        type: String,
        default: 'primary'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      active (val) {
        this.$emit('input', val)
      },
      value (val) {
        this.active = val
      }
    },
    computed: {
      colorClass () {
        if (color.has(this.color)) {
          return `kw-switch-${this.color}`
        } else {
          if (this.active) {
            this.style = {
              background: this.color,
              borderColor: this.color
            }
          } else {
            this.style = {}
          }
        }
      }
    },
    methods: {
      handleSwitch () {
        if (this.disabled) {
          return
        }
        this.active = !this.active
        this.$emit('switch', this.active)
      }
    },
    created () {
      if (this.value) {
        this.active = true
      }
    }
  }
</script>

<style lang="scss">
  @mixin kw-switch-colors {
    @each $key, $value in $system-colors {
      &.kw-switch-#{$key} {
        background: $value;
        @if $key == light {
          border-color: $border-color;
        } @else {
          border-color: $value;
        }
        .kw-switch-inner{
          .kw-switch-inner-on{
            @if $key == light {
              color: $subtitle-color;
            } @else {
              color: $color-light;
            }
          }
        }
      }
    }
  }
  .kw-switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 60px;
    height: 30px;
    border: 2px solid $border-color;
    border-radius: 20px;
    background: $color-light;
    overflow: hidden;
    &.kw-switch-small{
      width: 50px;
    }
    &.kw-switch-large{
      width: 70px;
    }
    &.is-active {
      @include kw-switch-colors;
      .kw-switch-handle{
        left: 100%;
        transform: translateX(-100%);
      }
      .kw-switch-inner{
        &-on{
          color: $subtitle-color;
        }
        &-off{
          color: transparent;
        }
      }
    }
    &.is-disabled{
      opacity: .6;
    }
    &-inner{
      display: flex;
      flex: 1;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      background: transparent;
      transition: all .2s ease-in-out;
      font-size: 14px;
      user-select: none;
      &-on, &-off {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-user-select: none;
      }
      &-on{
        color: transparent;
      }
      &-off{
        color: $subtitle-color;
      }
    }
    .kw-switch-handle{
      position: absolute;
      left: 0;
      width: 26px;
      height: 26px;
      box-sizing: border-box;
      border-radius: 50%;
      box-shadow: 2px 2px 4px rgba(111, 111, 111, .6);
      background: $color-light;

      transition: all .3s ease-out;
    }
  }
</style>
