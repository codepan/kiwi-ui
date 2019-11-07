import Vue from 'vue'
import App from './App.vue'

import router from './router'

import demoBlock from './components/demo-block.vue'

import 'highlight.js/styles/atom-one-light.css'
import './assets/styles/index.css'

Vue.component(demoBlock.name, demoBlock)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})