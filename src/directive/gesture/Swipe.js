import { Gesture } from './Gesture'

class Swipe extends Gesture {
  isSingleFigure = true
  startX = 0
  startY = 0

  constructor (el, handler) {
    super(el, 'swipe', handler)
  }

  handleTouchStart (event) {
    this.isSingleFigure = event.touches.length === 1
    if (!this.isSingleFigure) return

    const { pageX, pageY } = event.touches[0]
    this.startX = pageX
    this.startY = pageY
  }

  handleTouchMove () {
    if (!this.isSingleFigure) return
  }

  handleTouchEnd (event) {
    if (!this.isSingleFigure) return
    const { pageX, pageY } = event.changedTouches[0]

    let direction = ''

    if (Math.abs(pageX - this.startX) > Math.abs(pageY - this.startY)) { // 左右移动
      direction = pageX < this.startX ? 'left' : 'right'
    } else {
      direction = pageY < this.startY ? 'up' : 'down'
    }
    this.dispatchEvent({
      direction
    })
  }
}

export default Swipe