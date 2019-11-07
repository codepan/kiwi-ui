<template>
  <div class="kw-fullpage">
    <ul class="kw-fullpage-list">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'kwFullpage',
    data () {
      return {
        container: {
          top: '',
          bottom: '',
          width: '',
          height: ''
        },
        slideImages: [0, 1, 2, 3, 4, 5],
        validateMessage: '',
        slideItemIndex: 0,
        touchDirection: 'up',
        touchStartTime: 0,
        touchDuration: 0,
        threshold: 80 // 切换到下一页的阀值
      }
    },
    methods: {
      setContainer () {
        let $container = null
        let $main = document.querySelector('.kw-main')
        if ($main) {
          $container = $main.getBoundingClientRect()
          this.container.top = $container.top
          this.container.bottom = $container.bottom - $container.height - $container.top
          this.container.width = $container.width
          this.container.height = $container.height
        } else {
          this.container.top = 0
          this.container.bottom = 0
          this.container.width = window.innerWidth
          this.container.height = window.innerHeight
        }
      },
      translateY (translateY) {
        let $slideBox = document.querySelector('.kw-fullpage-list')
        $slideBox.style.transform = `translateY(${translateY - this.slideItemIndex * 2}px)`
      },
      computeStyle () {
        this.$el.style.top = `${this.container.top}px`
        this.$el.style.bottom = `${this.container.bottom}px`
        this.$slots.default.forEach(item => {
          item.child.$el.style.height = `${this.container.height}px`
        })
      },
      bindEvents () {
        let $slideBox = document.querySelector('.kw-fullpage-list')
        let containerHeight = this.container.height
        let startY, currentY, endY, moveDistance

        $slideBox.addEventListener('touchstart', (event) => {
          $slideBox.style.transition = 'transform 0s'
          let touch = event.targetTouches[0]
          startY = touch.pageY
          this.touchStartTime = new Date().getTime()
        })

        $slideBox.addEventListener('touchmove', (event) => {
          event.preventDefault()
          let touch = event.targetTouches[0]

          currentY = touch.pageY
          moveDistance = currentY - startY

          this.translateY(-this.slideItemIndex * containerHeight + moveDistance)
        })

        $slideBox.addEventListener('touchend', (event) => {
          this.touchDuration = new Date().getTime() - this.touchStartTime

          if (this.touchDuration < 300 && Math.abs(moveDistance) < 3) { // 点击事件
            return
          }

          let touch = event.changedTouches[0]
          // let targetHeight = $slideBox.childNodes[this.slideItemIndex].offsetHeight
          endY = touch.pageY

          this.moveDirection = endY - startY < 0 ? 'up' : 'down'
          moveDistance = endY - startY

          $slideBox.style.transition = 'transform .4s ease-out'
          if (this.moveDirection === 'up') {
            if (Math.abs(moveDistance) < this.threshold) { // 滑动距离小于阀值，则停留在当前页
              this.translateY(-this.slideItemIndex * containerHeight)
            } else {
              // 滑动到最后一张时，继续向上滑动，总是停留在最后一张
              if (this.slideItemIndex < document.querySelectorAll('.kw-fullpage-item').length - 1) {
                this.slideItemIndex ++
              }

              this.translateY(-this.slideItemIndex * containerHeight)
            }
          } else { // 向下滑动
            if (Math.abs(moveDistance) < this.threshold) { // 滑动距离小于阀值，则停留在当前页
              this.translateY(-this.slideItemIndex * containerHeight)
            } else {
              // 滑动到第一张时，继续向下滑动，则停留在第一张
              if (this.slideItemIndex > 0) {
                this.slideItemIndex --
              }
              this.translateY(-this.slideItemIndex * containerHeight)
            }
          }
        })
      }
    },
    mounted () {
      this.setContainer()
      this.computeStyle()
      this.bindEvents()
    }
  }
</script>
<style lang="scss">
  .kw-fullpage{
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    &-list {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      list-style: none;
      .kw-fullpage-item{
        flex: 1;
        margin: 0;
        padding: 0;
        list-style: none;
      }
    }
  }
</style>
