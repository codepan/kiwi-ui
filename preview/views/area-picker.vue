<template>
  <div>
    <kw-layout>
      <kw-nav>AreaPicker</kw-nav>
      <kw-main has-nav>
        <demo-block title="简单使用">
          <kw-button @click="openAreaPicker(0)">简单使用</kw-button>
        </demo-block>
        <demo-block title="指定显示级别">
          <kw-button @click="openAreaPicker(1)">level设置为2级</kw-button>
        </demo-block>
         <demo-block title="自定义区域数据">
          <kw-button @click="openAreaPicker(2)">自定义区域数据</kw-button>
        </demo-block>
      </kw-main>
    </kw-layout>
    <kw-area-picker v-model="visible0" @confirm="handleConfirm"></kw-area-picker>
    <kw-area-picker v-model="visible1" @confirm="handleConfirm" :level="2"></kw-area-picker>
    <kw-area-picker v-model="visible2" :slots="slots" @confirm="handleConfirm" @change="handleChange"></kw-area-picker>
    <!-- <kw-area-picker :level="2" ref="distPickerRef2"></kw-area-picker> -->
  </div>
</template>
<script>
  export default {
    data () {
      return {
        visible0: false,
        visible1: false,
        visible2: false,
        cities: [
          [
            {
              text: '西安',
              value: 11
            },
            {
              text: '宝鸡',
              value: 12
            }
          ],
          [
            {
              text: '兰州',
              value: 13
            },
            {
              text: '天水',
              value: 14
            }
          ]
        ],
        slots: [
          [
            {
              text: '陕西',
              value: '01'
            },
            {
              text: '甘肃',
              value: '02'
            }
          ],
          []
        ]
      }
    },
    methods: {
      openAreaPicker (index) {
        this[`visible${index}`] = true
      },
      getCities (provinceIndex) {
        return this.cities[provinceIndex]
      },
      handleChange (picker, slotIndex, slotSelectedIndex) {
        if (slotIndex === 0) {
          picker.setSlot(1, this.getCities(slotSelectedIndex))
        }
      },
      handleConfirm ({ texts }) {
        this.$dialog({
          title: '您选择的区域是：',
          message: texts.join('-')
        })
      }
    }
  }
</script>
