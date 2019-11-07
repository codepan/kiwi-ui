<template>
  <kw-picker
    popup
    v-model="visible"
    :slots="computedSlots"
    @cancel="cancel"
    @confirm="handleConfirm"
    @change="handleChange">
  </kw-picker>
</template>

<script>
  import area from './area.json'
  import kwPicker from '../picker/Picker'
  export default {
    name: 'kw-area-picker',
    components: {
      kwPicker
    },
    data () {
      return {
        visible: false,
        currentValue: [],
        defaultSlots: [this.getProvinces(), this.getCities(0), this.getDistricts(0, 0)]
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      level: {
        type: Number,
        default: 3,
        validator (val) {
          if (val !== 1 && val !== 2 && val !== 3) {
            console.error('prop "level" value can only be 1,2 or 3')
            return false
          }
          return true
        }
      },
      slots: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      computedSlots () {
        if (this.slots.length) return this.slots
        return this.defaultSlots.slice(0, this.level)
      }
    },
    watch: {
      value: {
        handler (val) {
          this.visible = val
        },
        immidate: true
      },
      visible (val) {
        this.$emit('input', val)
      }
    },
    methods: {
      cancel (event) {
        this.$emit('cancel', event)
      },
      handleConfirm (result) {
        this.$emit('confirm', result)
      },
      getProvinces () {
        let slot = []
        area.forEach(({ text, value }) => {
          slot.push({
            text,
            value
          })
        })
        return slot
      },
      getCities (provinceIndex) {
        let slot = []
        area[provinceIndex].cities.forEach(({ text, value }) => {
          slot.push({
            text,
            value
          })
        })
        return slot
      },
      getDistricts (provinceIndex, cityIndex) {
        let slot = []
        area[provinceIndex].cities[cityIndex].districts.forEach(({ text, value }) => {
          slot.push({
            text,
            value
          })
        })
        return slot
      },
      handleChange (picker, slotIndex, slotSelectedIndex) {
        if (!this.slots.length) {
          if (slotIndex === 0) {
            picker.setSlot(1, this.getCities(slotSelectedIndex))

            if (this.level === 3) {
              picker.setSlot(2, this.getDistricts(slotSelectedIndex, 0))
            }
          }

          if (slotIndex === 1) {
            if (this.level === 3) {
              picker.setSlot(2, this.getDistricts(picker.getSlotSelectedIndex(0), slotSelectedIndex))
            }
          }
        }
        this.$emit('change', picker, slotIndex, slotSelectedIndex)
      }
    }
  }
</script>
