# Switch (开关)
##### 移动端常见组件
###### 可自定义颜色
---
## 示例
### 指定value值
通过v-model绑定boolean类型的值，控制开关
```html
<template>
  <kw-switch v-model="switchValue"></kw-switch>
</template>
<script>
  export default {
    data: () => ({
      switchValue: false
    })
  }
</script>
```
### 颜色
color属性控制开关打开时的颜色，支持官方内置的所有颜色，取值参见Color组件
```html
<template>
  <kw-switch v-model="switchValue1" color="danger"></kw-switch>
  <kw-switch v-model="switchValue2" color="info"></kw-switch>
</template>
<script>
  export default {
    data: () => ({
      switchValue1: false,
      switchValue2: false
    })
  }
</script>
```
### 尺寸
small、default、large三个尺寸。默认为default或不写。使用size属性进行设置
```html
<template>
  <kw-switch v-model="switchValue1" size="small"></kw-switch>
  <kw-switch v-model="switchValue2"></kw-switch>
  <kw-switch v-model="switchValue3" size="large"></kw-switch>
</template>
<script>
  export default {
    data: () => ({
      switchValue1: false,
      switchValue2: false,
      switchValue3: false
    })
  }
</script>
```
### 文字和图标
自定义内容，建议如果使用2个汉字，将开关尺寸设置为large
```html
<template>
  <kw-switch v-model="switchValue1">
    <span slot="on">开</span>
    <span slot="off">关</span>
  </kw-switch>
  <kw-switch v-model="switchValue2" color="success">
    <span slot="on">开</span>
    <span slot="off">关</span>
  </kw-switch>
  <kw-switch v-model="switchValue3" size="large">
    <span slot="on">开启</span>
    <span slot="off">关闭</span>
  </kw-switch>
  <kw-switch v-model="switchValue4">
     <kw-icon icon="check" slot="on" color="success"></kw-icon>
    <kw-icon icon="close" slot="off"></kw-icon>
  </kw-switch>
</template>
<script>
  export default {
    data () {
      return {
        switchValue1: false,
        switchValue2: false,
        switchValue3: false,
        switchValue4: false
      }
    }
  }
</script>
```
### 不可用
禁用开关
```html
<template>
  <kw-switch disabled></kw-switch>
  <kw-switch v-model="switchValue" disabled color="info"></kw-switch>
</template>
<script>
  export default {
    data: () => ({
      switchValue: true
    })
  }
</script>
```
### 监听switch事件
监听开关状态的改变来处理业务逻辑，接收开关的状态
```html
<template>
  <kw-switch v-model="switchValue" @switch="handleSwitch"></kw-switch>
</template>
<script>
  export default {
    data () {
      return {
        switchValue: false
      }
    },
    methods: {
      handleSwitch (check) {
        this.$toast({
          message: check ? 'ON' : 'OFF',
          duration: 500
        })
      }
    }
  }
</script>
```
## API
### Props
名称 |描述|类型|可选值|默认值
---|---|---|---|---
value|通过v-model绑定，控制开关的boolean变量值|boolean|`true` `false`|false
size|开关的尺寸|string|`small` `default(或者不写)` `large`|-
color|开关的颜色|string|参见Color组件|-
disabled|是否禁用|boolean|`true` `false`|false
### Slots
名称|描述
---|---
on|自定义显示打开时的内容
off|自定义显示关闭时的内容
### Events
事件名称|描述|参数
---|---|---
switch|开关变化时触发，返回当前的状态|true,false

