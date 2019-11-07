<template>
  <div
    class="kw-carousel"
    :style="carouselStyle"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    v-gesture:tap="handleClick">
    <ul class="kw-carousel-list" ref="carouselListRef">
      <slot>
        <li class="kw-carousel-item" v-if="isLoop">
          <img :src="images[images.length - 1]" class="image">
        </li>
        <li class="kw-carousel-item" v-for="(image, $index) in images" :key="$index">
          <img :src="image" class="image">
        </li>
        <li class="kw-carousel-item" v-if="isLoop">
          <img :src="images[0]" class="image">
        </li>
      </slot>
    </ul>
    <ul class="kw-carousel-indicator" v-if="!hideIndicator">
      <li class="indicator-item" :class="{'kw-primary-border-color active': number - 1 === currentIndex}" v-for="(number, $index) in carouselItemCount" :key="$index"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'kwCarousel',
    data () {
      return {
        carouselWidth: this.width,
        startX: 0,
        currentX: 0,
        endX: 0,
        translateX: 0, // 轮播图平移总的距离
        currentTranslateX: 0, // 本次操作使得轮播图平移的距离
        threshold: 0, // 阈值，执行切换到上一张或者下一张的临界值，该值为轮播图宽度的四分之一，通过代码计算得知
        translateRatio: 2, // 手指位移和实际图片位移的比率为2
        transitionDuration: 0.4, // 动画过渡时长为0.4s
        transitionTimings: {
          switch: 'ease-out',
          reset: 'ease-in-out',
          current: 'linear'
        },
        currentIndex: 0,
        autoplayInterval: null,
        carouselItemCount: 0,
        isLoop: this.loop
      }
    },
    props: {
      images: {
        type: Array,
        default () {
          return []
        }
      },
      hideIndicator: {
        type: Boolean,
        default: false
      },
      autoplay: {
        type: Boolean,
        default: false
      },
      duration: {
        type: Number,
        default: 3000
      },
      loop: {
        type: Boolean,
        default: true
      },
      active: {
        type: Number,
        default: 0,
        validator (val) {
          return Number.isInteger(val)
        }
      },
      width: {
        type: [Number, String],
        default: '100%'
      },
      height: {
        type: [Number, String],
        default: '200px'
      }
    },
    computed: {
      carouselStyle () {
        return {
          width: this.getCssProp(this.width),
          height: this.getCssProp(this.height)
        }
      },
      indicatorItemClass () {
        return ''
      }
    },
    watch: {
      currentIndex (val) {
        if (val >= 0 && val <= this.carouselItemCount - 1) {
          this.$emit('change', val)
        }
      }
    },
    methods: {
      getCssProp (value) {
        if (!value) return ''
        if (typeof value === 'number' || (typeof value === 'string' && window.parseInt(value) + '' === value)) {
          return `${value}px`
        }
        return value
      },
      handleTouchStart (event) {
        this.autoplay && this.clearAutoPlay()
        this.startX = event.touches[0].pageX
      },
      handleTouchMove (event) {
        this.currentX = event.touches[0].pageX
        if (!this.isLoop && ((this.currentX < this.startX && this.currentIndex === this.carouselItemCount - 1) || (this.currentX > this.startX && this.currentIndex === 0))) {
          this.currentTranslateX = (this.currentX - this.startX) / this.translateRatio
        } else {
          this.currentTranslateX = (this.currentX - this.startX) * this.translateRatio
        }
        this.slide(this.translateX + this.currentTranslateX, this.transitionTimings.current, 0)
      },
      handleTouchEnd (event) {
        let touch = event.changedTouches[0]
        this.endX = touch.pageX
        let slideX = (this.endX - this.startX) * this.translateRatio

        let direction = this.endX < this.startX ? 'left' : 'right'

        if (direction === 'left') {
          if (this.isLoop) { // 循环播放
            if (Math.abs(slideX) > this.threshold) { // 移动距离大于阈值，则执行切换的动作
              this.currentIndex = ++this.currentIndex
              this.translateX += -this.carouselWidth
              this.slide(this.translateX, this.transitionTimings.switch)

              if (this.currentIndex === this.carouselItemCount) { // 最后一张图片时，图片进行穿梭操作
                this.shuttle(direction)
              }
            } else { // 移动距离小于阈值，则执行复位的动作
              this.slide(this.translateX, this.transitionTimings.reset)
            }
          } else { // 非循环播放
            if (this.currentIndex === this.carouselItemCount - 1) { // 最后一张图片时，不能切换到第一张图片
              this.slide(this.translateX, this.transitionTimings.reset)
              return
            }

            if (Math.abs(slideX) > this.threshold) { // 移动距离大于阈值，则执行切换的动作
              this.currentIndex = ++this.currentIndex
              this.translateX += -this.carouselWidth
              this.slide(this.translateX, this.transitionTimings.switch)
            } else { // 移动距离小于阈值，则执行复位的动作
              this.slide(this.translateX, this.transitionTimings.reset)
            }
          }
        }

        if (direction === 'right') {
          if (this.isLoop) { // 循环播放
            if (Math.abs(slideX) > this.threshold) { // 移动距离大于阈值，则执行切换的动作
              this.currentIndex = --this.currentIndex
              this.translateX += this.carouselWidth
              this.slide(this.translateX, this.transitionTimings.switch)

              if (this.currentIndex === -1) { // 第一张图片时，图片进行穿梭操作
                this.shuttle(direction)
              }
            } else { // 移动距离小于阈值，则执行复位的动作
              this.slide(this.translateX, this.transitionTimings.reset)
            }
          } else { // 非循环播放
            if (this.currentIndex === 0) { // 第一张图片时，不能切换到最后一张图片
              this.slide(this.translateX, this.transitionTimings.reset)
              return
            }

            if (Math.abs(slideX) > this.threshold) { // 移动距离大于阈值，则执行切换的动作
              this.currentIndex = --this.currentIndex
              this.translateX += this.carouselWidth
              this.slide(this.translateX, this.transitionTimings.switch)
            } else { // 移动距离小于阈值，则执行复位的动作
              this.slide(this.translateX, this.transitionTimings.reset)
            }
          }
        }

        this.autoplay && this.autoPlay()
      },
      /**
       * 穿梭回位
       * @param direction 方向 left right
       */
      shuttle (direction) {
        if (direction === 'left') {
          this.currentIndex = 0
          this.translateX =  -this.carouselWidth
        } else {
          this.currentIndex = this.carouselItemCount - 1
          this.translateX = -(this.currentIndex + 1) * this.carouselWidth
        }

        let loopTimeout = window.setTimeout(() => {
          this.slide(this.translateX, this.transitionTimings.current, 0)
          window.clearTimeout(loopTimeout)
        }, this.transitionDuration * 1000)
      },
      slide (distance, timing = 'linear', duration = this.transitionDuration) {
        this.$refs.carouselListRef.style.transform = `translate3d(${distance}px, 0, 0)`
        this.$refs.carouselListRef.style.transition = duration > 0 ? `transform ${duration}s ${timing}` : ''
      },
      autoPlay () {
        this.autoplayInterval = window.setInterval(() => {
          this.currentIndex += 1

          this.translateX = -(this.currentIndex + 1) * this.carouselWidth
          this.slide(this.translateX, this.transitionTimings.switch)

          if (this.currentIndex === this.carouselItemCount) {
            this.shuttle('left')
          }

        }, this.duration)
      },
      clearAutoPlay () {
        if (!this.autoplayInterval) return

        window.clearInterval(this.autoplayInterval)
        this.autoplayInterval = null
      },
      handleClick () {
        this.$emit('click', this.currentIndex)
      }
    },
    created () {
      if (this.autoplay) {
        this.isLoop = true
        this.autoPlay()
      }

      this.$nextTick(() => {
        let carouselRect = this.$el.getBoundingClientRect()
        this.carouselWidth = carouselRect.width

        this.currentIndex = this.active
        this.translateX = this.isLoop ? -(this.currentIndex + 1) * this.carouselWidth : this.currentIndex * this.carouselWidth
        this.slide(this.translateX, 0)
      })
    },
    mounted () {
      this.$nextTick(() => {
        this.carouselItemCount = this.images.length || this.$children.length
        this.threshold = Number.parseInt(this.carouselWidth / 4)
        if (this.isLoop && this.$children.length > 0) {
          let itemsNode = this.$refs.carouselListRef.querySelectorAll('.kw-carousel-item')
          let lastItemNode = itemsNode[itemsNode.length - 1].cloneNode(true)
          let firstItemNode = itemsNode[0].cloneNode(true)
          this.$refs.carouselListRef.appendChild(firstItemNode) // clone第一个item向最后插入一份
          this.$refs.carouselListRef.insertBefore(lastItemNode, itemsNode[0])
        }
      })
    }
  }
</script>

<style lang="scss">
  .kw-carousel{
    position: relative;
    overflow: hidden;
    .kw-carousel-list{
      display: flex;
      flex-wrap: nowrap;
      height: 100%;
      margin: 0;
      padding: 0;
      .kw-carousel-item{
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        margin: 0;
        padding: 0;
        list-style: none;
        .image{
          width: 100%;
          height: 100%;
        }
      }
    }
    .kw-carousel-indicator{
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      .indicator-item{
        width: 10px;
        height: 2px;
        background: $color-stable;
        margin: 0;
        padding: 0;
        list-style: none;
        &:not(:last-child){
          margin-right: 5px;
        }
        &.active{
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: transparent;
          border-width: 1px;
          border-style: solid;
        }
      }
    }
  }
</style>
