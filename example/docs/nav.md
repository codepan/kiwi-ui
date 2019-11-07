# Nav (导航栏)
##### 导航栏长固定在页面顶部
###### 可定义返回功能
---
## 示例
### 基本使用
可用属性与Header组件相同，不同之处在于左侧默认具有返回功能

其余功能参见Bar组件
```html
<template>
  <kw-nav :back="goBack">导航栏</kw-nav>
</template>
<script>
  export default {
    methods: {
      goBack (next) {
        this.$dialog.confirm('您确定要离开吗？', '提示', {
          confirmButtonText: '再想想',
          cancelButtonText: '去意已决'
        }).catch(() => {
          next()
        })
      }
    }
  }
</script>
```
# API
## Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
title|参见Bar组件
color|参见Bar组件
bg-color|参见Bar组件
height|参见Bar组件
fixed|参见Bar组件|boolean|true,false|true
top|参见Bar组件|number,string|可传入数值或合法的css属性值，默认单位为px|0
has-back|参见Bar组件|boolean|true,false|true
back-text|参见Bar组件|string|-|-
back|点击返回按钮时的处理函数，Function(next)|function|-|-
## Slots
名称|描述
---|---
-|标题
left|左边显示元素
right|右边显示元素
back|返回功能，仅当has-back为true时有效
