# DatetimePicker
##### 日期时间选择器
###### 支持自定义格式
---
## 示例
### 简单使用
使用v-model绑定boolean值来控制组件的的打开与关闭，组件默认会显示年月日时分。选择完毕点击“确定”，触发confirm事件，回调参数有两个：
* 未指定format属性时：
  * 第一个参数与Picker组件相同
  * 第二个参数默为当前选择的日期对象
* 指定了format属性时：
  * 第一个参数为被格式化后的日期字符串
  * 第二个参数与Picker组件相同
```html
<template>
  <kw-datetime-picker v-model="visible" @confirm="handleConfirm"></kw-datetime-picker>
</template>
<script>
  export default {
    data: () => ({
      visible: false
    }),
    methods: {
      handleConfirm ({ values }) {
        this.$dialog({
          title: '选择的日期为：',
          message: new Date(...values).toString()
        })
      }
    }
  }
</script>
```
### 不同的显示类型
通过type属性指定类型，可选值有：`datetime`、`date`、`time`，默认为`datetime`
```html
<template>
  <kw-datetime-picker v-model="visible1" type="date" @confirm="handleConfirm1"></kw-datetime-picker>
  <kw-datetime-picker v-model="visible2" type="time" @confirm="handleConfirm2"></kw-datetime-picker>
</template>
<script>
  export default {
    data: () => ({
      visible1: false,
      visible2: false
    })
    methods: {
      handleConfirm1 ({ texts }) {
        this.$dialog.alert(texts.join('-'), '选择的日期为：')
      },
      handleConfirm2 ({ texts }) {
        this.$dialog.alert(`${texts[0]}点${texts[1]}分`, '选择的时间为：')
      }
    }
  }
</script>
```
### 格式化结果值
默认的结果值为Date对象，可以通过format属性指定格式化字符串，形如：'yyyy-MM-dd hh:mm'或'yyyy/MM/dd'等

当指定了format属性时，confirm事件回调参数的第一个参数为根据format格式化后的日期字符串
```html
<template>
  <kw-datetime-picker v-model="visible1" format="yyyy-MM-dd hh:mm" @confirm="handleConfirm"></kw-datetime-picker>
  <kw-datetime-picker v-model="visible2" format="yyyy年MM月dd日" @confirm="handleConfirm"></kw-datetime-picker>
</template>
<script>
  export default {
    data: () => ({
      visible1: false,
      visible2: false
    })
    methods: {
      handleConfirm (dateString) {
        this.$dialog.alert(dateString, '选择的时间为：')
      }
    }
  }
</script>
```
### 限定显示范围
年份默认的范围为当前年份的前后10年，其他没有限定。需要时可以通过min-year和max-year来限定年份
```html
<template>
  <kw-datetime-picker v-model="visible" :min-year="2016" :max-year="2020"></kw-datetime-picker>
</template>
<script>
  export default {
    data: () => ({
      visible: false
    })
  }
</script>
```
### 默认选中
通过select属性可以指定默认选中，可以是数组，也可以是具有日期格式的字符串，还可以是一个日期对象
```html
<template>
  <kw-datetime-picker v-model="visible1" :select="select1"></kw-datetime-picker>
  <kw-datetime-picker v-model="visible2" :select="select2"></kw-datetime-picker>
  <kw-datetime-picker v-model="visible3" :select="select3"></kw-datetime-picker>
<script>
  export default {
    data: () => ({
      visible1: false,
      visible2: false,
      visible3: false,
      select1: [2013, 9, 21, 4, 30],
      select2: '2013-9-21 4:30',
      select3: new Date(2013, 8, 21, 4, 30)
    })
  }
</script>
```
### 美化显示
format属性用来格式化选择后的结果值，而format-*属性则用来格式化显示文本，其不会对结果值造成影响，只是显示上的一种美化而已。
```html
<template>
  <kw-datetime-picker v-model="visible" format-year="yyyy年" format-month="MM月" format-date="dd日" format-hour="hh时" format-minute="mm分"></kw-datetime-picker>
</template>
<script>
  export default {
    data: () => ({
      visible: false
    })
  }
</script>
```
## API
### Props

名称 |描述|类型|可选值|默认值
-----|-------|---|-----|-----
type|通过type属性指定日期时间类型|string|`datetime` `date` `time`|datetime
select|设置默认选中|String/Array/Date|-|new Date()
format-year|格式化年|string|`yyyy` `yyyy年` 等|yyyy
format-month|格式化月|string|`MM` `MM月` 等|MM
format-date|格式化日|string|`dd` `dd日` `dd号` 等|dd
format-hour|格式化小时|string|`hh` `hh时` `hh点` 等|hh
format-minute|格式化分钟|string|`mm` `mm分` 等|mm
format|格式化选择后的结果值，格式必须形如：'yyyy-MM-dd hh:mm'|string|-|Date对象
min-year|最小年份|number|-|10年前
max-year|最大年份|number|-|10年后
min-month|最小月份|number|[1-12]|1
max-month|最大月份|number|[1-12]|12
min-date|最小日期|number|[1-31]|1
max-date|最大日期|number|[1-31]|每月最后一天
hide-year|是否隐藏年份|boolean|`true` `false`|false
hide-minute|是否隐藏分钟|boolean|`true` `false`|false
### Events
名称|描述|参数
---|------|---
cancel|点击取消按钮时触发|-
confirm|点击确定按钮时触发|详见上文描述
change|日期变化时触发|参见Picker组件

