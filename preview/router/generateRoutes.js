import guideMenus from '~configs/nav-guide.config'
import compMenus from '~configs/nav-components.config'

import loadmore from '../examples/loadmore'
import fullpage from '../examples/fullpage'
import tabs from '../examples/tabs'
let createRoute = route => {
  if (route.redirect) {
    return {
      path: route.path,
      redirect: route.redirect
    }
  }
  return {
    path: route.path,
    name: route.name,
    component: () => import(/* webpackChunkName: 'preview/[request]/[request]' */ `../views/${route.name}`)
   }
}

let createGuideRoutes = () => {
  return guideMenus.map(menu => {
    if (menu.name === 'theme') {
      return createRoute(menu) 
    }
    return createRoute({ ...menu, redirect: { name: 'home' } })
  })
}

let createCompRoutes = () => {
  let routes = []
  compMenus.forEach(menu => {
    menu.children.forEach(child => {
      routes.push(createRoute(child))
    })
  })

  return routes
}

const homeRoute = createRoute({
  path: '/',
  name: 'home'
})

const loadmoreRoute = {
  name: 'example-loadmore',
  path: '/example-loadmore',
  component: loadmore
}

const fullpageRoute = {
  name: 'example-fullpage',
  path: '/example-fullpage',
  component: fullpage
}

const tabsRoute = {
  name: 'example-tabs',
  path: '/example-tabs',
  component: tabs
}

export default [homeRoute, loadmoreRoute, fullpageRoute, tabsRoute, ...createGuideRoutes(), ...createCompRoutes()]