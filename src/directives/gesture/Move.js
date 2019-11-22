import { Gesture } from './Gesture'

class Move extends Gesture {
  isSingleFigure = true
  startPoint = {}
  currentPoint = {}

  constructor (el, handler) {
    super(el, 'move', handler)
  }

  handleTouchStart (event) {
    this.isSingleFigure = event.touches.length === 1
    if (!this.isSingleFigure) return

    const { pageX, pageY } = event.touches[0]
    this.startPoint = {
      x: pageX,
      y: pageY
    }
  }

  handleTouchMove (event) {
    if (!this.isSingleFigure) return
    const { pageX, pageY } = event.touches[0]
    this.currentPoint = {
      x: pageX,
      y: pageY
    }

    const offsetX = pageX - this.startPoint.x
    const offsetY = pageY - this.startPoint.y

    let direction = ''
    if (Math.abs(pageX - this.startPoint.x) > Math.abs(pageY - this.startPoint.y)) { // 左右移动
      direction = pageX < this.startPoint.x ? 'left' : 'right'
    } else {
      direction = pageY < this.startPoint.y ? 'up' : 'down'
    }

    this.dispatchEvent({
      startPoint: this.startPoint,
      currentPoint: this.currentPoint,
      offsetX,
      offsetY,
      direction
    })
  }

  handleTouchEnd () {
    if (!this.isSingleFigure) return
  }
}

export default Move