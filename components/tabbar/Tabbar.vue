<template>
  <div class="kw-tabbar" :class="[{'fixed-top': fixed === 'top', 'fixed-bottom': fixed === 'bottom'}, barClass]" :style="barStyle">
    <template v-if="items && items.length > 0">
      <router-link
        class="kw-tabbar-item"
        v-for="(item, $index) in items"
        :key="$index"
        active-class="is-active"
        :class="itemClass($index)"
        :style="itemStyle($index)"
        :to="item.to"
        @click.native="activeIndex = $index">
        <div class="kw-tabbar-item-inner">
          <div class="kw-tabbar-item-icon">
            <kw-icon :icon="item.icon" :color="$index === activeIndex ? activeColor : color" :size="iconSize"></kw-icon>
          </div>
          <div class="kw-tabbar-item-title">
            <span>{{item.title}}</span>
          </div>
          <div class="kw-tabbar-item-badge" v-if="item.badge">
            <kw-badge>{{item.badge}}</kw-badge>
          </div>
          <div class="kw-tabbar-item-dot" v-if="item.dot"></div>
        </div>
      </router-link>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script>
  import {color, fontSize} from '~src/utils'
  export default {
    name: 'kwTabbar',
    data () {
      return {
        activeIndex: this.value
      }
    },
    props: {
      value: {
        type: Number,
        default: 0
      },
      items: {
        type: Array,
        default () {
          return []
        }
      },
      fixed: String,
      activeColor: {
        type: String,
        default: 'primary'
      },
      color: {
        type: String,
        default: '#515a6e'
      },
      bgColor: {
        type: String,
        default: 'light'
      },
      fontSize: {
        type: [Number, String],
        default: 'default'
      },
      iconSize: {
        type: [Number, String],
        default: 'large'
      },
      iconPosition: {
        type: String,
        default: 'top',
        validator (val) {
          return ['top', 'right', 'bottom', 'left'].includes(val)
        }
      },
      borderColor: String,
      padding: [Number, String],
      height: [String, Number]
    },
    computed: {
      barClass () {
        let barClass = ''
        if (this.bgColor && color.has(this.bgColor)) {
          barClass += `kw-${this.bgColor}-bg-color `
        }

        if (this.borderColor && color.has(this.borderColor)) {
          barClass += `kw-${this.borderColor}-border-color `
        }


        if (this.iconPosition && ['top', 'right', 'bottom', 'left'].includes(this.iconPosition)) {
          barClass += `icon-${this.iconPosition}`
        }

        return barClass
      },
      barStyle () {
        let barStyle = {}
        if (this.bgColor && !color.has(this.bgColor)) {
          barStyle.backgroundColor = this.bgColor
        }
        if (this.fontSize) {
          if (fontSize.has(this.fontSize)) {
            barStyle.fontSize = fontSize.get(this.fontSize)
          } else {
            if (/^\d+\.?\d*$/.test(this.fontSize)) {
              barStyle.fontSize = `${this.fontSize}px`
            } else {
              barStyle.fontSize = this.fontSize
            }
          }
        }


        if (this.borderColor && !color.has(this.borderColor)) {
          barStyle.borderColor = this.borderColor
        }


        if (this.padding) {
          if (/^\d+\.?\d*$/.test(this.padding)) {
            barStyle.padding = `${this.padding}px 0`
          } else {
            barStyle.padding = `${this.padding} 0`
          }
        }

        if (this.height) {
          if (/^\d+\.?\d*$/.test(this.height)) {
            barStyle.height = `${this.height}px`
          } else {
            barStyle.height = this.height
          }
        }
        return barStyle
      },
      itemClass () {
        return index => {
          let itemClass = ''
          if (index === this.activeIndex) {
            if (color.has(this.activeColor)) {
              itemClass += ` kw-${this.activeColor}-text-color`
            }
          }

          return itemClass
        }
      },
      itemStyle () {
        return index => {
          let itemStyle = {}

          if (index === this.activeIndex) {
            if (!color.has(this.activeColor)) {
              itemStyle.color = this.activeColor
            }
          } else {
            if (!color.has(this.color)) {
              itemStyle.color = this.color
            }
          }

          return itemStyle
        }
      }
    },
    watch: {
      value (val) {
        this.activeIndex = val
      },
      activeIndex (val) {
        this.setTabbarItemActive(val)
        this.$emit('input', val)
      }
    },
    methods: {
      setTabbarItemIndex () {
        const tabbarItems = this.$children.filter(item => item.$options.name === 'kwTabbarItem')
        tabbarItems.forEach((item, index) => {
          this.$set(item, 'itemIndex', index)
        })
      },
      setTabbarItemActive (activeIndex) {
        const tabbarItems = this.$children.filter(item => item.$options.name === 'kwTabbarItem')
        tabbarItems.forEach((item, index) => {
          this.$set(item, 'isActive', index === activeIndex)
        })
      }
    },
    mounted () {
      this.setTabbarItemActive(this.activeIndex)
      this.setTabbarItemIndex()
    }
  }
</script>

<style lang="scss">
  .kw-tabbar{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 4px 0;
    font-size: 12px;
    user-select: none;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: transparent;
    &.fixed-top, &.fixed-bottom {
      position: fixed;
      &.fixed-top{
        top: 0;
        border-top: none;
        border-bottom-width: 1px;
        border-bottom-style: solid;
      }
      &.fixed-bottom{
        bottom: 0;
      }
    }
    .kw-tabbar-item{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      &-inner{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        .kw-tabbar-item-icon{
          line-height: 1;
        }
        .kw-tabbar-item-badge{
          position: absolute;
          top: -2px;
          left: 100%;
          transform: translateX(-20%);
        }
        .kw-tabbar-item-dot{
          position: absolute;
          top: -2px;
          left: 100%;
          transform: translateX(-50%);
          width: 10px;
          height: 10px;
          background: $color-danger;
          border-radius: 50%;
        }
      }
    }
    &.icon-top{
      .kw-tabbar-item-inner{
        flex-direction: column;
      }
    }
    &.icon-right{
      .kw-tabbar-item-inner{
        flex-direction: row-reverse;
        .kw-tabbar-item-title{
          margin-right: 4px;
        }
      }
    }
    &.icon-bottom{
      .kw-tabbar-item-inner{
        flex-direction: column-reverse;
      }
    }
    &.icon-left{
      .kw-tabbar-item-inner{
        flex-direction: row;
        .kw-tabbar-item-title{
          margin-left: 4px;
        }
      }
    }
  }
</style>
