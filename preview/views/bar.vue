<template>
  <kw-layout>
    <kw-nav>Bar 栏</kw-nav>
    <kw-main has-nav>
      <demo-block title="标题">
        <kw-bar title="标题文字"></kw-bar>
        <br/>
        <kw-bar>自定义标的标题文字</kw-bar>
      </demo-block>
      <demo-block title="背景颜色与标题颜色">
        <kw-bar title="红色背景" bg-color="danger"></kw-bar>
        <br/>
        <kw-bar title="绿色背景" bg-color="success"></kw-bar>
        <br/>
        <kw-bar title="绿色标题" color="success"></kw-bar>
        <br/>
        <kw-bar title="白色标题绿色背景" bg-color="success" color="light"></kw-bar>
        <br/>
        <kw-bar title="白色标题黑色背景" bg-color="#333" color="light"></kw-bar>
      </demo-block>
      <demo-block title="左侧和右侧">
        <kw-bar title="标题文字">
          <kw-icon slot="left" icon="arrow-left"></kw-icon>
          <kw-icon slot="right" icon="menu"></kw-icon>
        </kw-bar>
      </demo-block>
      <demo-block title="指定高度">
        <kw-bar title="高度为60px" height="60"></kw-bar><br/>
        <kw-bar title="高度为40px" height="40px"></kw-bar>
      </demo-block>
      <demo-block title="左侧含有返回功能">
        <kw-bar title="导航栏" has-back></kw-bar><br/>
        <kw-bar title="导航栏" has-back back-text="返回"></kw-bar><br/>
        <kw-bar title="导航栏" has-back>
          <template slot="back">
            <kw-icon icon="arrow-left"></kw-icon>
            <span>上一步</span>
          </template>
        </kw-bar>
      </demo-block>
      <demo-block title="处理返回功能">
        <kw-bar title="导航栏" has-back :back="goBack"></kw-bar><br/>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
<script>
  export default {
    methods: {
      goBack (next) {
        this.$dialog.confirm('您确定要离开吗？', '提示', {
          confirmButtonText: '再想想',
          cancelButtonText: '去意已决'
        }).catch(() => {
          next()
        })
      }
    }
  }
</script>
