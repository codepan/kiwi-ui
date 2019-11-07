import generator from './generator'
let themes = {}

export default {
  add (name, configs) {
    themes[name] = configs
    return this
  },
  use (name) {
    let themeEle = document.querySelector('#kw-theme')
    if (!themeEle) {
      themeEle = document.createElement('style')
    }
    themeEle.innerHTML = generator(themes[name])
    document.body.appendChild(themeEle)
  }
}
