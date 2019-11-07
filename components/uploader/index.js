import Uploader from './Uploader'

let uploader = null

Uploader.install = Vue => {
  Vue.component(Uploader.name, Uploader)
  const UploadClass = Vue.extend(Uploader)

  if (!uploader) {
    uploader = new UploadClass().$mount(document.createElement('div'))
  }

  Vue.prototype.$uploader = {
    select (callback) {
      document.body.appendChild(uploader.$el)

      uploader.selectCallback = callback
      const $file = uploader.$refs.myFile
      $file.click()
    }
  }
}
export default Uploader
