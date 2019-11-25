import DialogComponent from './Dialog'
import defaultOptions from './default-options'
import { type as typeUtil } from '~src/utils'
import Mask from '../mask'
let Dialog
let dialog

let createInstance = () => {
  if (!dialog) {
    dialog = new Dialog().$mount(document.createElement('div'))
  }
  return dialog
}

export default {
  install (Vue) {
    Dialog = Vue.extend(DialogComponent)

    let $dialog = (options, title) => {
      if (typeUtil.isString(options)) {
        options = {
          message: options,
          title
        }
      }
      options = {...defaultOptions, ...options}

      let dialog = createInstance()
      dialog.setOptions(options)

      document.body.appendChild(dialog.$el)
      dialog.open()
      return new Promise((resolve, reject) => {
        dialog.confirmCallback = resolve
        dialog.cancelCallback = reject
      })
    }

    Dialog.prototype.setOptions = (options) => {
      for (let prop in options) {
        if (options.hasOwnProperty(prop)) {
          dialog[prop] = options[prop]
        }
      }
    }

    $dialog.alert = (message, title, options) => {
      if (typeUtil.isObject(title)) {
        options = title
        title = ''
      }
      return $dialog({
        ...options,
        type: 'alert',
        title,
        message
      })
    }

    $dialog.confirm = (message, title, options) => {
      if (typeUtil.isObject(title)) {
        options = title
        title = ''
      }
      return $dialog({
        ...options,
        type: 'confirm',
        title,
        message
      })
    }

    $dialog.prompt = (title = '请输入', options) => {
      if (typeUtil.isObject(title)) {
        options = title
        title = '请输入'
      }
      return $dialog({
        ...options,
        type: 'prompt',
        title
      })
    }

    Vue.use(Mask)
    Vue.prototype.$dialog = $dialog
  }
}
