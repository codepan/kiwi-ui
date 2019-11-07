<template>
  <div class="kw-previewer" v-if="visible" v-gesture:singleTap="handleSingleTap">
    <ul
      class="kw-previewer-list"
      v-gesture:move="handleMove"
      v-gesture:swipe="handleSwipe"
      @touchend="handleTouchEnd"
      :style="[{width: listWidth}, listStyle]">
      <kw-previewer-item
        v-for="(image, index) in images"
        :key="index"
        :image="image"
        @allow-move="setAllowMove"
        ref="imageRef"></kw-previewer-item>
    </ul>
    <div class="kw-previewer-indicator" :class="indicatorPositionClass" v-if="indicator">
      <slot name="indicator" :index="this.currentIndex" :length="this.images.length">
        <span class="indicator-current">{{currentIndex + 1}}</span>
        <span class="indicator-divider">/</span>
        <span class="indicator-count">{{images.length}}</span>
      </slot>
    </div>
    <kw-icon v-if="closeIcon" class="kw-previewer-close" icon="close" size="large" color="light" @click="close"></kw-icon>
</div>
</template>
<script>
import PreviewerItem from './PreviewerItem'
export default {
  name: 'kw-previewer',
  data () {
    return {
      visible: this.value,
      currentIndex: this.index,
      translateX: 0,
      prevTranslateX: 0,
      currentOffset: 0,
      listStyle: {},
      allowMove: true
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    images: {
      type: Array,
      default: () => []
    },
    indicator: {
      type: Boolean,
      default: true
    },
    indicatorPosition: {
      type: String,
      default: 'bottom',
      validator: position => ['top', 'bottom'].includes(position)
    },
    index: {
      type: Number,
      default: 0
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    [PreviewerItem.name]: PreviewerItem
  },
  watch: {
    visible (val) {
      this.$emit('input', val)
    },
    value: {
      handler (val) {
        if (val) {
          this.renderInitPosition()
        }
        this.visible = val
      },
      immediate: true
    }
  },
  computed: {
    listWidth () {
      return `${this.images.length * this.clientWidth}px`
    },
    clientWidth () {
      return document.documentElement.clientWidth
    },
    maxIndex () {
      return this.images.length - 1
    },
    indicatorPositionClass () {
      return `indicator-position-${this.indicatorPosition}`
    }
  },
  methods: {
    renderInitPosition () {
      this.currentIndex = this.index
      if (this.currentIndex < 0 || this.currentIndex > this.images.length - 1) {
          throw Error(`index被设置为${this.currentIndex}，已超出[0, images.length - 1]范围`)
        }

      if (this.currentIndex !== 0) {
        this.translate(-this.currentIndex * this.clientWidth, 0)
        this.prevTranslateX = this.translateX
      }
    },
    handleMove (event) {
      if (!this.allowMove) {
        return
      }
      const { offsetX } = event.extra
      this.currentOffset = offsetX
      if (this.translateX >= 0) {
        this.translate(this.prevTranslateX + offsetX / 3)
        return
      }

      if (this.translateX <= -this.clientWidth * this.maxIndex) {
        this.translate(this.prevTranslateX + offsetX / 3)
        return
      }

      this.translate(this.prevTranslateX + offsetX)

    },
    handleSwipe (event) {
      if (!this.allowMove) {
        return
      }

      if (Math.abs(this.currentOffset) < 100) {
        return
      }

      const { direction } = event.extra
      if (direction === 'left' && this.currentIndex < this.maxIndex) {
        this.$refs.imageRef[this.currentIndex].reset()
        this.currentIndex += 1
        this.$emit('change', this.currentIndex)
      }

      if (direction === 'right' && this.currentIndex > 0) {
        this.$refs.imageRef[this.currentIndex].reset()
        this.currentIndex -= 1
        this.$emit('change', this.currentIndex)
      }

      this.translate(-this.currentIndex * this.clientWidth, .4, 'ease-out')
      this.prevTranslateX = this.translateX
    },
    handleTouchEnd () {
      if (!this.allowMove) {
        return
      }

      if (Math.abs(this.translateX - this.prevTranslateX) < 100) {
        this.translate(this.currentIndex * -this.clientWidth, .4, 'ease-out')
      }

      this.prevTranslateX = this.translateX
    },
    translate (translateX, duration, timing) {
      this.translateX = translateX

      let style = {
        transform: `translate3d(${this.translateX}px, 0, 0)`
      }

      if (duration || timing) {
        style.transition = `transform ${duration}s ${timing}`
      }
      
      this.listStyle = style
    },
    handleSingleTap () {
      if (!this.closable) {
        return
      }
      this.close()
    },
    close () {
      this.reset()
      this.visible = false
      this.$emit('close')
    },
    reset () {
      this.currentIndex = this.index
      this.prevTranslateX = this.translateX = 0
      this.translate(0, 0)
      this.setAllowMove(true)
    },
    setAllowMove (allowMove) {
      this.allowMove = allowMove
    }
  }
}
</script>
<style lang="scss">
.kw-previewer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background: #000;
  &-list {
    height: 100%;
    display: flex;
    .kw-previewer-item {
      flex: 1;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      &-image {

      }
    }
  }
  &-indicator {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    color: $color-light;
    .indicator-current {
      font-weight: bolder;
    }
    .indicator-divider {
      margin: 0 4px;
    }
    .indicator-count {

    }
    &.indicator-position-bottom {
      bottom: 20px;
    }
    &.indicator-position-top {
      top: 20px;
    }
  }
  &-close {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>