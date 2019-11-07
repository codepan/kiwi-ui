import guideMenus from '../../configs/nav-guide.config'
import compMenus from '../../configs/nav-components.config'


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
    component: () => import(/* webpackChunkName: 'example/[request]/[request]' */ `../docs/${route.name}`)
   }
}

let createGuideRoutes = () => {
  return guideMenus.map(menu => {
    return createRoute(menu)
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

export default [...createGuideRoutes(), ...createCompRoutes(), createRoute({
  path: '/',
  redirect: '/introduction'
})]