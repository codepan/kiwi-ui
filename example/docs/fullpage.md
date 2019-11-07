# Fullpage（全屏切换）
##### 全屏切换功能常见于功能简介
###### 多是大图片切换
---
## 示例
### 大图片全屏切换
配合FullpageItem组件使用，需要切换的内容放置在FullpageItem组件中的默认slot中即可
```html
<template>
  <kw-fullpage>
    <kw-fullpage-item v-for="(image, $index) in images" :key="$index">
      <img :src="image" class="image"/>
    </kw-fullpage-item>
  </kw-fullpage>
</template>
<script>
  import image1 from '../assets/images/fullpage/1.jpg'
  import image2 from '../assets/images/fullpage/2.jpg'
  import image3 from '../assets/images/fullpage/3.jpg'
  export default {
    data () {
      return {
        images: [image1, image2, image3]
      }
    }
  }
</script>
<style lang="scss">
  .image{
    width: 100%;
    height: 100%;
  }
</style>
```
# API
### Slots
名称|描述
---|---
-|内容
### Events
名称|描述|参数
---|---|---|---|---
change|通过v-model来指定，控制组件的显示与否|boolean|`true` `false`|false
