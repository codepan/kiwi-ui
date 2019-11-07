<template>
  <div>
    <kw-layout>
      <kw-nav>DatetimePicker</kw-nav>
      <kw-main has-nav>
        <demo-block title="默认为DatetimePicker，包括年月日时分">
          <kw-button @click="openDatetimePicker(0)">Datetime Picker</kw-button>
        </demo-block>
        <demo-block title="不同的显示类型">
          <kw-button @click="openDatetimePicker(1)">Date Picker</kw-button>
          <kw-button @click="openDatetimePicker(2)">Time Picker</kw-button>
        </demo-block>
        <demo-block title="格式化结果值">
          <kw-button @click="openDatetimePicker(3)">yyyy-MM-dd hh:mm</kw-button>
          <kw-button @click="openDatetimePicker(4)">yyyy年MM月dd日</kw-button>
        </demo-block>
        <demo-block title="限定显示范围">
          <kw-button @click="openDatetimePicker(5)">限定年份的显示范围</kw-button>
        </demo-block>
        <demo-block title="默认选中">
          <kw-button @click="openDatetimePicker(6)">数组形式</kw-button>
          <kw-button @click="openDatetimePicker(7)">字符串形式</kw-button>
          <kw-button @click="openDatetimePicker(8)">日期对象形式</kw-button>
        </demo-block>
        <demo-block title="美化显示">
          <kw-button @click="openDatetimePicker(9)">美化显示</kw-button>
        </demo-block>
      </kw-main>
    </kw-layout>
    <kw-datetime-picker v-model="visible0" @confirm="handleConfirm0"></kw-datetime-picker>
    <kw-datetime-picker v-model="visible1" type="date" @confirm="handleConfirm1"></kw-datetime-picker>
    <kw-datetime-picker v-model="visible2" type="time" @confirm="handleConfirm2"></kw-datetime-picker>
    <kw-datetime-picker v-model="visible3" format="yyyy-MM-dd hh:mm" @confirm="handleConfirm3"></kw-datetime-picker>
    <kw-datetime-picker v-model="visible4" format="yyyy年MM月dd日" @confirm="handleConfirm4"></kw-datetime-picker>
    <kw-datetime-picker v-model="visible5" :min-year="2016" :max-year="2020"></kw-datetime-picker>
    <kw-datetime-picker v-model="visible6" :select="select0"></kw-datetime-picker>
    <kw-datetime-picker v-model="visible7" :select="select1"></kw-datetime-picker>
    <kw-datetime-picker v-model="visible8" :select="select2"></kw-datetime-picker>
    <kw-datetime-picker v-model="visible9" format-year="yyyy年" format-month="MM月" format-date="dd日" format-hour="hh时" format-minute="mm分"></kw-datetime-picker>
    <!-- <kw-datetime-picker ref="datetimePickerRef8" :select="dateValue2"></kw-datetime-picker>
    <kw-datetime-picker ref="datetimePickerRef9" :select="dateValue3"></kw-datetime-picker> --> -->
  </div>
</template>
<script>
  export default {
    data () {
      return {
        visible0: false,
        visible1: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false,
        visible6: false,
        visible7: false,
        visible8: false,
        visible9: false,
        select0: [2013, 9, 21, 4, 30],
        select1: '2013-9-21 4:30',
        select2: new Date(2013, 8, 21, 4, 30)
      }
    },
    methods: {
      openDatetimePicker (index) {
        this[`visible${index}`] = true
      },
      handleConfirm0 ({ values }) {
        this.$dialog.alert(new Date(...values).toLocaleString(), '选择的日期为：')
      },
      handleConfirm1 ({ texts }) {
        this.$dialog.alert(texts.join('-'), '选择的日期为：')
      },
      handleConfirm2 ({ texts }) {
        this.$dialog.alert(`${texts[0]}点${texts[1]}分`, '选择的时间为：')
      },
      handleConfirm3 (dateString) {
        this.$dialog.alert(dateString, '选择的时间为：')
      },
      handleConfirm4 (dateString) {
        this.$dialog.alert(dateString, '选择的时间为：')
      }
    }
  }
</script>
