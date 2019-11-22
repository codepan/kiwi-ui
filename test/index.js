import Vue from 'vue'
import App from './App.vue'
// import KiwiUI from '@codepan/kiwi-ui'
// import '@codepan/kiwi-ui/lib/theme-default/index.css'
// Vue.use(KiwiUI)

// import { Button } from '@codepan/kiwi-ui'
// import theme from '@codepan/kiwi-ui/lib/theme'

import Button from '../lib/button'
import '../lib/theme-default/button.css'
import theme from '../lib/theme'

theme.add('my-theme', {
  primary: 'red'
}).use('my-theme')
Vue.use(Button)
new Vue({
  el: '#app',
  render: h => h(App)
})