import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block'

import './assets/styles/index.css'

// import KiwiUI from '../src/index.js'

// import KiwiUI from '../lib'
// import '../lib/theme-default/index.css'

import List from '../components/list'
import Item from '../components/item'
// Vue.use(KiwiUI)
Vue.use(List)
Vue.use(Item)
Vue.component(demoBlock.name, demoBlock)

new Vue({
  el: '#preview',
  router,
  render: h => h(App)
})