<template>
  <div class="kw-timeline" :class="{'time-left': timePosition === 'left'}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'kwTimeline',
    props: {
      timePosition: {
        type: String,
        default: 'right'
      },
      hideLine: {
        type: Boolean,
        default: false
      },
      dotType: {
        type: String,
        default: 'outline'
      },
      dotColor: {
        type: String,
        default: 'primary'
      },
      dotSize: {
        type: String,
        default: 'default'
      },
      lineType: {
        type: String,
        default: 'solid'
      },
      lineColor: {
        type: String,
        default: 'stable'
      }
    },
    data () {
      return {
      }
    },
    methods: {
      computeComponentStyles () {
        let $children = this.$children

        let hasLeftTime = false
        for (let i = 0, len = $children.length; i < len; i++) {
          if ($children[i].$slots.time) {
            hasLeftTime = true
            break
          }
        }

        let maxDotWidth
        $children.forEach(children => {
          if (!maxDotWidth || children.$refs.dotAndLineRef.getBoundingClientRect().width > maxDotWidth) {
            maxDotWidth = children.$refs.dotAndLineRef.getBoundingClientRect().width
          }
          children.$emit('checkHasLeftTime', hasLeftTime)
        })

        $children.forEach(children => {
          // children.$refs.dotAndLineRef.style.width = maxDotWidth + 'px'
        })
      }
    },
    mounted () {
      this.computeComponentStyles()
    }
  }
</script>

<style lang="scss">
  .kw-timeline{
    position: relative;
    font-family: '微软雅黑';
    &.time-left{
      .kw-timeline-item{
        .kw-timeline-item-time{
          width: 45px;
          margin-right: 10px;
          font-size: 13px;
          color:#b7b7b7;
          font-family: '微软雅黑';
          text-align: right;
        }
        .kw-timeline-item-content{
          flex: 1;
          margin:0 0 15px 10px;
          .kw-timeline-item-content-body{
            font-size: 12px;
            color:#666;
          }
          .kw-timeline-item-content-footer{
            margin-top: 5px;
            font-size: 12px;
            color:#999;
          }
        }
      }
    }
    .kw-timeline-item{
      display: flex;
      line-height: 1;
      &:last-child{
        .kw-timeline-item-dot-and-line{
          .kw-timeline-item-line{
            display: none;
          }
        }
        .kw-timeline-item-main{
          margin-bottom:0;
        }
      }
      .kw-timeline-item-dot-and-line{
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        min-width: 10px;
        max-width: 20px;
        overflow: hidden;
        .kw-timeline-item-dot{
          display: flex;
          justify-content: center;
          align-items: flex-start;
          .dot-entry{
            box-sizing: border-box;
            border-radius: 50%;
            width: 12px;
            height: 12px;
            &.dot-size-small{
              width: 9px;
              height: 9px;
            }
            &.dot-size-large{
              width: 14px;
              height: 14px;
            }
            &.dot-type-outline{
              border-style: solid;
            }
            &.dot-type-dotted{
              border-style: dotted;
            }
            &.dot-type-outline, &.dot-type-dotted{
              background: $color-light;
              border-width: 1px;
            }
            &.dot-type-fill{
              border: none;
            }
          }
        }
        .kw-timeline-item-line{
          flex: 1;
          display: flex;
          justify-content: center;
          width: 100%;
          .line-entry{
            border-width: 1px;
            transform: scaleX(0.5);
            &.line-type-dotted{
              border-style: dotted;
            }
            &.line-type-solid{
              border-style: solid;
            }
          }
        }
      }
      .kw-timeline-item-main{
        margin: 0 0 20px 10px;
        .kw-timeline-item-time{
          margin-bottom: 10px;
          font-size: 14px;
          color:#333;
        }
        .kw-timeline-item-content{
          flex: 1;
          .kw-timeline-item-content-body{
            font-size: 12px;
            color:#666;
          }
          .kw-timeline-item-content-footer{
            margin-top: 5px;
            font-size: 14px;
            color:#999;
          }
        }
      }
    }
  }
</style>
