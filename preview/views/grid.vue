<template>
  <kw-layout>
    <kw-nav>Grid 九宫格</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本用法">
        <kw-grid>
          <kw-grid-item>昨天</kw-grid-item>
          <kw-grid-item>今天</kw-grid-item>
          <kw-grid-item>明天</kw-grid-item>
          <kw-grid-item>后天</kw-grid-item>
        </kw-grid>
      </demo-block>
      <demo-block title="显示边框">
        <kw-grid has-border>
          <kw-grid-item>昨天</kw-grid-item>
          <kw-grid-item>今天</kw-grid-item>
          <kw-grid-item>明天</kw-grid-item>
          <kw-grid-item>后天</kw-grid-item>
        </kw-grid>
      </demo-block>
      <demo-block title="控制每行单元格数量">
        <kw-grid :cols="2">
          <kw-grid-item>昨天</kw-grid-item>
          <kw-grid-item>今天</kw-grid-item>
          <kw-grid-item>明天</kw-grid-item>
          <kw-grid-item>后天</kw-grid-item>
        </kw-grid>
      </demo-block>
      <demo-block title="带有icon的单元格">
        <kw-grid>
          <kw-grid-item icon="close">昨天</kw-grid-item>
          <kw-grid-item>
            <kw-icon icon="search" color="danger" slot="icon"></kw-icon>
            今天
          </kw-grid-item>
          <kw-grid-item>
            <kw-icon icon="user" color="info" slot="icon"></kw-icon>
            明天
          </kw-grid-item>
          <kw-grid-item icon="exit">后天</kw-grid-item>
        </kw-grid>
      </demo-block>
      <demo-block title="对齐方式">
        <kw-grid has-border>
          <kw-grid-item align="right">昨天</kw-grid-item>
          <kw-grid-item>今天</kw-grid-item>
          <kw-grid-item align="left">明天</kw-grid-item>
          <kw-grid-item>后天</kw-grid-item>
        </kw-grid>
      </demo-block>
      <demo-block title="指定单元格高度">
        <kw-grid item-height="item-width" has-border>
          <kw-grid-item>昨天</kw-grid-item>
          <kw-grid-item>今天</kw-grid-item>
          <kw-grid-item>明天</kw-grid-item>
          <kw-grid-item>后天</kw-grid-item>
        </kw-grid>
      </demo-block>

      <demo-block title="单元格间距">
        <kw-grid item-height="item-width" has-border item-spacing="4">
          <kw-grid-item>昨天</kw-grid-item>
          <kw-grid-item>今天</kw-grid-item>
          <kw-grid-item>明天</kw-grid-item>
          <kw-grid-item>后天</kw-grid-item>
        </kw-grid>
        <br/>
        <kw-grid item-height="item-width" item-spacing="4">
          <kw-grid-item v-for="(image, index) in images" :key="index">
            <img :src="image" style="width: 100%;height: 100%;"/>
          </kw-grid-item>
          <kw-grid-item class="plus-item">
            <kw-icon icon="add" size="60" color="light"></kw-icon>
          </kw-grid-item>
        </kw-grid>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>

<script>
  import image0 from '../assets/images/grid/0.jpg'
  import image1 from '../assets/images/grid/1.jpg'
  import image2 from '../assets/images/grid/2.jpg'
  import image3 from '../assets/images/grid/3.jpg'
  export default {
    data () {
      return {
        images: [image0, image1, image2, image3]
      }
    }
  }
</script>
<style>
  .plus-item{
    background: #d8d8d8;
  }
</style>
