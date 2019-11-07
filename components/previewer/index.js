import Previewer from './Previewer'
import { type as typeUtil } from '~src/utils'
let previewer = null

Previewer.install = Vue => {
  Vue.component(Previewer.name, Previewer)

  const PreviewerClass = Vue.extend(Previewer)

  if (!previewer) {
    previewer = new PreviewerClass().$mount(document.createElement('div'))
  }

  const defaultOptions = {
    value: true,
    images: [],
    index: 0,
    indicator: true,
    indicatorPosition: 'bottom',
    closable: true,
    closeIcon: false,
    onClose: null,
    onChange: null
  }
  Vue.prototype.$previewer = options => {
    if (typeUtil.isArray(options)) {
      options = {
        images: options
      }
    }

    Object.assign(previewer, defaultOptions, options)

    document.body.appendChild(previewer.$el)

    previewer.$on('change', index => {
      previewer.onChange && previewer.onChange(index)
    })

    previewer.$on('close', () => previewer.onClose && previewer.onClose())

    previewer.$on('input', visible => {
      previewer.value = visible
    })
    
    return previewer
  }
}
export default Previewer