import { Gesture, THRESHOLD } from './Gesture'

class Tap extends Gesture {
  startTime = null
  startX = 0
  startY = 0
  currentX = 0
  currentY = 0
  isSingleFigure = true
  singleTapTimeout = null

  previousTouchTime = 0
  constructor (el, handler) {
    super(el, 'singleTap', handler)
  }

  handleTouchStart (event) {
    this.isSingleFigure = event.touches.length === 1

    if (!this.isSingleFigure) return

    this.startTime = Date.now()
    this.startX = event.touches[0].clientX
    this.startY = event.touches[0].clientY

    if (this.previousTouchTime && (this.startTime - this.previousTouchTime < 300)) {
      this.isDoubleTap = true
      window.clearTimeout(this.singleTapTimeout)
    }
    this.previousTouchTime = this.startTime
  }
  handleTouchEnd (event) {
    if (!this.isSingleFigure) return

    const { clientX, clientY } = event.changedTouches[0]
    this.currentX = clientX
    this.currentY = clientY

    if (this.currentX && Math.abs(this.currentX - this.startX) > 10 ||
      this.currentY && Math.abs(this.currentY - this.startY) > 10) {
      return
    }

    const currentTime = Date.now()

    if (currentTime - this.startTime >= THRESHOLD.HOLD) {
      return
    }

    this.singleTapTimeout = window.setTimeout(() => {
      this.dispatchEvent()
    }, 300)

    if (this.isDoubleTap) {
      window.clearTimeout(this.singleTapTimeout)
      this.isDoubleTap = false
    }
  }
}

export default Tap