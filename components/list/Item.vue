<template>
  <li
    class="kw-item"
    :class="{'is-link': isLink, 'activable': activable, 'is-accordion': isAccordion, 'is-divider': isDivider, 'slidable': slidable, 'center': align === 'center'}"
    :style="itemDivideStyle"
    @click="handleClick">
    <template v-if="isAccordion">
      <div class="kw-item-accordion-handle" :class="{'is-active': accordionIsActive}">
        <div class="kw-item-accordion-handle-title">
          <slot></slot>
        </div>
        <div class="kw-item-accordion-handle-icon">
          <kw-icon icon="arrow-down" v-if="!accordionIsActive"></kw-icon>
          <kw-icon icon="arrow-up" v-else></kw-icon>
        </div>
      </div>
      <div class="kw-item-accordion-content" v-if="accordionIsActive">
        <slot name="accordion"></slot>
      </div>
    </template>

    <div v-else class="kw-item-main" :class="[itemMainIconClass]" ref="itemMainRef">
      <!-- avatar thumb back  -->
      <div class="kw-item-icon" ref="itemIconRef">
        <slot name="icon"></slot>
      </div>
      <!-- title subtitle content -->
      <div class="kw-item-section">
        <div class="kw-item-section-text" :style="itemSectionTextStyle">
          <div class="title">
            <slot name="title">{{title}}</slot>
          </div>
          <div class="subtitle">
            <slot name="subtitle">{{subtitle}}</slot>
          </div>
          <div class="content">
            <slot></slot>
          </div>
        </div>
        <!-- value note -->
        <div class="kw-item-section-value" ref="itemSectionValueRef">
          <slot name="value">{{value}}</slot>
        </div>
        <div class="kw-item-section-note" ref="itemSectionNoteRef">
          <slot name="note">{{note}}</slot>
        </div>
      </div>
      <!-- arrow -->
      <div class="kw-item-arrow" v-if="isLink">
        <kw-icon icon="arrow-right" v-if="isLink"></kw-icon>
      </div>
    </div>
    <div class="kw-item-options" ref="itemOptionsRef" v-if="slidable && options && options.length > 0">
      <button
        class="button-option"
        v-for="(option, index) in options"
        :key="index"
        :style="option.style"
        @click="handleOptionClick(option)">
        {{option.text}}</button>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'kwItem',
    data () {
      return {
        accordionIsActive: false,
        itemSectionRightWidth: 0,
        hasIcon: false,
        slideHandler: {
          itemMainTranslateX: 0,
          itemOptionsTranslateX: 0,
          threshold: 40 // 阈值
        }
      }
    },
    props: {
      isLink: {
        type: Boolean,
        default: false
      },
      activable: {
        type: Boolean,
        default: false
      },
      to: String,
      title: String,
      subtitle: String,
      value: [String, Number],
      note: String,
      notePosition: {
        type: String,
        default: 'top'
      },
      isAccordion: {
        type: Boolean,
        default: false
      },
      isDivider: {
        type: Boolean,
        default: false
      },
      divide: {
        type: [Boolean, Number],
        default: undefined
      },
      divideTop: Number,
      divideBottom: Number,
      align: {
        type: String,
        default: ''
      },
      iconType: {
        type: String,
        default: '',
        validator (val) {
          if (val && val !== 'avatar' && val !== 'thumbnail') {
            console.error(`icon-type属性只有avatar和thumbnail两种取值或不填写，而您指定的${val}为无效值，将被忽略`)
            return false
          }
          return true
        }
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator (val) {
          if (val !== 'left' && val !== 'right') {
            console.error(`icon-position属性只有left和right两种取值，你指定的${val}为无效值，将被忽略`)
            return false
          }
          return true
        }
      },
      iconStyle: {
        type: [Object, String],
        default: '',
        validator (val) {
          let evil = (fn) => {
            fn = '(' + fn + ')'
            let Fn = Function // 一个变量指向Function，防止有些前端编译工具报错
            return new Fn('return ' + fn)()
          }

          if (!val) {
            return true
          }
          if (typeof val === 'string') {
            try {
              val = evil(val)
            } catch (e) {
              return false
            }
            return (typeof val === 'object')
          }
          return true
        }
      },
      slidable: {
        type: Boolean,
        default: false
      },
      options: {
        type: Array,
        default () {
          return []
        }
      }
    },
    computed: {
      itemMainIconClass () {
        let className = ''
        if (this.hasIcon) {
          className += 'has-icon'
          className += ` icon-position-${this.iconPosition}`
          if (this.iconType === 'avatar' || this.iconType === 'thumbnail') {
            className += ` icon-type-${this.iconType}`
          }
        }
        return className
      },
      itemSectionTextStyle () {
        let style = {}
        if (this.itemSectionRightWidth === 0) {
          style['width'] = '100%'
        } else {
          style['marginRight'] = `${this.itemSectionRightWidth}px`
        }
        return style
      },
      itemDivideStyle () {
        let [top, bottom] = [20, 20]

        let getStyle = (top = 0, bottom = 0) => {
          return {
            margin: `${top}px 0 ${bottom}px`
          }
        }

        if (typeof this.divide === 'boolean') {
          if (!this.divide) {
            return null
          }

          if (this.divideTop) {
            top = this.divideTop
          }
          if (this.divideBottom) {
            bottom = this.divideBottom
          }

          return getStyle(top, bottom)
        }

        if (typeof this.divide === 'undefined') {
          if (!this.divideTop && !this.divideBottom) {
            return null
          }
        }

        top = this.divide || this.divideTop
        bottom = this.divide || this.divideBottom

        return getStyle(top, bottom)
      }
    },
    methods: {
      handleClick (event) {
        this.to && this.$router.push(this.to)
        if (this.isAccordion) {
          this.accordionIsActive = !this.accordionIsActive
        }
        this.$emit('click', event)
      },
      toObject (fn) {
        fn = '(' + fn + ')'
        let Fn = Function // 一个变量指向Function，防止有些前端编译工具报错
        try {
          return new Fn('return ' + fn)()
        } catch (e) {
          console.error(`${fn}不是一个JS字符串对象`)
          return null
        }
      },
      handleSlide () {
        let $el = this.$el
        let $itemOptions = this.$refs.itemOptionsRef
        let [beginX, currentX, endX, itemOptionsWidth] = [0, 0, 0, $itemOptions.clientWidth]
        let [beginTranslateX, endTranslateX] = [0, 0]
        this.slideHandler.itemOptionsTranslateX = itemOptionsWidth
        this.slideHandler.threshold = (itemOptionsWidth / 5).toFixed(2)
//        this.slide(this.slideHandler.itemOptionsTranslateX, $itemOptions)

        $el.addEventListener('touchstart', event => {
          beginX = event.touches[0].pageX
          beginTranslateX = this.slideHandler.itemMainTranslateX
        })
        $el.addEventListener('touchmove', event => {
          currentX = event.touches[0].pageX

          this.slideHandler.itemMainTranslateX += (currentX - beginX) / 2
          this.slideHandler.itemOptionsTranslateX += (currentX - beginX) / 2

          if (currentX < beginX) { // 向左滑动
            if (this.slideHandler.itemOptionsTranslateX > 0) {
              this.slide(this.slideHandler.itemMainTranslateX)
              this.slide(this.slideHandler.itemOptionsTranslateX, $itemOptions)
            } else {
              this.slideHandler.itemMainTranslateX = -itemOptionsWidth
              this.slideHandler.itemOptionsTranslateX = 0

              this.slide(this.slideHandler.itemMainTranslateX)
              this.slide(this.slideHandler.itemOptionsTranslateX, $itemOptions)
            }
          } else { // 向右滑动
            if (this.slideHandler.itemOptionsTranslateX < itemOptionsWidth) {
              this.slide(this.slideHandler.itemMainTranslateX)
              this.slide(this.slideHandler.itemOptionsTranslateX, $itemOptions)
            } else {
              this.slideHandler.itemMainTranslateX = 0
              this.slideHandler.itemOptionsTranslateX = itemOptionsWidth

              this.slide(this.slideHandler.itemMainTranslateX)
              this.slide(this.slideHandler.itemOptionsTranslateX, $itemOptions)
            }
          }
        })
        $el.addEventListener('touchend', event => {
          endX = event.changedTouches[0].pageX
          endTranslateX = this.slideHandler.itemMainTranslateX

          if (endX < beginX) { // 向左滑动
            if (Math.abs(endTranslateX - beginTranslateX) > this.slideHandler.threshold) {
              this.slideHandler.itemMainTranslateX = -itemOptionsWidth
              this.slideHandler.itemOptionsTranslateX = 0

              this.slide(-itemOptionsWidth)
              this.slide(0, $itemOptions)
            } else {
              this.slideHandler.itemMainTranslateX = 0
              this.slideHandler.itemOptionsTranslateX = itemOptionsWidth

              this.slide(0)
              this.slide(itemOptionsWidth, $itemOptions)
            }
          } else { // 向右滑动
            this.slideHandler.itemMainTranslateX = 0
            this.slideHandler.itemOptionsTranslateX = itemOptionsWidth

            this.slide(0)
            this.slide(itemOptionsWidth, $itemOptions)
          }
        })
      },
      slide (distance, target = this.$refs.itemMainRef, duration = 1) {
        target.style.transform = `translate3d(${distance}px, 0, 0)`
        target.style.transition = `transform ${duration}s ease-out`
      },
      handleOptionClick (option) {
        option.handler(this)
      },
      /**
       * 删除dom
       * 当用户左滑或者右滑添加删除按钮，点击删除按钮时，删除当前Item
       * 供外部调用
       */
      remove () {
        this.$el.remove()
      }
    },
    mounted () {
      if (!this.isAccordion) { // 不是二级列表时，计算section右侧的宽度
        let [itemSectionValueWidth, itemSectionNoteWidth] = [this.$refs.itemSectionValueRef.offsetWidth, this.$refs.itemSectionNoteRef.offsetWidth]
        this.itemSectionRightWidth = itemSectionValueWidth > itemSectionNoteWidth ? itemSectionValueWidth : itemSectionNoteWidth

        /*
         没有指定icon时，隐藏
         不加这段代码，用户需要展示图文时就需要在Item组件上传入 :has-icon="true"
         但是为了更加简单，有了这段代码，就不需要指定has-icon属性了
         */
        if (!this.$slots.icon || this.$slots.icon.length === 0) {
          this.hasIcon = false
          this.$refs.itemIconRef.style.display = 'none'
        } else {
          this.hasIcon = true
          this.$slots.icon.forEach(icon => {
            if (this.iconStyle) {
              let iconStyle = this.toObject(this.iconStyle)
              Object.keys(iconStyle).forEach(key => {
                this.$refs.itemIconRef.style[key] = iconStyle[key]
              })
            }
            if (this.iconType === 'avatar' || this.iconType === 'thumbnail') {
              icon.elm.style.width = '100%'
              icon.elm.style.height = '100%'
            }
          })
        }
      }

      if (this.slidable && this.options && this.options.length > 0) {
        this.handleSlide()
      }
    }
  }
</script>

<style lang="scss">
  .kw-list{
    .kw-item{
      position: relative;
      display: flex;
      flex-flow: nowrap;
      list-style: none;
      transition: background .2s;
      overflow: hidden;
      border-top: 1px solid $item-border-color;
      border-bottom: 1px solid $item-border-color;
      background: $color-light;
      &:not(:first-child){
        margin-top: -1px;
      }
      &.activable{
        &:active{
          background: $item-active-bg-color;
        }
      }
      &.is-link{
        .kw-item-section{
          margin-right:30px;
        }
        &:active{
          background: $item-active-bg-color;
        }
      }
      &.is-accordion{
        display: block;
        padding:0;
        .kw-item-accordion-handle{
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;
          padding:10px 16px;
          width: 100%;
          &.is-active{
            background: $item-active-bg-color;
          }
          .kw-item-accordion-handle-title{
            flex: 1;
            font-size: 14px;
            color: #333;
          }
          .kw-item-accordion-handle-icon{
            font-size:15px;
            color:#c3c3c3;
          }
        }
        .kw-item-accordion-content{
          padding-left: 15px;
          .kw-list{
            margin-top: 1px;
            .kw-item{
              &:first-child{
                border-top: none;
              }
              &:last-child{
                border-bottom: none;
              }
            }
          }
        }
      }
      &.is-divider{
        border-bottom: none;
        .kw-item-main{
          background: $bg-color;
        }
        .kw-item-section {
          .kw-item-section-text {
            .content {
              color: #222;
              font-weight: bold;
            }
          }
        }
      }
      &.slidable{
        user-select: none;
      }
      &.center{
        .kw-item-main{
          .kw-item-section{
            .kw-item-section-text{
              .content{
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
          }
        }
      }
      .kw-item-main{
        box-sizing: border-box;
        display: flex;
        flex-shrink: 0;
        width: 100%;
        padding:12px 15px;
        &.has-icon{
          .kw-item-icon{
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }
          .kw-item-section{
            align-self: flex-start;
          }
          &.icon-type-avatar{
            .kw-item-icon{
              width: 40px;
              height: 40px;
              border-radius: 5px;
            }
          }
          &.icon-type-thumbnail{
            .kw-item-icon{
              width: 80px;
              height: 80px;
            }
          }
          &.icon-position-right{
            flex-direction: row-reverse;
            .kw-item-icon{
              margin-left:10px;
            }
          }
          &.icon-position-left{
            .kw-item-icon{
              margin-right: 10px;
            }
          }
        }
        .kw-item-section{
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          overflow: hidden;
          .kw-item-section-text{
            max-width: 100%;
            &.has-right{
              margin-right: 40px;
            }
            .title{
              line-height: 1.5;
              font-size: $font-size-large;
              color: $title-color;
            }
            .subtitle{
              white-space: nowrap;
              overflow: hidden;
              text-overflow:ellipsis;
              font-size: $font-size-small;
              color:#999;
            }
            .content{
              font-size: $font-size;
              color: $content-color;
            }
          }
          .kw-item-section-value{
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 100px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color:#999;
            font-size: 13px;
          }
          .kw-item-section-note{
            position: absolute;
            top: 10px;
            right: 15px;
            max-width: 100px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color:#999;
            font-size: $font-size-small;
          }
        }
        .kw-item-arrow{
          position: absolute;
          top:0;
          bottom:0;
          right:10px;
          display: flex;
          align-items: center;
          justify-content: center;
          width:20px;
          font-size: 15px;
          color:#c3c3c3;
        }
      }
      .kw-item-options{
        position: absolute;
        top:0;
        right:0;
        bottom:0;
        display: flex;
        white-space: nowrap;
        transform: translate3d(100%, 0, 0);
        .button-option{
          flex: 1;
          padding: 0 10px;
          border: none;
          outline: none;
          background: $color-danger;
          font-size: 14px;
          color: $color-light;
          letter-spacing: 2px;
        }
      }
    }
  }
</style>
