# Loading (加载指示器)
##### 动态插入dom，函数式调用
###### 调用方便
---
## 示例
### 基本用法
Loading组件被注册到Vue实例上，$loading()方法可以显示一个Loading，同时该方法返回Loading实例，该实例具有一个close()方法，调用其可以关闭当前显示的Loading
```html
<template>
  <kw-button @click="openLoading">基础loading</kw-button>
</template>
<script>
  export default {
    methods: {
      openLoading () {
        let loading = this.$loading()
        window.setTimeout(() => {
          loading.close()
        }, 1000)
      }
    }
  }
</script>
```
### 添加文字
$loading()方法接受一个字符串、数字或者一个对象（{text: ''}）来指定显示的文字，默认文字显示在图标下方
```html
<template>
  <kw-button @click="openLoading">含有文字的loading</kw-button>
</template>
<script>
  export default {
    methods: {
      openLoading () {
        let loading = this.$loading('加载中')
        /*
        loading = this.$loading({
          text: '加载中'
        })
        */
        window.setTimeout(() => {
          loading.close()
        }, 1000)
      }
    }
  }
</script>
```
### 自定义样式
options的className属性可以自定义className，然后对样式进行自定义
```html
<template>
  <kw-button @click="openLoading">自定义样式的loading</kw-button>
</template>
<script>
  export default {
    methods: {
      openLoading () {
        let loading = this.$loading({
          text: '加载中',
          className: 'my-loading'
        })
        window.setTimeout(() => {
          loading.close()
        }, 1000)
      }
    }
  }
</script>
<style>
  .my-loading{
    background: red;
  }
</style>
```
### 含有遮罩
options的mask属性设置为true，可以显示遮罩，默认为false，maskColor属性可以设置遮罩的颜色
```html
<template>
  <kw-button @click="openLoading">含有遮罩的loading</kw-button>
</template>
<script>
  export default {
    methods: {
      openLoading () {
        let loading = this.$loading({
          mask: true
        })
        window.setTimeout(() => {
          loading.close()
        }, 1000)
      }
    }
  }
</script>
```
### 指定加载器
spinner属性指定加载器，当传入字符串时，配置的为加载器的类型。也可以细粒度配置加载器，此时可以传入一个对象，有type、color、size三个属性，分别设置：类型、颜色、尺寸，详细的取值可以参见Spinner组件
```html
<template>
  <kw-button @click="openLoading1">指定加载器</kw-button>
  <kw-button @click="openLoading2">细粒度配置加载器</kw-button>
</template>
<script>
  export default {
    methods: {
      openLoading1 () {
        let loading = this.$loading({
          spinner: 'snake'
        })
        window.setTimeout(() => {
          loading.close()
        }, 1000)
      },
      openLoading2 () {
        let loading = this.$loading({
          spinner: {
            type: 'snake',
            color: "success",
            size: 'large'
          }
        })
        window.setTimeout(() => {
          loading.close()
        }, 1000)
      }
    }
  }
</script>
```

### 非Vue实例中使用
在Vue环境中我们可以使用this.$loading()来显示loading，在非Vue环境中可以单独导入Loading，Loading具有open()和close()两个静态方法用来显示loading和关闭loading
```html
<template>
  <kw-button @click="openLoading">打开loading</kw-button>
  <kw-button @click="closeLoading">关闭loading</kw-button>
</template>
<script>
import {Loading} from '@codepan/kiwi-ui'
  export default {
    methods: {
      openLoading () {
        Loading.open()
      },
      closeLoading () {
        Loading.close()
      }
    }
  }
</script>
```
## API
### Options
名称 |描述|类型|可选值|默认值
---|---|---|---|---
text|显示文字|string|-|-
className|自定义class|string|-|-
mask|是否显示遮罩|boolean|true,false|false
maskColor|遮罩颜色|string|Color组件颜色或合法的css属性值|-
spinner|加载器|string<br/>object{type: 'snow', color: 'stable', size: 'mini'}|-|{type: 'snow', color: 'stable', size: 'mini'}
### Methods(实例)
名称|描述|参数
---|---|---
close|关闭loading|-
### Methods(类)
名称|描述|参数
---|---|---
open|打开loading|-
close|关闭loading|-
