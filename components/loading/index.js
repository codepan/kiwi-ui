import Vue from 'vue'
import LoadingComponent from './Loading'
import defaultOptions from './default-options'
import { type as typeUtil } from '~src/utils'

const Loading = Vue.extend(LoadingComponent)
let loading

// 实现Loading的关闭方法
Loading.prototype.close = () => {
  this.close()
}

Loading.prototype._setOptions = options => {
  let userOptions = null
  if (typeUtil.isString(options) || typeUtil.isNumber(options)) {
    userOptions = {
      text: options
    }
  }

  if (typeUtil.isObject(options)) {
    let { spinner } = options

    if (spinner) {
      if (typeUtil.isString(spinner)) {
        userOptions = {
          ...options,
          spinner: {
            ...defaultOptions.spinner,
            type: spinner,
          }
        }
      }

      if (typeUtil.isObject(spinner)) {
        userOptions = {
          ...options,
          spinner: {...defaultOptions.spinner, ...spinner}
        }
      }
    } else {
      userOptions = {
        ...options
      }
    }
  }

  options = {...defaultOptions, ...userOptions}

  Object.entries(options).forEach(([key, value]) => {
    loading[key] = value
  })
}

export default {
  install (Vue) {
    const $loading = options => {
      this.open(options)
      return loading
    }
    /*
    在Vue原型实现Loading的DOM挂载，以及功能实现
    用户可以在Vue实例（Vue单文件就是一个Vue实例）通过this.$loading来访问以下内容
     */
    Vue.prototype.$loading = $loading
  },
  open (options) {
    if (!loading) {
      loading = new Loading({
        el: document.createElement('div')
      })
    }

    loading._setOptions(options)
    // 将Loading的DOM挂载到body上
    document.body.appendChild(loading.$el)
  },
  close () {
    loading && loading.close() && (loading = null)
  }
}
