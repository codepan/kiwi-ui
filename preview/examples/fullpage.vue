<template>
  <kw-layout>
    <kw-nav>大图片全屏切换</kw-nav>
    <kw-main has-nav>
      <kw-fullpage>
        <kw-fullpage-item v-for="(image, $index) in images" :key="$index">
          <img :src="image" class="image"/>
        </kw-fullpage-item>
      </kw-fullpage>
    </kw-main>

  </kw-layout>
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
    },
    methods: {
    }
  }
</script>
<style lang="scss">
  .image{
    width: 100%;
    height: 100%;
  }
</style>
