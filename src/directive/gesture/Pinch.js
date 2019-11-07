import { Gesture, THRESHOLD } from './Gesture'

class Pinch extends Gesture {
  previousPinchScale = 1
  startTouchDistance = 0
  startTouches= []
  constructor (el, handler) {
    super(el, 'pinch', handler)
  }

  handleTouchStart (event) {
    if (event.touches.length <= 1) return

    const [ point1, point2 ] = event.touches
    this.startTouches = event.touches
    const xLen = Math.abs(point2.pageX - point1.pageX)
    const yLen = Math.abs(point2.pageY - point1.pageY)

    this.startTouchDistance = this._getDistance(xLen, yLen)
  }

  handleTouchMove (event) {
    if (event.touches.length <= 1) return

    const [ point1, point2 ] = event.touches

    const xLen = Math.abs(point2.pageX - point1.pageX)
    const yLen = Math.abs(point2.pageY - point1.pageY)

    const currentTouchDistance = this._getDistance(xLen, yLen)

    if (this.startTouchDistance) {
      const pinchScale = currentTouchDistance / this.startTouchDistance

      this.dispatchEvent({
        scale: pinchScale - this.previousPinchScale,
        origin: {
          x: (this.startTouches[0].pageX + this.startTouches[1].pageX) / 2,
          y: (this.startTouches[0].pageY + this.startTouches[1].pageY) / 2,
        }
      })
      this.previousPinchScale = pinchScale
    }
  }

  handleTouchEnd () {
    this.previousPinchScale = 1
  }
  
  _getDistance (xLen, yLen) {
    return Math.sqrt(xLen * xLen + yLen * yLen)
  }
}

export default Pinch