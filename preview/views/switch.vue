<template>
  <kw-layout>
    <kw-nav>Switch 开关</kw-nav>
    <kw-main has-nav>
      <demo-block title="指定value值">
        <kw-switch v-model="switchValue"></kw-switch>
      </demo-block>
      <demo-block title="颜色">
        <kw-switch v-model="switchValue1" color="danger"></kw-switch>
        <kw-switch v-model="switchValue2" color="info"></kw-switch>
      </demo-block>
      <demo-block title="尺寸">
        <kw-switch v-model="switchValue3" size="small"></kw-switch>
        <kw-switch v-model="switchValue4"></kw-switch>
        <kw-switch v-model="switchValue5" size="large"></kw-switch>
      </demo-block>
      <demo-block title="文字和图标">
        <kw-switch v-model="switchValue6">
          <span slot="on">开</span>
          <span slot="off">关</span>
        </kw-switch>
        <kw-switch v-model="switchValue11" color="success">
          <span slot="on">开</span>
          <span slot="off">关</span>
        </kw-switch>
        <kw-switch v-model="switchValue7" size="large">
          <span slot="on">开启</span>
          <span slot="off">关闭</span>
        </kw-switch>
        <kw-switch v-model="switchValue8">
          <kw-icon icon="check" slot="on" color="success"></kw-icon>
          <kw-icon icon="close" slot="off"></kw-icon>
        </kw-switch>
      </demo-block>
      <demo-block title="不可用">
        <kw-switch disabled></kw-switch>
        <kw-switch v-model="switchValue9" disabled color="info"></kw-switch>
      </demo-block>
      <demo-block title="监听switch事件">
        <kw-switch v-model="switchValue10" @switch="handleSwitch"></kw-switch>
      </demo-block>

    </kw-main>
  </kw-layout>
</template>
<script>
  export default {
    data () {
      return {
        switchValue: false,
        switchValue1: false,
        switchValue2: false,
        switchValue3: false,
        switchValue4: false,
        switchValue5: false,
        switchValue6: false,
        switchValue7: false,
        switchValue8: false,
        switchValue9: true,
        switchValue10: false,
        switchValue11: false
      }
    },
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
