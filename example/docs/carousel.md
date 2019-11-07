# Carousel (轮播图)
##### 轮播图
###### 功能完善
---
## 示例
### 基本用法
向images属性传入一个图片数组，images为必传属性，不指定或者传入一个空数组时，组件不会被渲染
```html
<template>
  <kw-carousel :images="images"></kw-carousel>
</template>
<script>
  import image1 from '../assets/images/carousel/image1.jpg'
  import image2 from '../assets/images/carousel/image2.png'
  import image3 from '../assets/images/carousel/image3.jpg'
  export default {
    data () {
      return {
        images: [image1, image2, image3]
      }
    }
  }
</script>
```
### 隐藏索引指示器
设置hide-indicator为true，隐藏索引指示器，默认为false
```html
<template>
  <kw-carousel :images="images" hide-indicator></kw-carousel>
</template>
<script>
  import image1 from '../assets/images/carousel/image1.jpg'
  import image2 from '../assets/images/carousel/image2.png'
  import image3 from '../assets/images/carousel/image3.jpg'
  export default {
    data () {
      return {
        images: [image1, image2, image3]
      }
    }
  }
</script>
```
### 自动播放
设置autoplay为true，间隔2秒切换到下一张，默认为false。同时也可以通过指定duration属性控制切换的时间间隔，值为毫秒数，默认3000
```html
<template>
  <kw-carousel :images="images" autoplay></kw-carousel>
</template>
<script>
  import image1 from '../assets/images/carousel/image1.jpg'
  import image2 from '../assets/images/carousel/image2.png'
  import image3 from '../assets/images/carousel/image3.jpg'
  export default {
    data () {
      return {
        images: [image1, image2, image3]
      }
    }
  }
</script>
```
### 禁止循环轮播
默认可以循环轮播，即循环到最后一张时下一张切换到第一张。将loop属性设置为false，可以禁止循环轮播。注意：autoplay为true时，loop值将被置为true，仅且只能为true，不要将loop值设置为false，设置了也将被忽略。
```html
<template>
  <kw-carousel :images="images" :loop="false"></kw-carousel>
</template>
<script>
  import image1 from '../assets/images/carousel/image1.jpg'
  import image2 from '../assets/images/carousel/image2.png'
  import image3 from '../assets/images/carousel/image3.jpg'
  export default {
    data () {
      return {
        images: [image1, image2, image3]
      }
    }
  }
</script>
```
### 默认显示
默认显示data数组中的第一张图片，可以通过active属性指定初始显示哪张图片。注意：传入的值为图片数组的下标索引，传的值不合法时会抛出异常
```html
<template>
  <kw-carousel :images="images" :active="2"></kw-carousel>
</template>
<script>
  import image1 from '../assets/images/carousel/image1.jpg'
  import image2 from '../assets/images/carousel/image2.png'
  import image3 from '../assets/images/carousel/image3.jpg'
  export default {
    data () {
      return {
        images: [image1, image2, image3]
      }
    }
  }
</script>
```
### 事件
click事件，点击图片时触发，回调参数为当前点击的图片的索引。change事件，图片切换后触发，回调参数为当前显示的图片的索引
```html
<template>
  <kw-carousel :images="images" @click="handleClick" @change="handleChange"></kw-carousel>
</template>
<script>
  import image1 from '../assets/images/carousel/image1.jpg'
  import image2 from '../assets/images/carousel/image2.png'
  import image3 from '../assets/images/carousel/image3.jpg'
  export default {
    data () {
      return {
        images: [image1, image2, image3]
      }
    },
    methods: {
      handleClick (index) {
        this.$toast({
          position: 'bottom',
          message: `您点击了第${index + 1}张图片`
        })
      },
      handleChange (currentIndex) {
        this.$toast({
        position: 'bottom',
        message: `当前为第${currentIndex + 1}张图片`,
        duration: 1000
        })
      }
    }
  }
</script>
```
### 自定义轮播Item
Carousel组件配合CarouselItem组件使用，可以自定义更加丰富的轮播内容，而不局限于图片。注意：如果使用了CarouselItem组件，就不要再向Carousel组件传入images，因为该属性将被忽略
```html
<template>
  <kw-carousel>
    <kw-carousel-item>
      <div class="carousel-panel carousel-panel-1">1</div>
    </kw-carousel-item>
    <kw-carousel-item>
      <div class="carousel-panel carousel-panel-2">2</div>
    </kw-carousel-item>
    <kw-carousel-item>
      <div class="carousel-panel carousel-panel-3">3</div>
    </kw-carousel-item>
  </kw-carousel>
</template>
<style>
  .carousel-panel{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 30px;
    font-weight: bolder;
  }
  .carousel-panel-1{
    background: red;
  }
  .carousel-panel-2{
    background: green;
  }
  .carousel-panel-3{
    background: blue;
  }
</style>
```
### 指定容器的宽高
默认宽度为父容器的100%，高度为200px。可以通过width属性和height属性重新指定。可以传入数值和字符串，默认单位为px。
```html
<template>
  <kw-carousel :images="images" height="100" width="200"></kw-carousel>
</template>
<script>
  import image1 from '../assets/images/carousel/image1.jpg'
  import image2 from '../assets/images/carousel/image2.png'
  import image3 from '../assets/images/carousel/image3.jpg'
  export default {
    data () {
      return {
        images: [image1, image2, image3]
      }
    }
  }
</script>
```
# API
## Carousel
### Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
images|图片数组，不使用CarouselItem子组件时，该属性为必传参数|array|-|[]
hide-indicator|是否隐藏指示器|boolean|true,false|false
autoplay|是否自动播放|boolean|true,false|false
loop|是否无限循环|boolean|true,false|true
active|指定默认显示的图片索引|number|-|1
width|容器的宽度|string,number|-|100%
height|容器的高度|string,number|-|200px
### Events
名称|描述|参数
---|---|---
click|点击图片时的回调|当前被点击轮播Item索引
change|图片切换后的回调|当前轮播Item索引
## CarouselItem
### Slots
名称|描述
---|---
-|需要显示的内容
