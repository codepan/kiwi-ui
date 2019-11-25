# 快速上手
##### 介绍如何在vue项目中使用kiwi-ui
----
## 初始化vue项目（当然可以不使用vue-cli）
```
yarn global add vue-cli
vue init webpack projectName
```
## 安装组件库
```
yarn add @codepan/kiwi-ui
```
## 引入kiwi-ui

**全局引入**

适用于高度依赖kiwi-ui构建项目的需求，通过Vue插件的方式一次性全局注册所有组件，值得注意的是：***样式文件需要单独引入***
```js
import Vue from 'vue'
import KiwiUI from '@codepan/kiwi-ui'
import '@codepan/kiwi-ui/lib/theme-default/index.css'
import App from './App'

Vue.use(KiwiUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

**按需引入**

适用于个别组件使用kiwi-ui构建的项目，既可以采用插件形式注册，亦可采用组件形式注册

按需引入可以使用一个babel插件：`babel-plugin-component`来帮助我们快速引入所需的组件，当然你也完全可以不使用该插件，而是像下面这样写长长的路径
```js
import Button from '@codepan/kiwi-ui/lib/button' // 引入Button组件的逻辑代码，js文件
import '@codepan/kiwi-ui/lib/theme-default/button.css' // 引入Button组件的样式代码，css文件
```

极力不推荐上面的写法，下面讲解使用插件的方式按需引入

1. 安装插件
  
    首先，安装babel-plugin-component
    ```shell
    yarn add babel-plugin-component -D
    ```
2. 配置插件

    然后，在.babelrc修改代码如下：
    ```json
    {
      "presets": [["es2015", { "modules": false }]],
      "plugins": [
        [
          "component",
          {
            "libraryName": "@codepan/kiwi-ui",
            "styleLibrary": {
              "name": "theme-default",
              "base": false
            }
          }
        ]
      ]
    }
    ```
3. 按需引入

    最后，在需要引入组件的文件中，按照如下方式引入即可，以在main.js文件中引入为例：
    ```js
    import Vue from 'vue'
    import { Button } from '@codepan/kiwi-ui'
    import App from './App'

    Vue.use(Button) // 推荐这种方式，因为少写点代码，是不是理由很充分呢
    // Vue.component(Button.name, Button) // 这种也可以

    new Vue({
      el: '#app',
      render: h => h(App)
    })
    ```

