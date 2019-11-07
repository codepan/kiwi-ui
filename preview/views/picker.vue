<template>
  <div>
    <kw-layout>
      <kw-nav>Picker 选择器</kw-nav>
      <kw-main has-nav>
        <demo-block title="默认Picker">
          <p class="notice">您选择的季节为：{{value0}}</p>
          <kw-picker @change="handleChange0" :slots="slots0"></kw-picker>
        </demo-block>
         <demo-block title="多级联动">
           <p class="notice">您选择的四大名著人物为：{{value1}}</p>
           <kw-picker @change="handleChange1" :slots="slots1"></kw-picker>
        </demo-block>
        <demo-block title="Popup形式">
          <kw-button @click="visible = true">选择您的爱好</kw-button>
        </demo-block>
      </kw-main>
    </kw-layout>
    <kw-picker popup v-model="visible" @confirm="handleConfirm" :slots="slots2"></kw-picker>
  </div>
</template>
<script>
  const cascadeSlotData = [
    [
      {
        text: '张飞',
        value: 1
      },
      {
        text: '关羽',
        value: 2
      },
      {
        text: '曹操',
        value: 3
      },
      {
        text: '刘备',
        value: 4
      }
    ],
    [
      {
        text: '林冲',
        value: 1
      },
      {
        text: '鲁智深',
        value: 2
      },
      {
        text: '吴用',
        value: 3
      },
      {
        text: '孙二娘',
        value: 4
      }
    ],
    [
      {
        text: '孙悟空',
        value: 1
      },
      {
        text: '沙僧',
        value: 2
      },
      {
        text: '猪八戒',
        value: 3
      },
      {
        text: '唐僧',
        value: 4
      },
      {
        text: '如来佛',
        value: 5
      }
    ],
    [
      {
        text: '林黛玉',
        value: 1
      },
      {
        text: '贾宝玉',
        value: 2
      },
      {
        text: '王熙凤',
        value: 3
      },
      {
        text: '夏金桂',
        value: 4
      }
    ]
  ]
  export default {
    data () {
      return {
        visible: false,
        value0: '',
        value1: '',
        slots0: [
          [
            {
              text: '春',
              value: 1
            },
            {
              text: '夏',
              value: 2
            },
            {
              text: '秋',
              value: 3
            },
            {
              text: '冬',
              value: 4
            }
          ]
        ],
        slots1: [
          [
            {
              text: '三国演义',
              value: 1
            },
            {
              text: '水浒传',
              value: 2
            },
            {
              text: '西游记',
              value: 3
            },
            {
              text: '红楼梦',
              value: 4
            }
          ],
          cascadeSlotData[0]
        ],
        slots2: [
          ['喝酒', '抽烟', '烫头']
        ]
      }
    },
    methods: {
      handleConfirm ({ values, indexes, texts }) {
        this.$dialog.alert(`
        <p>选择的value：${values.join('-')}</p>
        <p>选择的index：${indexes.join('-')}</p>
        <p>选择的text：${texts.join('-')}</p>
        `)
      },
      handleChange0 (picker) {
        const texts = picker.getSelectedTexts()
        this.value0 = texts.join('---')
      },
      handleChange1 (picker, slotIndex, slotSelectedIndex) {
        console.log(slotIndex, slotSelectedIndex)
        if (slotIndex === 0) {
          picker.setSlot(1, cascadeSlotData[slotSelectedIndex])
        }
        const texts = picker.getSelectedTexts()
        this.value1 = texts.join('---')
      }
    }
  }
</script>
<style lang="scss">
.notice {
  font-size: 14px;
  color: $subtitle-color;
}
</style>