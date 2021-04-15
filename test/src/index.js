import Vue from 'vue'
import App from './App'

/*
开发环境全量测试
import KiwiUI from '../src/index.js'
*/

/* 开发环境按需测试 */
import Tabs from '../../components/tabs'
import Tab from '../../components/tab'
import Button from '../../components/button'
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Button)

/*
构建包全量测试
import KiwiUI from '../lib'
import '../lib/theme-default/index.css'
*/

// 构建包按需测试

/* npm包全量测试 */
// import KiwiUI from '@codepan/kiwi-ui'
// import '@codepan/kiwi-ui/lib/theme-default/index.css'

// Vue.use(KiwiUI)

// npm包按需测试
// import { Button } from '@codepan/kiwi-ui'
// Vue.use(Button)
new Vue({
  el: '#app',
  render: h => h(App)
})