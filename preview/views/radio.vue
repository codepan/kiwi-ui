<template>
  <kw-layout>
    <kw-nav>Radio 单选框</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本使用">
        <kw-radio-group  v-model="radioValue">
          <kw-radio name="1">选项一</kw-radio>
          <kw-radio name="2" label="选项二"></kw-radio>
        </kw-radio-group>
      </demo-block>
      <demo-block title="列表样式">
        <kw-radio-group  v-model="radioValue1" list>
          <kw-radio name="1">选项一</kw-radio>
          <kw-radio name="2">选项二</kw-radio>
          <kw-radio name="3">选项三</kw-radio>
        </kw-radio-group>
      </demo-block>
      <demo-block title="设置禁用选项">
        <kw-radio-group  v-model="radioValue2" list disabled>
          <kw-radio name="1">选项一</kw-radio>
          <kw-radio name="2">选项二</kw-radio>
          <kw-radio name="3">选项三</kw-radio>
        </kw-radio-group>
      </demo-block>
      <demo-block title="设置选中颜色">
        <kw-radio-group  v-model="radioValue3" color="success">
          <kw-radio name="1">选项一</kw-radio>
          <kw-radio name="2">选项二</kw-radio>
          <kw-radio name="3">选项三</kw-radio>
        </kw-radio-group>
      </demo-block>
      <demo-block title="右对齐">
        <kw-radio-group  v-model="radioValue4" list align="right">
          <kw-radio name="1">项目经验</kw-radio>
          <kw-radio name="2" label="爱好"></kw-radio>
          <kw-radio name="3" label="工作经验"></kw-radio>
          <kw-radio name="4" label="特长"></kw-radio>
        </kw-radio-group>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
<script>
  export default {
    data: () => ({
      radioValue: '1',
      radioValue1: '1',
      radioValue2: '1',
      radioValue3: '1',
      radioValue4: '1'
    }),
    methods: {
      handleChange (value) {
        this.$toast({
          position: 'bottom',
          message: `您选择的值为 ${value}`,
          duration: 500
        })
      }
    }
  }
</script>
