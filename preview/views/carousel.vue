<template>
  <kw-layout>
    <kw-nav>Carousel 轮播图</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本用法">
        <kw-carousel :images="images"></kw-carousel>
      </demo-block>
      <demo-block title="隐藏索引指示器">
        <kw-carousel :images="images" hide-indicator></kw-carousel>
      </demo-block>
      <demo-block title="自动播放">
        <kw-carousel :images="images" autoplay></kw-carousel>
      </demo-block>
      <demo-block title="禁止循环轮播">
        <kw-carousel :images="images" :loop="false"></kw-carousel>
      </demo-block>
      <demo-block title="默认显示">
        <kw-carousel :images="images" :active="2"></kw-carousel>
      </demo-block>
      <demo-block title="事件">
        <kw-carousel :images="images" @click="handleClick" @change="handleChange"></kw-carousel>
      </demo-block>
      <demo-block title="自定义轮播Item">
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
      </demo-block>
      <demo-block title="指定容器的宽高">
        <kw-carousel :images="images" height="100" width="200"></kw-carousel>
      </demo-block>
    </kw-main>
  </kw-layout>
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
