<template>
  <kw-layout>
    <kw-nav>InputNumber</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本用法">
        <kw-input-number v-model="value"></kw-input-number>
      </demo-block>
      <demo-block title="取值范围">
        <kw-input-number :min="0" :max="10"></kw-input-number>
      </demo-block>
      <demo-block title="步数">
        <kw-input-number :step="2"></kw-input-number>
      </demo-block>
      <demo-block title="尺寸大小">
        <kw-input-number size="small"></kw-input-number>
        <br><br>
        <kw-input-number></kw-input-number>
        <br><br>
        <kw-input-number size="large"></kw-input-number>
      </demo-block>
      <demo-block title="禁用状态">
        <kw-input-number disabled></kw-input-number>
      </demo-block>
      <demo-block title="只读">
        <kw-input-number readonly v-model="value"></kw-input-number>
      </demo-block>
      <demo-block title="是否可编辑">
        <kw-input-number :editable="false"></kw-input-number>
      </demo-block>
      <demo-block title="加减按钮事件处理">
        <kw-input-number @plus="handlePlus" @minus="handleMinus" v-model="value"></kw-input-number>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>

<script>
  export default {
    data () {
      return {
        value: 2
      }
    },
    methods: {
      handlePlus (newVal, oldVal) {
        this.$toast(`当前值为：${newVal}，旧值为：${oldVal}`)
      },
      handleMinus (newVal, oldVal) {
        this.$toast(`当前值为：${newVal}，旧值为：${oldVal}`)
      }
    }
  }
</script>

<style>

</style>
