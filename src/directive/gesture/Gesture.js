class Gesture {
  el = null
  customEvent = null
  touchEvent = null
  extra = null
  constructor (el, eventName, eventHandler) {
    this.customEvent = new Event(eventName)
    this.el = el
    el.addEventListener(eventName, event => {
      const { touches, targetTouches, changedTouches } = this.touchEvent
      eventHandler(Object.assign(event, {
        touches,
        targetTouches,
        changedTouches,
        extra: this.extra
      }))
    })

    this.bindEvent(el)
  }
  bindEvent (el) {
    el.addEventListener('touchstart', event => {
      this.touchEvent = event
      this.handleTouchStart && this.handleTouchStart(event)
    })

    el.addEventListener('touchmove', event => {
      this.touchEvent = event
      this.handleTouchMove && this.handleTouchMove(event)
    })

    el.addEventListener('touchend', event => {
      this.touchEvent = event
      this.handleTouchEnd && this.handleTouchEnd(event)
    })
  }

  dispatchEvent (extra) {
    this.extra = extra
    this.el.dispatchEvent(this.customEvent)
  }
}


const THRESHOLD = {
  HOLD: 800,
  DOUBLE_TAP: 300,
  TAP: 500
}

export {Gesture, THRESHOLD}