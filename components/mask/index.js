import MaskComponent from './Mask'
export default {
  install (Vue) {
    Vue.component(MaskComponent.name, MaskComponent)

    let Mask = Vue.extend(MaskComponent)
    let mask

    if (!this.$mask) {
      mask = new Mask().$mount(document.createElement('div'))
    }

    let $mask = options => {
      mask.open(options)
      return mask
    }

    Vue.prototype.$mask = $mask

    document.body.appendChild(mask.$el)
  }
}
