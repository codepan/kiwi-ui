import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './generateRoutes'

Vue.use(VueRouter)

export default new VueRouter({
  routes
})