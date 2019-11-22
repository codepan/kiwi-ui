import { Gesture, THRESHOLD } from './Gesture'

class DoubleTap extends Gesture {
  startTime = null
  startX = 0
  startY = 0
  previousTouchPoint = null
  isSingleFigure = true
  constructor (el, handler) {
    super(el, 'doubleTap', handler)
  }

  handleTouchStart (event) {
    this.isSingleFigure = event.touches.length === 1

    if (!this.isSingleFigure) return


    this.startTime = Date.now()
    this.startX = event.touches[0].pageX
    this.startY = event.touches[0].pageY

    if (this.previousTouchPoint) {
      if( Math.abs(this.startX -this.previousTouchPoint.startX) < 10  &&
        Math.abs(this.startY - this.previousTouchPoint.startY) < 10 &&
        Math.abs(this.startTime - this.previousTouchTime) < THRESHOLD.DOUBLE_TAP) {
          this.dispatchEvent({
            origin: {
              x: this.startX,
              y: this.startY
            }
          })
      }
    }

    this.previousTouchTime = this.startTime
    this.previousTouchPoint = {
      startX: this.startX,
      startY: this.startY
    }
  }
}

export default DoubleTap