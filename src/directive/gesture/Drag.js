import { Gesture, THRESHOLD } from './Gesture'

class Drag extends Gesture {
  isSingleFigure = true
  holdTimeout = null
  startTime = 0
  isHold = false
  constructor (el, handler) {
    super(el, 'drag', handler)
  }

  handleTouchStart (event) {
    event.preventDefault()
    this.isSingleFigure = event.touches.length === 1
    if (!this.isSingleFigure) return

    this.holdTimeout && window.clearTimeout(this.holdTimeout)

    this.startTime = Date.now()

    this.holdTimeout = window.setTimeout(() => {
      this.isHold = true
    }, THRESHOLD.HOLD)
  }

  handleTouchMove () {
    if (!this.isSingleFigure) return

    const currentTime = Date.now()
    if (currentTime - this.startTime < THRESHOLD.HOLD) {
      window.clearTimeout(this.holdTimeout)
    } else {
      if (this.isHold) {
        this.dispatchEvent()
      }
    }
  }

  handleTouchEnd () {
    if (!this.isSingleFigure) return
    window.clearTimeout(this.holdTimeout)
    this.startTime = 0
    this.holdTimeout = null
    this.isHold = false
  }
}

export default Drag