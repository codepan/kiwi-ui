<template>
  <kw-layout>
    <kw-nav>Previewer 图片预览</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本用法">
        <kw-button @click="visible = true">图片预览</kw-button>
      </demo-block>
      <demo-block title="不显示指示器">
        <kw-button @click="visible1 = true">图片预览</kw-button>
      </demo-block>
      <demo-block title="指示器位置">
        <kw-button @click="visible2 = true">图片预览</kw-button>
      </demo-block>
      <demo-block title="默认显示">
        <kw-button @click="visible3 = true">图片预览</kw-button>
      </demo-block>
      <demo-block title="显示关闭按钮，禁止默认关闭行为">
        <kw-button @click="visible4 = true">图片预览</kw-button>
      </demo-block>
      <demo-block title="自定义指示器">
        <kw-button @click="visible5 = true">图片预览</kw-button>
      </demo-block>
      <demo-block title="插件形式">
        <kw-button @click="openPreviewer">图片预览</kw-button>
      </demo-block>
    </kw-main>
    <kw-previewer :images="images" v-model="visible"></kw-previewer>
    <kw-previewer :images="images" v-model="visible1" :indicator="false"></kw-previewer>
    <kw-previewer :images="images" v-model="visible2" indicator-position="top"></kw-previewer>
    <kw-previewer :images="images" v-model="visible3" :index="1"></kw-previewer>
    <kw-previewer :images="images" v-model="visible4" :closable="false" close-icon></kw-previewer>
    <kw-previewer :images="images" v-model="visible5" @change="handleChange">
      <div slot="indicator">
        <span>{{index + 1}}</span>
        <span>/</span>
        <span>{{images.length}}</span>
      </div>
    </kw-previewer>
  </kw-layout>
</template>

<script>
  import image1 from '../assets/images/previewer/image1.jpg'
  import image2 from '../assets/images/previewer/image2.jpg'
  import image3 from '../assets/images/previewer/image3.jpg'
  export default {
    data () {
      return {
        images: [image1, image2, image3],
        index: 0,
        visible: false,
        visible1: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false
      }
    },
    methods: {
      handleChange (index) {
        this.index = index
      },
      openPreviewer () {
        this.$previewer({
          images: [image1, image2, image3],
          index: 1,
          closable: false,
          closeIcon: true
        })
      }
    }
  }
</script>
