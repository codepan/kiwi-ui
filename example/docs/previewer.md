# Previewer (图片预览器)
##### 图片预览器非常常见
###### 交互能力强
---
## 示例
### 基本用法
向images属性传入一个图片数组，images为必传属性，不指定或者传入一个空数组时，组件不会被渲染
```html
<template>
  <kw-previewer :images="images" v-model="visible"></kw-previewer>
</template>
<script>
  import image1 from '../assets/images/carousel/image1.jpg'
  import image2 from '../assets/images/carousel/image2.png'
  import image3 from '../assets/images/carousel/image3.jpg'
  export default {
    data: () => ({
      visible: false,
      images: [image1, image2, image3]
    })
  }
</script>
```
### 不显示指示器
默认会在底部显示指示器，可将indicator设置为false，隐藏显示器，默认为true
```html
<template>
  <kw-previewer :images="images" v-model="visible" :indicator="false"></kw-previewer>
</template>
<script>
  import image1 from '../assets/images/carousel/image1.jpg'
  import image2 from '../assets/images/carousel/image2.png'
  import image3 from '../assets/images/carousel/image3.jpg'
  export default {
    data: () => ({
      visible: false,
      images: [image1, image2, image3]
    })
  }
</script>
```
### 指示器的位置
指示器默认显示在底部，形式为"当前图片索引/图片总数"，indicator-position设置为top可以将指示器位置调整到顶部。两种取值bottom，top，默认为bottom
```html
<template>
  <kw-previewer :images="images" v-model="visible" indicator-position="top"></kw-previewer>
</template>
<script>
  import image1 from '../assets/images/carousel/image1.jpg'
  import image2 from '../assets/images/carousel/image2.png'
  import image3 from '../assets/images/carousel/image3.jpg'
  export default {
    data: () => ({
      visible: false,
      images: [image1, image2, image3]
    })
  }
</script>
```
### 默认显示
默认显示第一张图片，设置index值来调整默认显示图片的索引
```html
<template>
  <kw-previewer :images="images" v-model="visible" :index="1"></kw-previewer>
</template>
<script>
  import image1 from '../assets/images/carousel/image1.jpg'
  import image2 from '../assets/images/carousel/image2.png'
  import image3 from '../assets/images/carousel/image3.jpg'
  export default {
    data: () => ({
      visible: false,
      images: [image1, image2, image3]
    })
  }
</script>
```
### 显示关闭按钮，禁止默认关闭行为
默认单击后会关闭预览器，可设置closable为false来禁止这一行为，此时可以设置close-icon为true，来在右上角显示一个关闭按钮，用于关闭预览器
```html
<template>
  <kw-previewer :images="images" v-model="visible" :closable="false" close-icon></kw-previewer>
</template>
<script>
  import image1 from '../assets/images/carousel/image1.jpg'
  import image2 from '../assets/images/carousel/image2.png'
  import image3 from '../assets/images/carousel/image3.jpg'
  export default {
    data: () => ({
      visible: false,
      images: [image1, image2, image3]
    })
  }
</script>
```
### 自定义指示器
具名indicator的Slot插槽可以用来自定义指示器，有两种使用方式：

简洁的使用方式为采用v-slot语法，组件内部会导出：
* index：当前显示图片索引
* length：图片总个数

这种语法可以参见[vue官网-插槽](https://cn.vuejs.org/v2/guide/components-slots.html)
```html
<template>
  <kw-previewer :images="images" v-model="visible">
    <template v-slot:indicator="slotProps">
      <span>{{slotProps.index + 1}}</span>
      <span>/</span>
      <span>{{slotProps.length}}</span>
    </template>
  </kw-previewer>
</template>
<script>
  import image1 from '../assets/images/carousel/image1.jpg'
  import image2 from '../assets/images/carousel/image2.png'
  import image3 from '../assets/images/carousel/image3.jpg'
  export default {
    data: () => ({
      visible: false,
      images: [image1, image2, image3]
    })
  }
</script>
```
上面的示例看不懂？没关系，可以采用传统的方式来自行实现
```html
<template>
  <kw-previewer :images="images" v-model="visible" @change="handleChange">
    <div slot="indicator">
      <span>{{index + 1}}</span>
      <span>/</span>
      <span>{{images.length}}</span>
    </div>
  </kw-previewer>
</template>
<script>
  import image1 from '../assets/images/carousel/image1.jpg'
  import image2 from '../assets/images/carousel/image2.png'
  import image3 from '../assets/images/carousel/image3.jpg'
  export default {
    data: () => ({
      visible: false,
      index: 0,
      images: [image1, image2, image3]
    }),
    methods: {
      handleChange (index) {
        this.index = index
      }
    }
  }
</script>
```
### 插件形式
上述几个示例都是采用组件的形式使用，其也可采用插件的方式使用，当引入了该组件，并且使用了，例如：
```js
import Vue from 'vue'
import { Previewer } from '@codepan/kiwi-ui'
Vue.use(Previewer)
```

之后Vue实例上会具有一个$previewer()方法，该方法接收一个图片数组作为参数，也可接收一个options对象作为参数
* 当参数为数组时：代表传入组件images属性
* 当参数为对象时：代表传入组件的更多属性配置

closable属性设置单击时是否关闭，默认为true，当设置为false时，有两种关闭的方式：
* 设置close-icon属性为true，会在右上角显示一个关闭按钮用以关闭预览器；
* 也可手动手动关闭，$previewer()方法会返回Previewer实例，实例上具有一个close()方法可用于关闭
```html
<script>
  import image1 from '../assets/images/carousel/image1.jpg'
  import image2 from '../assets/images/carousel/image2.png'
  import image3 from '../assets/images/carousel/image3.jpg'
  export default {
    openPreviewer () {
      // this.$previewer([image1, image2, image3])
      const previewer = this.$previewer({
        images: [image1, image2, image3],
        index: 1,
        closable: false,
        closeIcon: true
      })

      /*
      window.setTimeout(() => {
        previewer.close()
      }, 6000)
      */
    }
  }
</script>
```
# API
## Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
value|通过v-model来指定，控制组件的显示与否|boolean|`true` `false`|false
images|图片数组，必传属性，不指定或者传入一个空数组时，组件不会被渲染|string\[\]|-|[]
indicator|是否显示指示器|boolean|`true` `false`|true
indicator-position|指示器的位置|string|`top` `bottom`|`bottom`
index|默认显示的图片索引，取值范围为[0, images.length - 1]，如果传入的值不正确，则组件不会渲染，并抛出异常|number|-|0
closable|单击时是否关闭|boolean|`true` `false`|true
close-icon|是否显示关闭按钮|boolean|`true` `false`|false
### Slots
名称|描述
---|---
indicator|自定义指示器，插槽会返回index：当前图片索引；length：图片总个数
## Options
名称|描述|类型|可选值|默认值
---|---|---|---|---
images|图片数组，必传属性，不指定或者传入一个空数组时，组件不会被渲染|string\[\]|-|[]
indicator|是否显示指示器|boolean|`true` `false`|true
indicatorPosition|指示器的位置|string|`top` `bottom`|`bottom`
index|默认显示的图片索引，取值范围为[0, images.length - 1]，如果传入的值不正确，则组件不会渲染，并抛出异常|number|-|0
closable|单击时是否关闭|boolean|`true` `false`|true
closeIcon|是否显示关闭按钮|boolean|`true` `false`|false
onChange|图片切换后的回调函数，回调参数为当前图片的索引|function|-|null
onClose|组件关闭时的回调函数|function|-|null
## Events
名称|描述|回调参数
---|---|---
change|图片切换后触发|当前图片索引
close|组件关闭时触发|-

