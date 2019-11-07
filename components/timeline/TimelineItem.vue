<template>
    <div class="kw-timeline-item">
      <template v-if="timePosition === 'left'">
        <div class="kw-timeline-item-time" :style="timeStyle.left">
          <slot name="time"></slot>
        </div>

        <div class="kw-timeline-item-dot-and-line">
          <div class="kw-timeline-item-dot">
            <slot name="dot">
              <i class="dot-entry" :class="dotClass"></i>
            </slot>
          </div>
          <div class="kw-timeline-item-line" v-if="!hideLine">
            <div class="line-entry" :class="lineClass"></div>
          </div>
        </div>

        <div class="kw-timeline-item-content">
          <div class="kw-timeline-item-content-body">
            <slot></slot>
          </div>
          <div class="kw-timeline-item-content-footer">
            <slot name="note"></slot>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="kw-timeline-item-dot-and-line" ref="dotAndLineRef">
          <div class="kw-timeline-item-dot">
            <slot name="dot">
              <i class="dot-entry" :class="dotClass"></i>
            </slot>
          </div>
          <div class="kw-timeline-item-line" v-if="!hideLine">
            <div class="line-entry" :class="lineClass"></div>
          </div>
        </div>

        <div class="kw-timeline-item-main">
          <div class="kw-timeline-item-time" :style="timeStyle.right">
            <slot name="time"></slot>
          </div>

          <div class="kw-timeline-item-content">
            <div class="kw-timeline-item-content-body">
              <slot></slot>
            </div>
            <div class="kw-timeline-item-content-footer">
              <slot name="note"></slot>
            </div>
          </div>
        </div>
      </template>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'kwTimelineItem',
    props: {
      dotType: String,
      dotColor: String,
      dotSize: String,
      lineType: String,
      lineColor: String
    },
    data () {
      return {
        timePosition: '',
        hideLine: false,
        computeDotType: this.dotType,
        computeDotColor: this.dotColor,
        computeDotSize: this.dotSize,
        computeLineType: this.lineType,
        computeLineColor: this.lineColor,
        timeStyle: {
          left: {
            display: 'block'
          },
          right: {
            display: 'block'
          }
        }
      }
    },
    computed: {
      dotClass () {
        let className = `dot-type-${this.computeDotType}`
        if (this.computeDotSize === 'small' || this.computeDotSize === 'large') {
          className += ` dot-size-${this.computeDotSize}`
        }
        if (this.computeDotType === 'outline' || this.computeDotType === 'dotted') {
          className += ` kw-${this.computeDotColor}-border-color`
        }
        if (this.computeDotType === 'fill') {
          className += ` kw-${this.computeDotColor}-bg-color`
        }
        return className
      },
      lineClass () {
        return `line-type-${this.computeLineType} kw-${this.computeLineColor}-border-color`
      }
    },
    methods: {
      setFieldByParentField () {
        let parent = this.$parent
        this.timePosition = parent.timePosition
        this.hideLine = parent.hideLine
        this.computeDotType = this.dotType || parent.dotType
        this.computeDotColor = this.dotColor || parent.dotColor
        this.computeDotSize = this.dotSize || parent.dotSize
        this.computeLineType = this.lineType || parent.lineType
        this.computeLineColor = this.lineColor || parent.lineColor
      },
      setParentStyles () {
        let parent = this.$parent

        if (parent.timePosition === 'right') {
          this.timeStyle.right.display = this.$slots.time ? 'block' : 'none'
        }

        if (parent.timePosition === 'left') {
          this.$on('checkHasLeftTime', (hasLeftTime) => {
            this.timeStyle.left.display = hasLeftTime ? 'block' : 'none'
          })
        }
      }
    },
    mounted () {
      this.setFieldByParentField()
      this.setParentStyles()
    }
  }
</script>
