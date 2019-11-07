# Theme（主题）
##### kiwi-ui 支持使用js来定制和切换主题，目前默认只提供了default一套主题风格。
###### default主题风格采用primary作为主色，蓝色调
---
## 示例
### 切换主题
后面的版本会逐渐加入更多的主题进来
```js
import theme from '@codepan/kiwi-ui/lib/theme'
theme.use('default')
```
### 自定义主题
`add(name, configs)`方法用来添加新的主题

`use(name)`方法使用定义的主题

`add()`方法支持链式调用，`theme.add('xxx', {}).use('xxx")`
```js
import theme from '@codepan/kiwi-ui/lib/theme'
theme.add('myTheme1', {
  primary: 'green'
})
theme.add('myTheme2', {
  primary: 'red'
})

theme.use('myTheme1')
```
* name 主题名称
* configs 主题的相关配置
