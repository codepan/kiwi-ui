<template>
  <kw-layout>
    <kw-nav>Badge 角标</kw-nav>
    <kw-main has-nav>
      <demo-block title="角标颜色">
        <kw-badge>2</kw-badge>
        <kw-badge color="primary">2</kw-badge>
        <kw-badge color="stable">12</kw-badge>
        <kw-badge color="success">128</kw-badge>
      </demo-block>
      <demo-block title="角标宽度">
        <kw-badge width="100">100px</kw-badge>
      </demo-block>
      <demo-block title="角标类型">
        <kw-badge type="fill">3</kw-badge>
        <kw-badge type="outline">3</kw-badge>
      </demo-block>
      <demo-block title="圆形角标">
        <kw-badge circle>4</kw-badge>
        <kw-badge circle>44</kw-badge>
        <kw-badge circle>444</kw-badge>
      </demo-block>
      <demo-block title="角标尺寸">
        <kw-badge size="small">10</kw-badge>
        <kw-badge>10</kw-badge>
        <kw-badge size="large">10</kw-badge>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
<script>
  export default {
    methods: {
      handleSwitch (check) {
        this.$toast({
          message: check ? 'ON' : 'OFF',
          duration: 500
        })
      }
    }
  }
</script>
