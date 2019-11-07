<template>
  <div
    class="kw-bar"
    :class="[barClass, {'is-fixed': (typeof fixed === 'boolean' && fixed) || (typeof fixed === 'string' && (fixed === 'top' || fixed === 'bottom'))}]"
    :style="style">
    <div class="kw-bar-left">
      <div class="kw-bar-nav" v-if="canBack" @click="goBack">
        <slot name="back">
          <kw-icon icon="arrow-left" size="large" :color="color"></kw-icon>
          <span v-if="backText">{{backText}}</span>
        </slot>
      </div>
      <template v-else>
        <slot name="left"></slot>
      </template>
    </div>
    <div class="kw-bar-title">
      <slot>{{title}}</slot>
    </div>
    <div class="kw-bar-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  import color from '~src/utils/color'

  export default {
    name: 'kwBar',
    data () {
      return {
        canBack: this.hasBack
      }
    },
    props: {
      type: String,
      title: {
        type: String
      },
      fixed: {
        type: [Boolean, String],
        default: false
      },
      color: {
        type: String,
        default: '#17233d'
      },
      bgColor: {
        type: String,
        default: 'light'
      },
      hasBack: {
        type: Boolean,
        default: false
      },
      backText: String,
      back: Function,
      height: [String, Number],
      top: [String, Number],
      right: [String, Number],
      bottom: [String, Number],
      left: [String, Number]
    },
    computed: {
      style () {
        let style = {}
        if (this.height) {
          style.height = `${this.height}px`
        }
        if (this.fixed === 'top') {
          style.top = 0
        }
        if (this.fixed === 'bottom') {
          style.bottom = 0
        }
        if (this.bottom) {
          style.bottom = `${this.bottom}px`
        }
        if (this.left) {
          style.left = `${this.left}px`
        }
        if (this.right) {
          style.right = `${this.right}px`
        }
        if (this.top) {
          style.top = `${this.top}px`
        }

        if (this.color && !color.has(this.color)) {
          style.color = this.color
        }

        if (this.bgColor && !color.has(this.bgColor)) {
          style.backgroundColor = this.bgColor
        }

        return style
      },
      barClass () {
        let barClass = ''
        let types = ['header', 'subheader', 'footer', 'nav']
        if (this.type && types.includes(this.type)) {
          barClass += ` kw-${this.type}`
        }

        if (this.color && color.has(this.color)) {
          barClass += ` kw-${this.color}-text-color`
        }

        if (this.bgColor && color.has(this.bgColor)) {
          barClass += ` kw-${this.bgColor}-bg-color`
        }
        return barClass
      }
    },
    methods: {
      goBack () {
        const next = () => {
          if (this.$router) {
            this.$router.back()
          } else {
            window.history.back()
          }
        }


        if (this.back && typeof this.back === 'function') {
          this.back(next)
        } else {
          next()
        }
      }
    },
    mounted () {
      if (this.type === 'nav') {
        this.canBack = true
      }
    }
  }
</script>

<style lang="scss">
  .kw-bar{
    display: flex;
    justify-content:space-between;
    align-items: center;
    box-sizing: border-box;
    height: $bar-height;
    padding: 0 10px;
    line-height: 1;
    text-align: center;
    font-size: $font-size;
    &.is-fixed{
      position: fixed;
      left:0;
      right:0;
      z-index:1;
      &.kw-header, .kw-nav{
        top: 0;
      }
      &.kw-subheader{
        top: $bar-height;
      }
      &.kw-footer{
        bottom: 0;
        .kw-bar-left, .kw-bar-right{
          display: none;
        }
      }
    }
    &-left{
      flex: .5;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .kw-bar-nav{
        display: flex;
        align-items: center;
      }
    }
    &-title{
      flex: 1;
      font-size: $font-size-large;
    }
    &-right{
      flex: .5;
      display: flex;
      justify-content: flex-end;
      .kw-button{
        padding: 0;
      }
    }
  }
</style>
