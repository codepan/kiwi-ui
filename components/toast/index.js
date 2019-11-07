import Vue from 'vue'
import ToastComponent from './Toast'
import defaultOptions from './default-options'
import { type as typeUtil } from '~src/utils'
const Toast = Vue.extend(ToastComponent)

Toast.prototype.setOptions = function (options = {}) {
  if (!options) return

  let { message, type, position, duration } = defaultOptions

  if (typeUtil.isObject(options)) {
    message = options.message || message
    type = options.type || type
    position = options.position || position
    duration = options.duration || (options.duration === -1 ? -1 : duration)
  } else {
    message = options
  }

  this.message = message
  this.type = type
  this.position = position
  this.duration = duration
}

let toast
export default {
  install (Vue) {
    // 实现Toast的关闭方法
    Toast.prototype.close = () => {
      this.close()
    }

    const $toast = options => {
      this.open(options)
      return toast
    }

    $toast.success = options => {
      if (typeUtil.isString(options)) {
        options = {message: options}
      }
      return $toast({...options, type: 'success'})
    }

    $toast.warning = options => {
      if (typeUtil.isString(options)) {
        options = {message: options}
      }
      return $toast({...options, type: 'warning'})
    }

    $toast.error = options => {
      if (typeUtil.isString(options)) {
        options = {message: options}
      }
      return $toast({...options, type: 'error'})
    }
    /*
    在Vue原型实现Toast的DOM挂载，以及功能实现
    用户可以在Vue实例（Vue单文件就是一个Vue实例）通过this.$toast来访问以下内容
     */
    Vue.prototype.$toast = $toast
  },
  open (options) {
    // Toast实例挂载到刚创建的div
    if (!toast) {
      toast = new Toast({
        el: document.createElement('div')
      })
    }

    toast.setOptions(options)

    // 将toast的DOM挂载到body上
    document.body.appendChild(toast.$el)

    // 自动关闭功能的实现
    let timeout = window.setTimeout(() => {
      this.close()
    }, toast.duration)

    toast.duration === -1 && window.clearTimeout(timeout)
  },
  close () {
    if (toast) {
      toast.visible = false
      window.setTimeout(() => {
        toast.$el.remove()
        toast = null
      }, 200)
    }
  }
}
