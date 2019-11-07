# Range (滑块)
##### 支持自定义手柄，步长等
###### 使用简单

---
## 示例
### 简单使用
通过v-model进行双向绑定当前值，默认滑块的范围为0-100之间的整数，当前值默认50，即滑块在中间
```html
<template>
  <kw-range v-model="value"></kw-range>
</template>
<script>
  export default {
    data: () => ({
      value: 50
    })
  }
</script>
```
### 最小最大值
最小最大值即为显示范围，默认为0-100，可以通过min和max两个属性分别指定最小和最大值。sign属性控制手柄上是否显示当前值
```html
<kw-range :min="-50" :max="50" sign></kw-range>
```
### 两端文字
begin和end属性可以向两端增加文字，同时，组件提供了begin和end两个具名Slot来供使用者自定义文字
```html
<kw-range begin="小" end="大"></kw-range>
<!--
<kw-range>
  <span slot="begin">小</span>
  <span slot="end">大</span>
</kw-range>
-->
```
### 指定步长
步长默认为1，通过step属性定义
```html
<kw-range :step="10" sign></kw-range>
```
### 禁用
disabled设置是否禁用，默认为false。禁用后，组件呈半透明，操作无反馈
```html
<kw-range disabled></kw-range>
```
### 轨道宽度
轨道宽度默认为2px，可通过bar-height属性设置
```html
<kw-range :bar-height="4"></kw-range>
```
### 设置颜色
颜色支持Color组件中的颜色值字符串和CSS中合法的色彩取值
* track-color指定轨道颜色
* active-color指定进度条颜色
```html
<kw-range track-color="#999" active-color="success"></kw-range>
```
### 自定义手柄
默认Slot用来自定义手柄
```html
<template>
  <kw-range v-model="value">
    <div class="custom-handle">{{value}}</div>
  </kw-range>
</template>
<script>
  export default {
    data: () => ({
      value: 50
    })
  }
</script>
<style lang="scss">
  .custom-handle {
    width: 40px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 4px;
    background: #ff4949;
    font-size: 12px;
    color: #fff;
  }
</style>
```
### 控制滑块行为
拖拽手柄时会触发以下3个事件：
* drag-begin：开始拖拽时触发
* dragging：拖拽中触发
* drag-end：结束拖拽时触发

每个事件均会返回两个参数：
* value：当前进度
* range：滑块组件实例

组件实例上会暴露两个方法供外部使用：
* forbid()：禁止滑块拖拽
* allow()：允许滑块拖拽
```html
<template>
  <kw-range
    begin="小"
    end="大"
    sign="音量"
    @dragging="handleDragging"
    @drag-end="handleDragEnd"></kw-range>
</template>
<script>
  export default {
    data: () => ({
      warningCount: 0
    }),
    methods: {
      handleDragging (value, range) {
        if (value >= 80 && !this.warningCount) {
          this.warningCount = 1
          range.forbid()
          this.$dialog.alert('继续增大音量将损伤听力，是否继续？', {
            confirmButtonText: '我知道了'
          }).then(() => {
            range.allow()
          })
        }
      },
      handleDragEnd (value) {
        value >= 80 && this.$toast(`最终音量为${value}`)
      }
    }
  }
</script>
```
## API
### Props
名称 |描述|类型|可选值|默认值
-----|-------|---|-----|-----
value|双向绑定当前进度，通过v-model指定|number|-|50
min|最小值|number|-|0
max|最大值|number|-|100
step|步长|number|-|1
sign|手柄上的文案，传入boolean类型表示是否显示当前进度，传入字符串则将显示传入的值|boolean \| string|-|false
begin|开始处文字|string|-|-
end|结束处文字|string|-|-
disabled|是否禁用|boolean|`true` `false`|false
bar-height|轨道高度，默认单位为px|number \| string|-|2
track-color|轨道颜色|string|CSS中合法颜色取值和Color组件中颜色字符串|stable
active-color|激活时颜色/进度条颜色|string|CSS中合法颜色取值和Color组件中颜色字符串|primary
### Slots
名称|描述
---|---
-|手柄
begin|开始处内容
end|结束处内容
### Methods
名称|描述|参数
---|------|----
forbid|禁止滑块拖拽|-
allow|允许滑块拖拽|-
### Events
名称|描述|参数
---|------|----
drag-begin|拖拽开始时触发|value：当前进度；range：组件实例
dragging|拖拽中每时触发|value：当前进度；range：组件实例
drag-end|拖拽结束时触发|value：当前进度；range：组件实例
