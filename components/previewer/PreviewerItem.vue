<template>
  <li
    class="kw-previewer-item"
    v-gesture:doubleTap="handleDoubleTap"
    v-gesture:move="handleMove"
    v-gesture:pinch="handlePinch"
    @touchend="handleTouchEnd">
    <img :src="image" ref="imageRef" :style="[imageSizeStyle, dynamicStyle]" class="kw-previewer-item-image" @load="computedImageSize"/>
  </li>
</template>
<script>
import { gesture } from '~src/directives'
export default {
  name: 'kw-previewer-item',
  directives: {
    gesture
  },
  data () {
    return {
      imageSizeStyle: {},
      dynamicStyle: {},
      currentScale: 1,
      translateX: 0,
      translateY: 0,
      prevTranslateX: 0,
      prevTranslateY: 0,
      currentAction: '',
      isOriginal: true
    }
  },
  props: {
    image: {
      type: String,
      default: ''
    }
  },
  computed: {
    clientWidth () {
      return window.innerWidth
    },
    clientHeight () {
      return window.innerHeight
    }
  },
  methods: {
    getCriticalX () {
      const {  width } = this.$refs.imageRef.getBoundingClientRect()
      return (width - this.clientWidth) / 2
    },
    getCriticalY () {
      const {  height } = this.$refs.imageRef.getBoundingClientRect()
      return (height - this.clientHeight) / 2
    },
    getImageSize () {
      const {  width, height } = this.$refs.imageRef.getBoundingClientRect()
      return {
        width,
        height
      }
    },
    computedImageSize (event) {
      const { width, height } = event.target

      if (width / height >= 1) {
        this.imageSizeStyle = {
          width: '100%',
          height: 'auto'
        }
      } else {
        this.imageSizeStyle = {
          width: 'auto',
          height: '100%'
        }
      }
    },
    handleDoubleTap (event) {
      this.currentAction = 'doubleTap'
      const currentScale = this.currentScale = this.currentScale === 1 ? 2 : 1

      if (currentScale === 1) {
        this.transform(0, 0, currentScale, true)
        this.isOriginal = true
        this.$emit('allow-move', true)
      } else {
        this.isOriginal = false
        this.$emit('allow-move', false)
        const { origin } = event.extra

        const translateX = this.clientWidth / 2 - origin.x
        const translateY = this.clientHeight / 2 - origin.y

        this.transform(translateX, translateY, currentScale, true)
        this.prevTranslateX = translateX
        this.prevTranslateY = translateY
      }
    },
    transform (translateX, translateY, scale, hasTransition) {
      let dynamicStyle = {
        transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`
      }

      if (hasTransition) {
        dynamicStyle.transition = `all .2s linear`
      }

      this.dynamicStyle = dynamicStyle

      this.translateX = translateX
      this.translateY = translateY
      this.currentScale = scale
    },
    handleMove (event) {
      if (this.isOriginal) {
        return
      }
      this.currentAction = 'move'
      const { offsetX, offsetY, direction } = event.extra

      const maxX = this.getCriticalX()
      const maxY = this.getCriticalY()

      let translateX = this.prevTranslateX + offsetX
      let translateY = this.prevTranslateY + offsetY


      if (translateX < -this.getCriticalX()) {
        this.$emit('allow-move', true)
        return
      }

      if (translateX > this.getCriticalX()) {
        this.$emit('allow-move', true)
        return
      }

      if (direction === 'left' || direction === 'right') {
        if (this.getImageSize().height < this.clientHeight) {
          translateY = this.prevTranslateY
        }
      }

      this.transform(translateX, translateY, this.currentScale)
    },
    handleTouchEnd () {
      if (this.isOriginal) {
        return
      }
      if (this.currentAction === 'doubleTap') {
        return
      }

      let translateX = this.translateX
      let translateY = this.translateY
      let currentScale = this.currentScale
      let hasTransition = false
      if (this.currentAction === 'move') {
        if (translateX > this.getCriticalX()) {
          translateX = this.getCriticalX()
        }

        if (translateX < -this.getCriticalX()) {
          this.$emit('allow-move', true)
          translateX = -this.getCriticalX()
        }


        if (translateY > this.getCriticalY()) {
          translateY = this.getCriticalY()
        }

        if (translateY < -this.getCriticalY()) {
          translateY = -this.getCriticalY()
        }

        const { width, height } = this.getImageSize()

        if (width < this.clientWidth) {
          translateX = 0
        }

        if (height < this.clientHeight) {
          translateY = 0
        }
        

        this.transform(translateX, translateY, this.currentScale)

        this.prevTranslateX = translateX
        this.prevTranslateY = translateY
      }

      if (this.currentAction === 'pinch') {
        if (this.currentScale >= 6) {
          currentScale = 6
        }

        if (this.currentScale <= 1) {
          currentScale = 1
        }

        hasTransition = true
      }

      this.transform(translateX, translateY, currentScale, hasTransition)
    },
    handlePinch (event) {
      this.$emit('allow-move', false)
       const { scale } = event.extra

      this.isOriginal = false
      this.currentAction = 'pinch'

      let currentScale = this.currentScale

      if (currentScale > 6) {
        if (scale > 0) {
          currentScale += scale / 3
        } else {
          currentScale += scale
        }
      } else if (currentScale < 1) {
        currentScale += scale / 3
      } else {
        currentScale += scale
      }
      this.transform(this.translateX, this.translateY, currentScale)
    },
    reset () {
      this.transform(0, 0, 1)
      this.isOriginal = true
      this.currentAction = ''
      this.prevTranslateX = 0
      this.prevTranslateY = 0
    }
  }
}
</script>