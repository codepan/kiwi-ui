<template>
  <div class="kw-range" :class="{'disabled': disabled}">
    <slot name="begin">
      <span class="kw-range-begin" v-if="begin">{{begin}}</span>
    </slot>
    <div class="kw-range-content" :style="contentStyle">
      <div class="kw-range-track" :style="[trackStyle, trackStaticStyle]"></div>
      <slot>
        <i class="kw-range-handle" ref="handleRef" :style="handleStyle">
          <template v-if="sign">
            <template v-if="typeof sign === 'string'">{{sign}}</template>
            <template v-if="typeof sign === 'boolean'">{{result}}</template>
            </template>
        </i>
      </slot>
    </div>
    <slot name="end">
      <span class="kw-range-end" v-if="end">{{end}}</span>
    </slot>
  </div>
</template>
<script>
import { color as colorUtil } from '~src/utils'
export default {
  name: 'kw-range',
  data: () => ({
    result: 50,
    progress: 50,
    clientWidth: 0,
    handleWidth: 30,
    handleHeight: 30,
    forbidden: false
  }),
  props: {
    value: {
      type: Number,
      default: 50
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    trackColor: {
      type: String,
      default: 'stable'
    },
    activeColor: {
      type: String,
      default: 'primary'
    },
    barHeight: {
      type: Number,
      default: 2
    },
    disabled: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 1
    },
    sign: {
      type: [Boolean, String],
      default: false
    },
    begin: {
      type: String,
      default: ''
    },
    end: {
      type: String,
      default: ''
    }
  },
  computed: {
    contentStyle () {
      return {
        marginRight: `${this.handleWidth}px`,
        height: `${Math.max(this.handleHeight, this.barHeight)}px`
      }
    },
    trackStaticStyle () {
      return {
        right: `-${this.handleWidth}px`,
        height: `${this.barHeight}px`
      }
    },
    trackStyle () {
      let activeColor = this.activeColor
      let trackColor = this.trackColor
      if (colorUtil.has(activeColor)) {
        activeColor = colorUtil.get(activeColor)
      }
      if (colorUtil.has(trackColor)) {
        trackColor = colorUtil.get(trackColor)
      }

      return {
        background: `linear-gradient(to right, ${activeColor} ${this.progress}%, ${trackColor} ${this.progress + 0.01}%, ${trackColor} 100%)`
      }
    },
    handleStyle () {
      return {
        left: `${this.progress}%`
      }
    }
  },
  watch: {
    value: {
      handler (val) {
        this.result = val
      },
      immidate: true
    },
    result (val) {
      this.$emit('input', val)
    },
    progress () {
      if (this.isCustomHandle()) {
        this.$nextTick(() => {
          this.getHandleElement().setAttribute('style', this.getCustomHandleStyle())
        })
      }
    }
  },
  methods: {
    bindEvent () {
      const handleElement = this.getHandleElement()
      handleElement.addEventListener('touchstart', this.handleTouchStart)
      handleElement.addEventListener('touchmove', this.handleTouchMove)
      handleElement.addEventListener('touchend', this.handleTouchEnd)
    },
    handleTouchStart (event) {
      this.$emit('drag-start', this.result, this)
    },
    handleTouchMove (event) {
      if (this.forbidden) return
      let progress = Number.parseInt((event.touches[0].clientX / this.clientWidth) * 100)

      if (progress <= 0) {
        progress = 0
      }

      if (progress >= 100) {
        progress = 100
      }

      if (progress % this.step === 0) {
        this.slide(progress)
        this.computeResult(progress)
        this.$emit('dragging', this.result, this)
      }
    },
    handleTouchEnd (event) {
      this.$emit('drag-end', this.result, this)
    },
    slide (progress) {
      this.progress = progress
    },
    computeResult (progress) {
      this.result = Number.parseInt(this.min + (this.max - this.min) * (progress / 100))
    },
    getHandleElement () {
      let handleElement = this.$refs.handleRef
      if (this.isCustomHandle()) {
        handleElement = this.$slots.default[0].elm
      }

      return handleElement
    },
    isCustomHandle () {
      return this.$slots.default && this.$slots.default.length
    },
    getCustomHandleStyle () {
      const originStyleString = this.getHandleElement().getAttribute('style') || ''
      let originStyle = {}

      if (originStyleString) {
        if (originStyleString.includes(';')) {
          originStyleString.split(';').forEach(styleString => {
            if (styleString.includes(':')) {
              let [ styleKey, styleValue ] = styleString.split(':')
              originStyle[styleKey.trim()] = styleValue.trim()
            }
          })
        }
      }
      const currentStyle = {
        ...originStyle,
        ...this.handleStyle,
        position: 'absolute'
      }

      const currentStyleString = Object.entries(currentStyle).map(([key, value]) => `${key}:${value}`).join(';')
      return currentStyleString
    },
    forbid () {
      this.forbidden = true
    },
    allow () {
      this.forbidden = false
    }
  },
  created () {
    this.computeResult(this.progress)
  },
  mounted () {
    this.$nextTick(() => {
      !this.disabled && this.bindEvent()

      const handleWidth = this.getHandleElement().getBoundingClientRect().width
      this.clientWidth = this.$el.getBoundingClientRect().width - handleWidth
      this.handleWidth = handleWidth
      this.handleHeight = this.getHandleElement().getBoundingClientRect().height

      if (this.isCustomHandle()) {
        this.getHandleElement().setAttribute('style', this.getCustomHandleStyle())

      }
    })
  }
}
</script>
<style lang="scss">
  .kw-range {
    display: flex;
    align-items: center;
    &.disabled {
      opacity: 0.6;
    }
    &-content {
      position: relative;
      flex: 1;
      display: flex;
      align-items: center;
      .kw-range-track {
        position: absolute;
        left: 0;
        right: -30px;
        height: 2px;
      }
      .kw-range-handle {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 1px 3px rgba(0,0,0,.4);
        cursor: move;
        font-style: normal;
        font-size: $font-size-small;
        color: $content-color;
      }
    }
    &-begin, &-end {
      flex-shrink: 0;
      font-size: $font-size-small;
      color: $content-color;
    }
    &-begin{
      margin-right: 4px;
    }
    &-end{
      margin-left: 4px;
    }
  }
</style>