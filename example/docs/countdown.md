# Countdown (倒计时)
##### 倒计时常用于商品促销秒杀等功能
###### 其他UI框架中很少有这个功能
---
## 示例
### 基本用法
通过end-time指定结束时间，该属性为必传属性。
```html
<template>
  <kw-countdown :end-time="endTime"></kw-countdown>
</template>
<script>
  export default {
    computed: {
      endTime () {
        let date = new Date()
        date.setDate(date.getDate() + 2)
        return date
      }
    }
  }
</script>
```
### 格式化结果值
当时间发生变化时，会触发change回调函数，参数默认为一个时分秒的数组。可以通过format属性来指定所希望的结果值，format取值只能为形如: 'hh时mm分ss秒'可以格式化的字符串
```html
<template>
  <kw-countdown :end-time="endTime" format="hh-mm-ss" @change="handleChange"></kw-countdown>
</template>
<script>
  export default {
    data () {
      return {
        time: ''
      }
    },
    computed: {
      endTime () {
        let date = new Date()
        date.setDate(date.getDate() + 2)
        return date
      }
    },
    methods: {
      handleChange (time) {
        this.time = time
      }
    }
  }
</script>
```
# API
## Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
end-time|结束时间, 可以传入时间戳、日期对象或者可被格式化的日期字符串|`number` `date` `string`|-|-
format|日期格式化字符串|string|-|hh时mm分ss秒
## Events
名称|描述|参数
---|---|---
change|时间变化时触发|默认为时分秒数组，如果指定了format属性，则参数为格式化后的字符串
