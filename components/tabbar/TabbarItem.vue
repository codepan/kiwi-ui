<template>
  <router-link class="kw-tabbar-item" active-class="is-active" :class="itemClass" :style="itemStyle" :to="to" @click.native="setActiveIndex">
    <div class="kw-tabbar-item-inner">
      <div class="kw-tabbar-item-icon">
        <slot name="icon">
          <kw-icon :icon="icon" :color="isActive ? activeColor : color" :size="iconSize"></kw-icon>
        </slot>
      </div>
      <div class="kw-tabbar-item-title">
        <slot name="title">
          <span>{{title}}</span>
        </slot>
      </div>
      <div class="kw-tabbar-item-badge">
        <slot name="badge">
          <kw-badge v-if="badge">{{badge}}</kw-badge>
        </slot>
      </div>
      <div class="kw-tabbar-item-dot" v-if="dot"></div>
    </div>
  </router-link>
</template>

<script>
  import color from '~src/utils/color'
  export default {
    name: 'kwTabbarItem',
    data () {
      return {
        itemIndex: '',
        isActive: false,
        color: '',
        activeColor: '',
        iconSize: '',
        iconSlots: []
      }
    },
    props: {
      title: String,
      icon: String,
      to: {
        type: [String, Object],
        default: ''
      },
      badge: [String, Number],
      dot: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      itemClass () {
        let itemClass = ''
        if (this.isActive) {
          if (color.has(this.activeColor)) {
            itemClass += ` kw-${this.activeColor}-text-color`
          }
        }

        return itemClass
      },
      itemStyle () {
        let itemStyle = {}

        if (this.isActive) {
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
    },
    watch: {
      isActive (val) {
        this.iconSlots.forEach(icon => {
          icon.setColor(val ? this.activeColor : this.color)
        })
      }
    },
    methods: {
      setActiveIndex () {
        this.$parent.activeIndex = this.itemIndex
      }
    },
    mounted () {
      this.color = this.$parent.color
      this.activeColor = this.$parent.activeColor
      this.iconSize = this.$parent.iconSize

      let iconSlots = this.iconSlots = this.$children[0].$children.filter(item => item.$options.name === 'kwIcon')

      iconSlots.forEach(icon => {
        icon.setSize(this.iconSize)
      })
    }
  }
</script>

<style lang="scss">
</style>
