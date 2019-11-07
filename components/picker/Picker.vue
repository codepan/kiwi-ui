<template>
  <kw-popup v-model="visible" position="bottom" v-if="popup">
    <div class="kw-picker" v-if="visible" @touchmove.prevent="">
      <div class="kw-picker-header">
        <kw-button type="text" color="stable" @click="cancel">取消</kw-button>
        <kw-button type="text" color="primary" @click="confirm">确定</kw-button>
      </div>
      <section class="kw-picker-body" :style="pickerBodyStyle" ref="svPickerBodyRef">
        <kw-picker-slot
        v-for="(slot, index) in computedSlots"
        :key="index"
        :data="slot"
        :index="index"
        :item-height="itemHeight"
        @change="handleSlotChange"></kw-picker-slot>
      </section>
    </div>
  </kw-popup>
  <div class="kw-picker" @touchmove.prevent="" v-else>
    <section class="kw-picker-body" :style="pickerBodyStyle" ref="svPickerBodyRef">
      <kw-picker-slot
        v-for="(slot, index) in computedSlots"
        :key="index"
        :data="slot"
        :index="index"
        :item-height="itemHeight"
        @change="handleSlotChange"></kw-picker-slot>
    </section>
  </div>
</template>

<script>
  import { type as typeUtil } from '~src/utils'
  import kwPickerSlot from './picker-slot'
  let itemHeight = 35

  export default {
    name: 'kw-picker',
    components: {
      kwPickerSlot
    },
    data () {
      return {
        itemHeight: 35,
        visible: false,
        computedSlots: this.processSlots(),
        pickerSlots: []
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      popup: {
        type: Boolean,
        default: false
      },
      slots: {
        type: Array,
        default () {
          return []
        }
      },
      divider: {
        type: [String, Array],
        default: '-'
      },
      visualCount: {
        type: Number,
        default () {
          if (this.popup) return 9
          return 4
        },
        validator (visualCount) {
          if (!Number.isSafeInteger(visualCount)) {
            return false
          }

          if (visualCount <= 0) {
            return false
          }

          return true
        }
      }
    },
    computed: {
      pickerBodyStyle () {
        return {
          height: `${itemHeight * (this.visualCount - 1)}px`
        }
      }
    },
    watch: {
      value (val) {
        this.visible = val
        this.$nextTick(() => {
          val && this.change(0)
        })
      },
      visible (val) {
        this.$emit('input', val)
      },
    },
    methods: {
      processSlot (slot) {
        if (!slot || !Array.isArray(slot)) {
          return
        }

        let newSlot = []
        slot.forEach(entry => {
          if (!typeUtil.isObject(entry)) {
            newSlot.push({
              text: entry,
              value: entry
            })
          } else {
            newSlot.push(entry)
          }
        })

        return newSlot
      },
      processSlots () {
        return this.slots.map(slot => {
          return this.processSlot(slot)
        })
      },
      addPickerSlot (pickerSlot) {
        this.pickerSlots.push(pickerSlot)
      },
      getPickerSlot (slotIndex) {
        return this.pickerSlots[slotIndex]
      },
      cancel (event) {
        this.$emit('cancel', event)
        this.visible = false
      },
      confirm () {
        this.$emit('confirm', {
          values: this.getSelectedValues(),
          indexes: this.getSelectedIndexes(),
          texts: this.getSelectedTexts()
        })
        this.visible = false
      },
      setSlot (slotIndex, slot, isResetSelectedIndex = false) {
        const slotSelectedIndex = this.getSlotSelectedIndex(slotIndex)
        this.$set(this.computedSlots, slotIndex, slot)
        if (isResetSelectedIndex) {
          this.setSlotSelectedIndex(slotIndex, 0)
          return
        }

        if (slotSelectedIndex > slot.length - 1) {
          this.setSlotSelectedIndex(slotIndex, slot.length - 1)
        } else {
          this.setSlotSelectedIndex(slotIndex, this.getSlotSelectedIndex(slotIndex))
        }
      },
      setSlots (slots) {
        this.computedSlots = this.slots.map(slot => {
          return this.processSlot(slot)
        })
      },
      setSlotSelectedValue (slotIndex, selectedValue) {
        const selectedIndex = this.computedSlots[slotIndex].findIndex(slot => {
          return slot.value === selectedValue
        })
        this.setSlotSelectedIndex(slotIndex, selectedIndex)
      },
      getSlotSelectedValue (slotIndex) {
        return this.computedSlots[slotIndex][this.getSlotSelectedIndex(slotIndex)].value
      },
      setSlotSelectedIndex (slotIndex, selectedIndex) {
        const pickerSlot = this.getPickerSlot(slotIndex)
        pickerSlot.translateHandle(-selectedIndex * itemHeight, true)
        pickerSlot.rotateWheel(-selectedIndex * itemHeight, true)
        pickerSlot.setSelectedData(selectedIndex)
      },
      getSlotSelectedIndex (slotIndex) {
        return this.getPickerSlot(slotIndex).selectedData.index
      },
      setSlotSelectedText (slotIndex, selectedText) {
        const selectedIndex = this.computedSlots[slotIndex].findIndex(slot => {
          return slot.text === selectedText
        })
        this.setSlotSelectedIndex(slotIndex, selectedIndex)
      },
      getSlotSelectedText (slotIndex) {
        const pickerSlot = this.getPickerSlot(slotIndex)
        return pickerSlot.selectedData.text
      },
      setSelectedValues (values) {
        values.forEach((value, index) => {
          this.setSlotSelectedValue(index, value)
        })
      },
      getSelectedValues () {
        let values = []

        for (let i = 0; i < this.computedSlots.length; i++) {
          values.push(this.getSlotSelectedValue(i))
        }
        return values
      },
      setSelectedIndexes (indexes) {
        for (let i = 0; i < this.computedSlots.length; i++) {
          this.setSlotSelectedIndex(indexes[i])
        }
      },
      getSelectedIndexes () {
        let indexes = []

        for (let i = 0; i < this.computedSlots.length; i++) {
          indexes.push(this.getSlotSelectedIndex(i))
        }
        return indexes
      },
      setSelectedTexts (texts) {
        for (let i = 0; i < this.computedSlots.length; i++) {
          this.setSlotSelectedText(i, texts[i])
        }
      },
      getSelectedTexts () {
        let texts = []
        this.slots.forEach((slot, index) => {
          texts.push(this.getSlotSelectedText(index))
        })
        return texts
      },
      handleSlotChange (pickerSlot, slotIndex, slotSelectedIndex) {
        this.change(slotIndex)
      },
      change (slotIndex) {
        const slotSelectedIndex = this.getSlotSelectedIndex(slotIndex)
        this.$emit('change', this, slotIndex, slotSelectedIndex)
      }
    },
    created () {
      if (this.popup){
        this.visible = this.value
      }
    }
  }
</script>

<style lang="scss">
  .kw-picker{
    .kw-picker-header{
      display: flex;
      justify-content: space-between;
    }
    .kw-picker-body{
      display: flex;
      font-size: 14px;
      overflow: hidden;
      .kw-picker-slot{
        flex: 1;
        position: relative;
        .kw-picker-handle, .kw-picker-wheel{
          position: absolute;
          top:50%;
          transform: translateY(-50%);
          width: 100%;
          border-top: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          font-size: 16px;
          .kw-picker-handle-list{
            .kw-picker-handle-item{
            }
          }
          .kw-picker-list{
            margin: 0;
            padding: 0;
            .kw-picker-item{
              margin: 0;
              padding: 0;
              list-style: none;
              text-align: center;
            }
          }
        }
        .kw-picker-handle{
          overflow: hidden;
          z-index: 2;
          color: $title-color;
        }
        .kw-picker-wheel{
          z-index: 1;
          color: $content-color;
        }
        .kw-picker-wheel{
          width: 100%;
          position: relative;
          .kw-picker-wheel-list{
            transform-style: preserve-3d;
            width: 100%;
            left: 50%;
            .kw-picker-wheel-item{
              backface-visibility: hidden;
              position: absolute;
              top: 0;
              left:0;
              width: 100%;
              &.is-hidden{
                display: none;
              }
            }
          }
        }
      }
    }
  }
</style>
