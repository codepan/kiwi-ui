
# 安装
```shell
# 使用yarn
yarn add @codepan/kiwi-ui

# 使用npm
npm i @codepan/kiwi-ui -S
```
# 快速开始
```js
import Vue from 'vue'

// 全部引入
import KiwiUI from '@codepan/kiwi-ui'
import '@codepan/kiwi-ui/lib/style.css'
Vue.use(KiwiUI)

// 按需引入
import { Button } from '@codepan/kiwi-ui'

//以插件形式
Vue.use(Button)
/* 
以组件形式
Vue.component(Button.name, Button)
*/
```
# 链接
* [官方文档](http://www.codepan.cc/kiwi-ui)
* [在线示例](http://www.codepan.cc/kiwi-ui/preview.html)
* [代码仓库](https://github.com/codepan/kiwi-ui)
