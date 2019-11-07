# Utils（工具类）
##### kiwi-ui 对外提供了常用的工具函数，供开发人员方便使用
###### 单独引入，不包含在主js文件中
---
## 示例
### 全局全部引入
可以全局引入，然后挂载到Vue实例上面
```js
import Vue from 'vue'
import utils from '@codepan/kiwi-ui/lib/utils'
Vue.prototype.$utils = utils
```
```js
export default {
  methods: {
    validateEmail (email) {
      return this.$utils.reg.isEmail(email)
    }
  }
}
```
### 按需引入
工具类包含了其他众多常用工具，当然使用者也可以分别引入想使用到的工具类，提供的工具有：
* date
* color
* reg 
* ...

按需引入也很简单
```js
import regUtil from '@codepan/kiwi-ui/lib/utils/reg'
export default {
  methods: {
    validateEmail (email) {
      return regUtil.isEmail(email)
    }
  }
}
```
## API
### color
方法|描述|参数|返回值
---|-----|-----|----
has(color:String)|判断组件中是否含有该颜色值|Color组件内置的颜色字符串|boolean，是否含有该颜色
get(color:String)|获取Color组件内置的颜色值|Color组件内置的颜色字符串|string，颜色的结果值
### date
方法|描述|参数|返回值
---|-----|-----|----
format(date:String/Number/Date, pattern:String)|格式化日期|date参数为日期；pattern参数为格式化的表达式，可以不传，默认为'yyyy-MM-dd hh:mm:ss'|string，格式化后的日期字符传
### reg
方法|描述|参数|返回值
---|-----|-----|----
isEmail(email:String)|判断是否为邮箱|email为必传参数|boolean，如果为邮箱则返回true，否则返回false
