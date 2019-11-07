import Tap from './Tap'
import DoubleTap from './DoubleTap'
import SingleTap from './SingleTap'
import Pinch from './Pinch'
import Move from './Move'
import Swipe from './Swipe'
import Hold from './Hold'
import Drag from './Drag'
export default {
  install (Vue) {
    Vue.directive('gesture', {
      bind (el, { arg, value }) {
        switch(arg) {
          case 'tap':
            new Tap(el, value)
            break
          case 'doubleTap':
            new DoubleTap(el, value)
            break
          case 'singleTap':
            new SingleTap(el, value)
            break
          case 'pinch':
            new Pinch(el, value)
            break
          case 'move':
            new Move(el, value)
            break
          case 'swipe':
            new Swipe(el, value)
            break
          case 'hold':
            new Hold(el, value)
            break
          case 'drag':
            new Drag(el, value)
            break
        }
      }
    })
  }
}