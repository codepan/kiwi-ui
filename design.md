# 前期设计
* 能够自由方便地进行样式覆盖
* 皮肤方面：内置多套主题、具有换肤功能、具有皮肤自定义功能
* 组件同时支持全局引入和按需引入
* 文档和示例应该采用markdown来编写（因为markdown写起来爽呀）


# 项目架构
kiwi-ui
  * build --- webpack配置文件
    * webpack.config.js
  * components --- 所有组件
    * button
      * Button.vue
      * index.js
    * badge
      * Badge.vue
      * index.js
  * examples --- 示例和文档
    * index.js --- 文档入口文件
    * App.vue --- 根组件
    * index.html
    * router
      * index.js --- vue-router路由配置
    * components --- 编写文档时使用到的一些组件
    * docs --- 存放每个组件的文档，
  * src --- 源码目录，包括样式、工具类
    * index.js --- 全部组件的出口文件
  * .eslintrc.yaml --- eslint配置文件
  * README.md
  * package.json


# 搭建步骤
```
mkdir kiwi-ui
cd kiwi-ui
yarn init -y
yarn add webpack webpack-cli webpack-dev-server --dev
yarn add eslint-loader eslint babel-eslint --dev
yarn add vue vue-router vue-loader vue-template-compiler --dev
yarn add sass-loader node-sass --dev
yarn add html-webpack-plugin --dev
touch .eslintrc.yaml .gitignore README.md
```
# 实现组件库说明文档
在写具体的组件之前，我们首先要做的不是编写组件，而是应该先有配套说明文档，这样使者用起来才更方便，不然组件写完了，用户根本不知道如何使用。

参考业界大牛们的说明文档，发现，大多数都采用markdown技术来实现的。这是因为markdown是公认的好用，所以我也打算使用markdown来实现。

我们需要安装一些相关的依赖
```shell
yarn add vue-markdown-loader --dev
```
在webpack配置文件中，配置对.md文件的解析，让loader帮助我们处理成.vue文件
```js
{
  test: /\.md$/,
  use: [
    'vue-loader',
    {
      loader: 'vue-markdown-loader/lib/markdown-compiler',
      options: {
        raw: true
      }
    }
  ]
}
```

examples目录其实就是一个普通的vue项目，开发套路和vue项目是一样的，不同之处是：只不过会在该目录下多一个docs目录，这个目录中存放着每个组件对应的文档，并且文档都是markdown格式，仅此而已。

下面让我们在examples/docs下创建一个test.md文件
```
<kw-button>按钮</kw-button>

\`\`\`html
<kw-button>按钮</kw-button>
\`\`\`

```

在examples/router/index.js文件中写入：
```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
   path: '/test',
   name: 'test',
   component: () => import('../docs/test.md')
  }
]

export default new VueRouter({
  routes
})
```

在examples/index.js文件中写入：
```js
import Vue from 'vue'
import App from './App.vue'

import router from './router'

import Button from '../components/button'
Vue.use(Button)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
```
# 图标的实现
图标不采用图片，不采用icon-font，而是采用svg实现

1. 首先安装svg-sprite-loader
这个loader可以将项目中的所有的svg生成一张大的雪碧图
```shell
yarn add svg-sprite-loader --dev
```
2. 在webpack.base.config.js中手动添加
```js
{
  test: /\.(jpe?g|png|gif|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 10000
    }
  },
  exclude: path.resolve(process.cwd(), 'src/icons')
},
{
  test: /\.svg$/,
  use: {
    loader: 'svg-sprite-loader',
    options: {
      symbolId: 'kw-icon-[name]'
    }
  },
  include: path.resolve(process.cwd(), 'src/icons')
}
```
3. src目录下创建icons目录

* src/icons/svg 目录存放所有的svg文件
* src/icons/index.js 文件用于批量导入svg目录中的所有svg文件

index.js文件内容如下：
```js
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
```

4. 入口文件中导入src/icons/index.js文件
src/index.js入口文件中导入：
```js
import './icons'
```

5. 编写Icon组件
在components目录下创建icon目录，在icon目录中创建两个文件

components/icon/Icon.vue

```html
<template>
  <svg class="kw-icon-wrapper">
    <use :xlink:href="iconHref" class="kw-icon"/>
  </svg>
</template>

<script>
  export default {
    name: 'kwIcon',
    props: {
      icon: {
        type: [String, Object]
      }
    },
    computed: {
      iconHref () {
        if (this.icon) {
          let icon = this.icon
          if (typeof this.icon === 'object') {
            Object.keys(this.icon).forEach(key => {
              if (this.icon[key]) {
                icon = key
              }
            })
          }
          return `#kw-icon-${icon}`
        }
        return ''
      }
    }
  }
</script>

<style lang="scss">
  .kw-icon-wrapper{
    .kw-icon{
      fill: red;
    }
  }
</style>
```
6. 使用
```html
<kw-icon icon="close"></kw-icon>
```

# 打包
## 全量打包
* 编写全量入口文件：src/index.js，在该文件中引入所有的组件，编写install方法，方法中，依次将组件通过Vue.component的形式注册为组件；依次将插件通过Vue.use的形式注册为插件
* 将每个组件的样式通过插件提取出来，打包到一个css文件中

## 单独打包
* 为每个组件编写入口文件：components/**/index.js，在该文件中导入对应的组件，然后为每个组件添加一个install方法，方法中使用Vue.component的形式注册为组件。目的是将来使用时既可以使用Vue.component来使用，也可以使用Vue.use的形式来使用
* 采用多入口打包的形式，单独打包，同时每个组件的样式也通过插件一一提取出来，打包成独立的css文件

