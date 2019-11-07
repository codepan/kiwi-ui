<template>
  <div
    class="kw-tabs"
    :class="{'kw-tabs-bottom': position === 'bottom', 'kw-tabs-top': position === 'top', 'fixed': fixed}"
    :style="{'height': tabsHeight}">
    <div class="kw-tab-links" ref="svTabLinksRef" :class="[tabLinksClass, linksClass]" :style="[{'background': tabLinksBgColor}, tabLinksBorderColor]">
      <template v-for="(tab, $index) in tabLinks">
        <button
          class="kw-tab-link"
          :class="[{'is-active': tab.value === activeTabValue}, tab.value === activeTabValue ? activeClass : '', linkClass]"
          @click="handleTabClick(tab)"
          ref="svTabLinkRef">
          <div v-if="tab.htmlIcon" class="tab-link-icon" v-html="tab.htmlIcon"></div>
          <template v-else-if="tab.icon">
            <kw-icon :icon="tab.icon" :size="iconSize" :color="tab.value === activeTabValue ? activeColor : color"></kw-icon>
          </template>

          <div
            class="tab-link-text"
            :class="{'tab-link-text--small': fontSize === 'small', 'tab-link-text--large': fontSize === 'large'}"
            :style="{'font-size': linkTextFontSize, color: tab.value === activeTabValue ? tabLinksActiveColor : tabLinksColor}" v-html="tab.htmlTitle ||tab.title"></div>
        </button>
      </template>
      <div class="kw-tab-link-highlight" :style="linkHighlightStyle" v-if="stripe"></div>
    </div>
    <div class="kw-tab-contents" ref="svTabContentsRef">
      <div class="kw-tab-panels" :style="tabPanelsStyle" ref="svTabPanelsRef">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import {color} from '~src/utils/index'
  export default {
    name: 'kwTabs',
    props: {
      value: {
        type: [String, Number],
        default: 0
      },
      active: {
        type: [String, Number],
        default: 0
      },
      position: {
        type: String,
        default: 'bottom'
      },
      height: [String, Number],
      fixed: {
        type: Boolean,
        default: false
      },
      slidable: {
        type: Boolean,
        default: false
      },
      stripe: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: ''
      },
      bgColor: {
        type: String,
        default: '#f8f8f8'
      },
      color: {
        type: String,
        default: '#515a6e'
      },
      activeColor: {
        type: String,
        default: 'primary'
      },
      iconPosition: {
        type: String,
        default: 'top'
      },
      iconSize: [String, Number],
      fontSize: [String, Number],
      linksClass: String,
      linkClass: String,
      containerClass: String,
      activeClass: String
    },
    data () {
      return {
        hasIcon: false,
        activeTabValue: this.value || this.active,
        activeTabIndex: 0,
        tabLinks: [],
        linkHighlightStyle: {
          width: 0,
          transform: 'translateX(0)'
        },
        tabPanelsStyle: {
          transform: 'translateX(0)',
          transition: 'transform 0s'
        },
        tabPanelWidth: document.body.clientWidth,
        direction: '',
        slideDistance: 0,
        translateX: 0,
        threshold: 80 // 切换到下一页的阀值
        // translateYList: [] // 保存每一个tab当前滚动的Y轴的距离
      }
    },
    watch: {
      activeTabIndex (val) {
        this.repaintTabs()
        this.activeTabValue = this.tabLinks[val].value
        this.$emit('input', this.activeTabValue)
      }
    },
    computed: {
      tabLinksBgColor () {
        if (!this.bgColor || color.has(this.bgColor)) {
          return
        }
        return this.bgColor
      },
      tabLinksBorderColor () {
        if (this.bgColor !== '#f8f8f8') {
          return null
        }

        if (this.position === 'bottom') {
          return {
            borderTop: '1px solid #e2e2e2'
          }
        }
        if (this.position === 'top') {
          return {
            borderBottom: '1px solid #e2e2e2'
          }
        }
        return null
      },
      tabLinksActiveColor () {
        if (!this.activeColor || color.has(this.activeColor)) {
          return
        }
        return this.activeColor
      },
      tabLinksColor () {
        if (!this.color || color.has(this.color)) {
          return
        }
        return this.color
      },
      tabLinksClass () {
        let className = ''
        if (this.bgColor && color.has(this.bgColor)) {
          className = `kw-${this.bgColor}-bg-color`
        }
        if (this.color && color.has(this.color)) {
          className += ` kw-tab-links--${this.color}`
        }
        if (this.activeColor && color.has(this.activeColor)) {
          className += ` kw-tab-links--active-${this.activeColor}`
        }
        if (this.hasIcon) {
          className += ` has-icon--${this.iconPosition}`
        }
        if (this.type) {
          className += ` kw-tab-links--${this.type}`
        }
        return className
      },
      linkTextFontSize () {
        try {
          let fontSize = Number.parseFloat(this.fontSize)
          return `${fontSize}px`
        } catch (error) {
          return null
        }
      },
      tabsHeight () {
        if (!this.height) {
          return null
        }
        if (typeof this.height === 'string' && this.height.endsWith('%')) {
          return this.height
        }

        try {
          let height = Number.parseFloat(this.height)
          return `${height}px`
        } catch (error) {
          return null
        }
      }
    },
    methods: {
      handleTabClick (tab) {
        this.activeTabIndex = tab.index
        let translateX = -tab.index * this.tabPanelWidth
        this.translateX = translateX
        this.slideLink(tab.index)
        this.slide(translateX)
        this.$emit('tab-active', tab)
      },
      preventSlide () {
        this.tabPanelsStyle.transform = `translateX(${this.translateX}px)`
      },
      slideLink (activeTabIndex) {
        let activeTabLinkOffsetLeft = this.$refs.svTabLinkRef[activeTabIndex].offsetLeft
        this.linkHighlightStyle.transform = `translateX(${activeTabLinkOffsetLeft}px)`
      },
      slide (translateX, transitionDuration = 0) {
        this.tabPanelsStyle.transition = `transform ${transitionDuration}s`
        this.tabPanelsStyle.transform = `translateX(${translateX}px)`
      },
      repaintTabs () {
        // let tabs = this.$children.filter(item => item.$vnode.tag.includes('kwTab'))
        if (this.value) {
          this.activeTabValue = this.value
          this.activeTabIndex = this.tabLinks.filter(tab => {
            return tab.value === this.value
          })[0].index
        }

        this.$nextTick(() => {
          this.slideLink(this.activeTabIndex)
          let translateX = -(this.activeTabIndex * this.tabPanelWidth)
          this.translateX = translateX
          this.slide(translateX)
        })
      },
      initTabs () {
        let tabs = this.$children.filter(item => item.$vnode.tag.includes('kwTab'))
        tabs.forEach((tab, index) => {
          this.tabLinks.push({
            title: tab.title,
            htmlTitle: tab.getHtmlTitle(),
            value: tab.value || index,
            icon: tab.icon,
            htmlIcon: tab.getHtmlIcon(),
            index
          })

          // this.translateYList.push(0) // 初始化每个tab的Y轴滚动的距离为0

          this.containerClass && tab.$el.classList.add(this.containerClass)
        })

        if (this.value) {
          this.activeTabValue = this.value
          this.activeTabIndex = this.tabLinks.filter(tab => {
            return tab.value === this.value
          })[0].index
        }


        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].icon) {
            this.hasIcon = true
            break
          }
        }

        this.linkHighlightStyle.width = `${(100 / this.tabLinks.length).toFixed(5)}%`
        if (this.fixed) {
          this.tabPanelWidth = document.body.clientWidth
        } else {
          this.tabPanelWidth = this.$refs.svTabLinksRef.clientWidth
        }

        this.$nextTick(() => {
          this.slideLink(this.activeTabIndex)
          let translateX = -(this.activeTabIndex * this.tabPanelWidth)
          this.translateX = translateX
          this.slide(translateX)

          if (this.slidable) {
            this.bindSlideEvents()
          }
        })
      },
      bindSlideEvents () {
        let $tabPanels = this.$refs.svTabPanelsRef
        let startX, currentX, endX, slideDistance
        let startY, currentY
        $tabPanels.addEventListener('touchstart', event => {
          startX = event.touches[0].pageX
          startY = event.touches[0].pageY
        })
        $tabPanels.addEventListener('touchmove', event => {
          currentX = event.touches[0].pageX
          currentY = event.touches[0].pageY

          /*
           纵向位移大于横向位移时，说明用户想进行上下滑动的操作，在此禁掉左右滑动
           否则就会有太过灵敏的感觉（上下滑动时在左右方向上稍微有些位移tab就会左右滑动）
            */
          if (Math.abs(currentY - startY) > Math.abs(currentX - startX)) {
          } else {
            this.direction = currentX < startX ? 'left' : 'right'

            if ((this.direction === 'left' && this.activeTabIndex === this.tabLinks.length - 1) ||
              (this.direction === 'right' && this.activeTabIndex === 0)) {
              this.preventSlide()
            } else {
              this.slide(this.translateX + currentX - startX)
            }
          }
        })

        $tabPanels.addEventListener('touchend', event => {
          endX = event.changedTouches[0].pageX
          slideDistance = endX - startX

          if ((this.direction === 'left' && this.activeTabIndex === this.tabLinks.length - 1) ||
            (this.direction === 'right' && this.activeTabIndex === 0)) {
            this.preventSlide()
          } else {
            let transitionDuration
            if (Math.abs(slideDistance) < this.threshold) {
              transitionDuration = 0.3
            } else {
              if (this.direction === 'left') {
                this.translateX -= this.tabPanelWidth
                this.activeTabIndex += 1
              }
              if (this.direction === 'right') {
                this.translateX += this.tabPanelWidth
                this.activeTabIndex -= 1
              }
              transitionDuration = 0.6
            }
            this.slideLink(this.activeTabIndex)
            this.slide(this.translateX, transitionDuration)
          }
        })
      },
      getMainComponent () {
        return document.querySelector('.kw-main')
      }
    },
    mounted () {
      this.initTabs()
    }
  }
</script>

<style lang="scss">
  @mixin tab-links-bg-colors {
    @each $key, $value in $system-colors {
      &.kw-tab-links--bg-#{$key} {
        background: $value;
        &.kw-tab-links--button{
          .kw-tab-link{
            &.is-active{
              background: mix($color-dark, $value, $button-active-mix-weight);
            }
          }
        }
      }
    }
  }
  @mixin tab-links-colors {
    @each $key, $value in $system-colors {
      &.kw-tab-links--#{$key} {
        .kw-tab-link{
          color: $value;
        }
      }
    }
  }
  @mixin tab-links--active-colors {
    @each $key, $value in $system-colors {
      &.kw-tab-links--active-#{$key} {
        .kw-tab-link{
          &.is-active {
            color: $value;
          }
        }
        .kw-tab-link-highlight {
          background: mix($color-dark, $value, $button-active-mix-weight);
        }
      }
    }
  }
  .kw-tabs{
    display: flex;
    flex-direction: column;
    &.fixed{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      .kw-tab-links{
        flex-shrink: 0;
      }
      .kw-tab-contents{
        flex: 1;
      }
    }
    &.kw-tabs-bottom{
      flex-direction: column-reverse;
      .kw-tab-links{
        .kw-tab-link-highlight{
          top:0;
        }
      }
    }
    &.kw-tabs-top{
      .kw-tab-links{
        .kw-tab-link-highlight{
          bottom:0;
        }
      }
    }
    .kw-tab-links{
      flex-shrink: 0;
      position: relative;
      display: flex;
      box-sizing: border-box;
      height: $tab-height;
      &.kw-tab-links--button{
        height: auto;
        border: 1px solid $border-color;
        overflow:hidden;
        .kw-tab-link{
          border-right: 1px solid $border-color;
          &:last-child{
            border-right: none;
          }
        }
      }
      &.has-icon {
        &--top, &--bottom{
          height: $tab-height-large;
        }
        &--top{
          .kw-tab-link{
            flex-direction: column;
          }
        }
        &--left{
          .kw-tab-link{
            .tab-link-text{
              margin-left: 3px
            }
          }
        }
        &--right{
          .kw-tab-link{
            flex-direction: row-reverse;
            .tab-link-text{
              margin-right: 3px;
            }
          }
        }
        &--bottom{
          .kw-tab-link{
            flex-direction: column-reverse;
          }
        }
      }
      @include tab-links-bg-colors;
      @include tab-links-colors;
      @include tab-links--active-colors;
      .kw-tab-link{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border:none;
        outline: none;
        margin:0;
        padding:0;
        background: transparent;
        font-size: $font-size;
        .tab-link-icon{
          line-height: 0;
        }
        .tab-link-text{
          &--small{
            font-size: $font-size-small;
          }
          &--large{
            font-size: $font-size-large;
          }
        }
      }
      .kw-tab-link-highlight{
        position: absolute;
        left:0;
        height: 1px;
        transition: transform .4s ease-out;
      }
    }
    .kw-tab-contents{
      flex: 1;
      font-size: $content-color;
      overflow: hidden;
      background: $color-light;
      .kw-tab-panels{
        display: flex;
        transition: transform .2s;
        height: 100%;
        .kw-tab{
          flex-shrink: 0;
          width: 100%;
          overflow: auto;
        }
      }
    }
  }
</style>
