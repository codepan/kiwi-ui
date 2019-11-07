import { Gesture, THRESHOLD } from './Gesture'

class Tap extends Gesture {
  startTime = null
  startX = 0
  startY = 0
  currentX = 0
  currentY = 0
  isSingleFigure = true
  constructor (el, handler) {
    super(el, 'tap', handler)
  }

  handleTouchStart (event) {
    this.isSingleFigure = event.touches.length === 1
    if (!this.isSingleFigure) return

    this.startTime = Date.now()
    this.startX = event.touches[0].pageX
    this.startY = event.touches[0].pageY
  }

  handleTouchMove (event) {
    if (!this.isSingleFigure) return
    const { pageX, pageY } = event.touches[0]
    this.currentX = pageX
    this.currentY = pageY
  }

  handleTouchEnd () {
    if (!this.isSingleFigure) return this.reset()

    if (this.currentX && Math.abs(this.currentX - this.startX) > 10 ||
      this.currentY && Math.abs(this.currentY - this.startY) > 10) {
      return this.reset()
    }

    const currentTime = Date.now()

    if (currentTime - this.startTime < THRESHOLD.TAP) {
      this.dispatchEvent()
      this.reset()
    }
  }
  
  reset () {
    this.startTime = null
    this.startX = 0
    this.startY = 0
    this.currentX = 0
    this.currentY = 0
    this.isSingleFigure = true
  }
}

export default Tap