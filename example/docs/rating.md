# Rating (打分器)
##### 打分器常用于评价功能
###### 其他UI框架中很少有这个

---
## 示例
### 指定默认星级
通过v-model进行双向绑定，值为数值类型。
```html
<template>
  <kw-rating v-model="ratingLevel"></kw-rating>
</template>
<script>
  export default {
    data () {
      return {
        ratingLevel: 3
      }
    }
  }
</script>
```
### 星级的数量
count属性指定星级的数量，默认为5。
```html
<kw-rating :count="6"></kw-rating>
```
### 显示星级对应的文字提示
show-text设为true，可以在右侧显示每个被选中的星级对应的文字提示。默认不会显示文字。
```html
<kw-rating show-text></kw-rating>
```
### 自定义每个星级对应的文字
texts数组用来自定义文字，默认为：['非常差', '差', '一般', '好', '非常好']。
```html
<kw-rating show-text :texts="['一塌糊涂', '不好', '一般般', '不错', '很棒']"></kw-rating>
```
### 更改星级文字的位置
text-position默认为right，显示在星级的右侧。可选的值有：bottom,right
```html
<kw-rating show-text text-position="bottom"></kw-rating>
```
### 绑定选中星级后的select事件
select(selectedCount)，回调参数为选中的星级个数。
```html
<template>
  <kw-rating @select="handleSelected"></kw-rating>
</template>
<script>
  export default {
    methods: {
      handleSelected (selectedCount) {
        this.$toast({
          position: 'bottom',
          message: `你选择的星级为${selectedCount}`,
          duration: 600
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
value|双向绑定选中的星级，通过v-model指定|number|-|-
count|星星的数量，默认为5个|number|-|5
show-text|显示文字提示|boolean|`true` `false`|false
texts|星级对应的文字提示|array|-|['极差', '差', '良', '好', '极好']
text-position|文字的位置|string|`right` `bottom`|right
star-size|星星尺寸|string/number|`small` `large`或表示尺寸的数字，当为数字时单位为px|16
star-color|星星颜色|string|Color组件定义的颜色字符串或合法的css色彩值|primary
star-checked-color|星星选中后颜色|string|Color组件定义的颜色字符串或合法的css色彩值|默认值为star-color的取值
text-size|文字尺寸|string/number|`small` `large`或表示尺寸的数字，当为数字时单位为px|14
text-color|文字颜色|string|Color组件定义的颜色字符串或合法的css色彩值|primary
disabled|是否禁用，禁用后不会触发select事件|boolean|`true` `false`|false
### Events
名称|描述|参数
---|---|---
select|星星被选中时触发|被选中的数量
