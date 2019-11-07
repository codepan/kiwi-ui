<template>
  <div class="kw-picker-slot">
    <div class="kw-picker-handle" :style="itemHeightStyle">
      <ul class="kw-picker-list kw-picker-handle-list" :style="itemHeightStyle" ref="handleListRef">
        <li 
          class="kw-picker-item kw-picker-handle-item"
          :style="itemHeightStyle"
          v-for="(item, index) in data"
          :key="index">
          {{item.text}}
        </li>
      </ul>
    </div>

    <div class="kw-picker-wheel" :style="itemHeightStyle">
      <ul class="kw-picker-list kw-picker-wheel-list" :style="itemHeightStyle" ref="wheelListRef">
        <li class="kw-picker-item kw-picker-wheel-item"
            :class="{'is-hidden': isHiddenWheelItem(index)}"
            :style="[itemHeightStyle, computeWheelItemStyles(index)]"
            v-for="(item, index) in data"
            :key="index">
          {{item.text}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  let itemHeight = 35
  let radius = 100
  /*
  根据三角形余弦公式
  反余弦得到弧度再转换为度数,这个度数是单行文字所占有的。
  余弦定理: a平方 = b平方+c平方 - 2bcCosA
  */
  let deg = Math.round((Math.acos((((radius * radius) + (radius * radius)) - (itemHeight * itemHeight)) / (2 * radius * radius)) * 180) / Math.PI)
  // deg这个值须360能整除，因为当滚动列占满一周后可以再次均匀的覆盖在上一周文字上；滚动时不会出现错位
  while (360 % deg !== 0 && deg <= 360) {
    deg += 1
  }
  // 半圆下的内容条数
  let circleCount = Math.floor(360 / deg)

  export default {
    name: 'kw-picker-slot',
    data () {
      return {
        handler: {
          scrollHeight: 0,
          startY: 0,
          endY: 0,
          startTime: 0,
          endTime: 0,
          currentY: 0,
          activeIndex: 0,
          startTranslateY: 0,
          currentTranslateY: 0
        },
        selectedData: {
          index: 0,
          value: '',
          text: ''
        }
      }
    },
    props: {
      itemHeight: Number,
      data: {
        type: [String, Array]
      },
      index: Number,
      value: Object
    },
    watch: {
      data () {
        this.change()
      }
    },
    computed: {
      itemHeightStyle () {
        return {
          height: `${this.itemHeight}px`,
          lineHeight: `${this.itemHeight}px`
        }
      }
    },
    methods: {
      isHiddenWheelItem (index) {
        let activeIndex = this.handler.activeIndex

        let rangeBranch = circleCount / 2
        if (Math.abs(index - activeIndex) <= rangeBranch) {
          return false
        }
        return true
      },
      computeWheelItemStyles (index) {
        return {
          transform: `rotate3d(1, 0, 0, ${(-1 * index) * deg}deg) translate3d(0, 0, ${radius}px)`
        }
      },
      bindEvent () {
        let $pickerGroup = this.$el
        $pickerGroup.addEventListener('touchstart', event => {
          this.handleTouchStart(event)
        })
        $pickerGroup.addEventListener('touchmove', event => {
          event.preventDefault()
          event.stopPropagation()
          this.handleTouchMove(event)
        })
        $pickerGroup.addEventListener('touchend', event => {
          this.handleTouchEnd(event)
        })
      },
      handleTouchStart (event) {
        this.handler.startY = event.touches[0].pageY
        this.handler.startTime = event.timestamp || Date.now()
        this.handler.startTranslateY = this.handler.currentTranslateY
      },
      handleTouchMove (event) {
        this.handler.currentY = event.touches[0].pageY
        let drift = this.handler.currentY - this.handler.startY
        this.move(drift)
      },
      handleTouchEnd (event) {
        this.handler.endY = event.changedTouches[0].pageY
        this.handler.endTime = event.timestamp || Date.now()

        /*
         此段代码实现惯性缓动
         需要计算两个值：
         1.由于惯性产生的制动距离
         2.惯性持续的时间，即动画执行持续的时间
         */

        let s = this.handler.endY - this.handler.startY
        let t = this.handler.endTime - this.handler.startTime
        let v = s / t
        const a = 1.8 // 加速度

        if (t <= 300) {
          s = v * t * a
          t = 1000 + t * a
          this.move(s, true, t)
        } else {
          this.move(s, true)
        }
        this.change()
      },
      move (drift, isEnd, duration) {
        let minTranslateY = 0
        let maxTranslateY = -(this.data.length - 1) * itemHeight
        let translateY = drift + Number(this.handler.startTranslateY)
        if (translateY > minTranslateY) {
          translateY = minTranslateY
        }
        if (translateY < maxTranslateY) {
          translateY = maxTranslateY
        }
        this.translateHandle(translateY, isEnd, duration)
        this.rotateWheel(translateY, isEnd, duration)
      },
      translateHandle (translateY, isEnd, duration) {
        let $target = this.$refs.handleListRef
        let currentPickerList = this.handler

        let endTranslateY = Math.round(translateY / itemHeight) * itemHeight
        if (isEnd) {
          currentPickerList.currentTranslateY = endTranslateY
          $target.style.transform = `translate3d(0, ${endTranslateY}px, 0)`
          $target.style.transition = `transform ${duration}ms cubic-bezier(0.19, 1, 0.22, 1)`
        } else {
          currentPickerList.currentTranslateY = translateY
          $target.style.transform = `translate3d(0, ${translateY}px, 0)`
          $target.style.transition = ''
        }

        currentPickerList.activeIndex = Math.abs(Math.round(currentPickerList.currentTranslateY / itemHeight))
      },
      rotateWheel (translateY, isEnd, duration) {
        let $target = this.$refs.wheelListRef
        let currentPickerList = this.handler
        let endTranslateY = Math.round(translateY / itemHeight) * itemHeight
        const singleDeg = deg / itemHeight
        let updateDeg = -translateY * singleDeg
        /* 计算touchEnd移动的整数距离 */
        let endDeg = Math.round(updateDeg / deg) * deg
        if (isEnd) {
          currentPickerList.currentTranslateY = endTranslateY
          $target.style.transform = `rotate3d(1, 0, 0, ${endDeg}deg)`
          $target.style.transition = `transform ${duration}ms cubic-bezier(0.19, 1, 0.22, 1)`
        } else {
          currentPickerList.currentTranslateY = translateY
          $target.style.transform = `rotate3d(1, 0, 0, ${updateDeg}deg)`
          $target.style.transition = ''
        }
        currentPickerList.activeIndex = Math.abs(Math.round(currentPickerList.currentTranslateY / itemHeight))
      },
      setSelectedData (index) {
        this.selectedData.index = index
        this.selectedData.value = this.data[index].value
        this.selectedData.text = this.data[index].text
      },
      change () {
        const index = Math.abs(Math.round(this.handler.currentTranslateY / itemHeight))
        this.setSelectedData(index)
        this.$emit('change', this, this.index)
      },
      getPicker (component) {
        if (component.$options.name === 'kw-picker') {
          return component
        }

        return this.getPicker(component.$parent)
      }
    },
    created () {
      this.data.length && this.setSelectedData(0)
      this.getPicker(this).addPickerSlot(this)
    },
    mounted () {
      this.bindEvent()
    }
  }
</script>