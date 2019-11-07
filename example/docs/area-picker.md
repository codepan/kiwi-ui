# AreaPicker（区域选择器）
##### 区域选择器用来选择省市区（县）
###### 组件内置了区域数据
---
## 示例
### 简单使用
v-model控制组件的打开和关闭，点击确认，触发confirm事件，回调参数与Picker组件的参数相同

AreaPicker组件基于Picker组件构建，该组件内置了slots属性所需要的数据，该数据为一个json文件，详情[参见这里](https://www.baidu.com)

当然，如若这份数据的取值不能满足需求，你完全可以自定义数据，然后通过slots属性将其传入，数据的格式，可参见Picker组件
```html
<template>
  <kw-button @click="visible = true">简单使用</kw-button>
  <kw-area-picker v-model="visible" @confirm="handleConfirm"></kw-area-picker>
</template>
<script>
  export default {
    data: () => ({
      visible: false
    }),
    methods: {
      handleConfirm ({ texts }) {
        this.$dialog({
          title: '您选择的区域是：',
          message: texts.join('-')
        })
      }
    }
  }
</script>
```
### 指定显示级别
通过level属性指定显示级别，有1，2，3三种取值，分别对应省，省和市，省、市和区（县）
```html
<template>
  <kw-button @click="visible = true">level设置为2级</kw-button>
  <kw-area-picker :level="2" @confirm="handleConfirm"></kw-area-picker>
</template>
<script>
  export default {
    data: () => ({
      visible: false
    }),
    methods: {
      handleConfirm ({ texts }) {
        this.$dialog({
          title: '您选择的区域是：',
          message: texts.join('-')
        })
      }
    }
  }
</script>
```
### 自定义区域数据
通过slots属性传入区域数据，数据格式可参见Picker组件。当传入slots，则代表你弃用了组件内置的区域数据和联动交互。此时level属性会失效，显示级别取决于slots数组的长度，联动交互也需要自行监听change事件来自行实现。

:::demo
```html
<template>
  <kw-button @click="visible = true">自定义区域数据</kw-button>
  <kw-area-picker v-model="visible" :slots="slots" @confirm="handleConfirm" ></kw-area-picker>
</template>
<script>
  export default {
    data: () => ({
      visible: false,
      cities: [
        [
          {
            text: '西安',
            value: 11
          },
          {
            text: '宝鸡',
            value: 12
          }
        ],
        [
          {
            text: '兰州',
            value: 13
          },
          {
            text: '天水',
            value: 14
          }
        ]
      ],
      slots: [
        [
          {
            text: '陕西',
            value: 01
          },
          {
            text: '甘肃',
            value: 02
          }
        ],
        this.cities[0]
      ]
    }),
    methods: {
      getCities (provinceIndex) {
        return this.cities[provinceIndex]
      }
      handleChange (picker, slotIndex, slotSelectedIndex) {
        if (slotIndex === 0) {
          picker.setSlot(1, this.getCities(slotSelectedIndex))
        }
      }
      handleConfirm ({ texts }) {
        this.$dialog({
          title: '您选择的区域是：',
          message: texts.join('-')
        })
      }
    }
  }
</script>
```
:::

## API
### Props
名称 |描述|类型|可选值|默认值
-----|-------|---|-----|-----
value|使用v-model双向绑定选中的值，形式为[[省]，[市(直辖市)]，[区(县城)]]，其中某一项不指定时默认选中第一个。当某一项设置的层级关系有误时，该项之后的默认选中第一个，并且组件会给出警告|array|-|[]
level|地区级别，默认值为3|number|1,2,3|3
### Methods
名称|描述|参数
---|------|---
open|打开选择器|-
close|关闭选择器|-
### Events
名称|描述|参数
---|------|---
cancel|点击取消按钮时触发|-
confirm|点击确定按钮时触发|一个区域数组，形式为[[省]，[市], [县（区）]]
change|区域变化时触发|和confirm事件参数相同

