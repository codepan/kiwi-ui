<template>
  <kw-layout>
    <kw-nav>Countdown 倒计时</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本用法">
        <kw-countdown :end-time="endTime"></kw-countdown>
      </demo-block>
      <demo-block title="格式化结果值">
        <kw-countdown :end-time="endTime" format="hh-mm-ss" @change="handleChange"></kw-countdown>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>

<script>
  export default {
    data () {
      return {
        time: ''
      }
    },
    computed: {
      endTime () {
        let date = new Date()
        date.setDate(date.getDate() + 2)
        return date
      }
    },
    methods: {
      handleChange (time) {
        this.time = time
      }
    }
  }
</script>

<style>

</style>
