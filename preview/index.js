import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block'

import './assets/styles/index.css'

/*开发环境全量测试*/
import KiwiUI from '../src/index.js'
Vue.use(KiwiUI)

Vue.component(demoBlock.name, demoBlock)
new Vue({
  el: '#preview',
  router,
  render: h => h(App)
})