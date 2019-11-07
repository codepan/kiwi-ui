<template>
  <kw-layout>
    <kw-nav>Button 按钮</kw-nav>
    <kw-main has-nav>
      <demo-block title="按钮颜色">
        <kw-button>白色</kw-button>
        <kw-button color="stable">灰色</kw-button>
        <kw-button color="primary">蓝色</kw-button>
        <kw-button color="info">信息</kw-button>
        <kw-button color="success">成功</kw-button>
        <kw-button color="warning">警告</kw-button>
        <kw-button color="danger">危险</kw-button>
        <kw-button color="lively">橙色</kw-button>
        <kw-button color="royal">紫色</kw-button>
      </demo-block>
      <demo-block title="按钮尺寸">
        <kw-button size="small">small</kw-button>
        <kw-button>default</kw-button>
        <kw-button size="large">large</kw-button>
        <kw-button color="info" size="full">full</kw-button>
      </demo-block>
      <demo-block title="按钮类型">
        <kw-button color="primary">Default</kw-button>
        <kw-button type="outline" color="primary">Outline</kw-button>
        <kw-button type="text" color="primary">Text</kw-button>
      </demo-block>
      <demo-block title="按钮形状">
        <kw-button shape="rect" color="primary">rect</kw-button>
        <kw-button color="primary">Default</kw-button>
        <kw-button shape="round" color="primary">round</kw-button>
        <kw-button shape="circle" color="primary">circle</kw-button>
      </demo-block>
      <demo-block title="含有Icon">
        <kw-button color="info" icon="star" shape="circle"></kw-button>
        <kw-button color="info" icon="star">级别</kw-button>
      </demo-block>
      <demo-block title="设置圆角尺寸">
        <kw-button color="royal" radius="8">圆角为8</kw-button>
      </demo-block>
      <demo-block title="禁用">
        <kw-button disabled>禁用</kw-button>
        <kw-button disabled color="lively">禁用</kw-button>
        <kw-button disabled color="lively" type="outline">禁用</kw-button>
      </demo-block>
      <demo-block title="含加载动画">
        <kw-button loading>保存</kw-button>
        <kw-button loading loading-text="保存中..." color="primary">保存</kw-button>
        <kw-button :loading="loading" loading-text="加载中..." loading-type="snake" color="primary" type="outline" @click="handleClick">重试</kw-button>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    handleClick () {
      this.loading = true
      window.setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>
