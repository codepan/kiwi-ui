import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block'

import './assets/styles/index.css'

/*开发环境全量测试*/
import KiwiUI from '../src/index.js'
Vue.use(KiwiUI)
/*
开发环境按需测试
import List from '../components/list'
import Item from '../components/item'
Vue.use(List)
Vue.use(Item)
*/

/*构建包全量测试
import KiwiUI from '../lib'
import '../lib/theme-default/index.css'
*/

// 构建包按需测试

Vue.component(demoBlock.name, demoBlock)

new Vue({
  el: '#preview',
  router,
  render: h => h(App)
})