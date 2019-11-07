# Picker（选择器）
##### 选择器多用来选择可枚举，或具有层级关系的数据
###### 支持多级联动
---
## 示例
### 默认Picker
slots属性是最重要的一个属性，其为一个二维数组，数组的第一维度代表有多少列，第二维度代表每列有哪些选项。

每个选项为一个对象，具有：text和value两个属性。text为显示的文字，value为选中后返回的值。选项也可以简单的配置为一个string或number，其同时代表了text和value。

当选择的选项变化时，会触发change事件，组件会向回调函数中注入三个参数，分别为：组件Picker的实例、发生滚动的滚轮所属组索引、发生滚动的滚轮所属组当前被选中的选项索引

组件实例picker被注册了许多方法，供外部调用完成需求。如本例中的`getSelectedTexts()：获取所有slot目前被选中的文字`

:::demo
```html
<template>
  <p class="notice">您选择的季节为：{{value}}</p>
  <kw-picker @change="handleChange" :slots="slots"></kw-picker>
</template>
<script>
  export default {
    data () {
      return {
        value: '',
        slots: [
          [
            {
              text: '春',
              value: 1
            },
            {
              text: '夏',
              value: 2
            },
            {
              text: '秋',
              value: 3
            },
            {
              text: '冬',
              value: 4
            }
          ]
        ]
      }
    },
    methods: {
      handleChange (picker) {
        const texts = picker.getSelectedTexts()
        this.value = texts.join('---')
      }
    }
  }
</script>
```
:::

### 多级联动
绑定change事件，change事件回调函数的第一个参数为Picker组件实例，可以调用其上的`setSlot(slotIndex, slot, isResetSelectedIndex)`方法来改变指定slot的数据
* slotIndex：需要设置数据的slot索引
* slot：数据
* isResetSelectedIndex：是否重置之前选中的索引？默认为false，如果设置为true，则每次数据改变都会将选中的索引置为0

:::demo
```html
<template>
  <p class="notice">您选择的四大名著人物为：{{value}}</p>
  <kw-picker @change="handleChange" :slots="slots"></kw-picker>
</template>
<script>
  const cascadeSlotData = [
    [
      {
        text: '张飞',
        value: 1
      },
      {
        text: '关羽',
        value: 2
      },
      {
        text: '曹操',
        value: 3
      },
      {
        text: '刘备',
        value: 4
      }
    ],
    [
      {
        text: '林冲',
        value: 1
      },
      {
        text: '鲁智深',
        value: 2
      },
      {
        text: '吴用',
        value: 3
      },
      {
        text: '孙二娘',
        value: 4
      }
    ],
    [
      {
        text: '孙悟空',
        value: 1
      },
      {
        text: '沙僧',
        value: 2
      },
      {
        text: '猪八戒',
        value: 3
      },
      {
        text: '唐僧',
        value: 4
      },
      {
        text: '如来佛',
        value: 5
      }
    ],
    [
      {
        text: '林黛玉',
        value: 1
      },
      {
        text: '贾宝玉',
        value: 2
      },
      {
        text: '王熙凤',
        value: 3
      },
      {
        text: '夏金桂',
        value: 4
      }
    ]
  ]
  export default {
    data () {
      return {
        value: '',
        slots: [
          [
            {
              text: '三国演义',
              value: 1
            },
            {
              text: '水浒传',
              value: 2
            },
            {
              text: '西游记',
              value: 3
            },
            {
              text: '红楼梦',
              value: 4
            }
          ],
          cascadeSlotData[0]
        ]
      }
    },
    methods: {
      handleChange (picker, slotIndex, slotSelectedIndex) {
        if (slotIndex === 0) {
          picker.setSlot(1, cascadeSlotData[slotSelectedIndex])
        }
        const texts = picker.getSelectedTexts()
        this.value = texts.join('---')
      }
    }
  }
</script>
```
:::
### Popup形式
通过设置popup为true来开启该形式，popup为一个boolean值，默认为false

通过v-model绑定boolean值来打开或关闭Picker组件

点击”确定“按钮，会触发confirm事件，组件会向事件处理函数返回一个对象，对象包含三个属性，属性值均为数组：values为值value组成的数组；indexes为索引index组成的数组；texts为文字text组成的数组

此例还演示了选项也可以简单的配置为一个string或number，其同时代表了text和value。
```html
<template>
  <kw-button @click="visible = true">选择您的爱好</kw-button>
  <kw-picker 
    popup
    v-model="visible"
    @confirm="handleConfirm"
    :slots="slots"></kw-picker>
</template>
<script>
  export default {
    data () {
      return {
        visible: false,
        slots: [
          ['喝酒', '抽烟', '烫头']
        ]
      }
    },
    methods: {
      handleConfirm ({ values, indexes, texts }) {
        this.$dialog.alert(`
          <p>选择的value：${values.join('-')}</p>
          <p>选择的index：${indexes.join('-')}</p>
          <p>选择的text：${texts.join('-')}</p>
        `)
      }
    }
  }
</script>
```
## API
### Props
名称 |描述|类型|可选值|默认值
-----|-------|---|-----|-----
slots|配置选择器滚轮数据的数组，其为一个二维数组，数组的第一维度代表有多少列，第二维度代表每列有哪些选项。每个选项为一个对象，具有：text和value两个属性。text为显示的文字，value为选中后返回的值。选项也可以简单的配置为一个string或number，其同时代表了text和value。|array|-|[]
visual-count|可见的数量|number|大于0的正整数|当popup为true时，默认为9；反之为4
#### slots子配置项
名称 |描述|类型|可选值|默认值
-----|-------|---|-----|-----
text|显示的文字|string/number|-|-
value|选中后返回的值|string/number/boolean|-|-
### Methods
名称|描述|参数
---|------|---
setSlot|设置指定slot的备选值数组|slotIndex：slot索引<br>slot：数据<br>?isResetSelectedIndex：是否重置被选中索引，默认false
setSlots|slots属性的api版本，可以通过该方法设置slots|slots：数据
setSlotSelectedValue|设置指定slot目前被选中的值|slotIndex：索引<br>selectedValue：被选中的值
getSlotSelectedValue|获取指定slot目前被选中的值|slotIndex：索引
setSlotSelectedIndex|设置指定slot目前被选中的索引|slotIndex：索引<br>selectedIndex：被选中的索引
getSlotSelectedIndex|获取指定slot目前被选中的索引|slotIndex：索引
setSlotSelectedText|设置指定slot目前被选中的文字|slotIndex：索引<br>selectedText：被选中的文字
getSlotSelectedText|获取指定slot目前被选中的文字|slotIndex：索引
setSelectedValues|设置所有slot目前被选中的值|values：值数组
getSelectedValues|获取所有slot目前被选中的值|
setSelectedIndexes|设置所有slot目前被选中的索引|indexes：索引数组
getSelectedIndexes|获取所有slot目前被选中的索引|-
setSelectedTexts|设置所有slot目前被选中的文字|texts：文字数组
getSelectedTexts|获取所有slot目前被选中的文字|-

### Events
名称|描述|参数
---|---|---
confirm|点击确定按钮时触发|返回一个对象，包含三个属性：<br>values为值数组；<br>indexes为索引数组；<br>texts为文本数组
cancel|点击取消按钮时触发|-
change|被选中的值发生变化时触发|返回三个参数：<br>第一个参数为Picker实例 picker；<br>第二个参数为发生滚动的滚轮所属组索引 slotIndex；<br>第三个参数为发生滚动的滚轮所属组当前被选中的选项索引 slotSelectedIndex
