import { Gesture, THRESHOLD } from './Gesture'

class Hold extends Gesture {
  isSingleFigure = true
  holdTimeout = null


  constructor (el, handler) {
    super(el, 'hold', handler)
  }

  handleTouchStart (event) {
    event.preventDefault()
    this.isSingleFigure = event.touches.length === 1
    if (!this.isSingleFigure) return

    this.holdTimeout && window.clearTimeout(this.holdTimeout)

    this.holdTimeout = window.setTimeout(() => {
      this.dispatchEvent()
    }, THRESHOLD.HOLD)
  }

  handleTouchMove () {
    if (!this.isSingleFigure) return

    window.clearTimeout(this.holdTimeout)
  }

  handleTouchEnd () {
    if (!this.isSingleFigure) return
    window.clearTimeout(this.holdTimeout)
  }
}

export default Hold