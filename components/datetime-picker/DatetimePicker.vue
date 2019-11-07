<template>
  <kw-picker
    popup
    v-model="visible"
    :slots="slots"
    @cancel="handleCancel"
    @confirm="handleConfirm"
    @change="handleChange"
    ref="pickerRef">
  </kw-picker>
</template>

<script>
  import kwPicker from '../picker/Picker'
  import { date as dateUtil, type as typeUtil } from '~src/utils'

  export default {
    name: 'kw-datetime-picker',
    components: {
      kwPicker
    },
    data () {
      return {
        visible: false,
        slots: []
      }
    },
    props: {
      select: {
        type: [String, Object, Array, Date],
        default: ''
      },
      value: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'datetime'
      },
      format: {
        type: String,
        default: ''
      },
      formatYear: {
        type: String,
        default: 'yyyy',
        validator (val) {
          if (!val) {
            console.error('format-year属性值为空')
            return false
          }
          if (!val.startsWith('yyyy')) {
            console.error('format-year属性值没有以"yyyy"开头')
            return false
          }
          return true
        }
      },
      formatMonth: {
        type: String,
        default: 'MM',
        validator (val) {
          if (!val) {
            console.error('format-month属性值为空')
            return false
          }
          if (!val.startsWith('MM')) {
            console.error('format-month属性值没有以"MM"开头')
            return false
          }
          return true
        }
      },
      formatDate: {
        type: String,
        default: 'dd',
        validator (val) {
          if (!val) {
            console.error('format-date属性值为空')
            return false
          }
          if (!val.startsWith('dd')) {
            console.error('format-date属性值没有以"dd"开头')
            return false
          }
          return true
        }
      },
      formatHour: {
        type: String,
        default: 'hh',
        validator (val) {
          if (!val) {
            console.error('format-hour属性值为空')
            return false
          }
          if (!val.startsWith('hh')) {
            console.error('format-hour属性值没有以"hh"开头')
            return false
          }
          return true
        }
      },
      formatMinute: {
        type: String,
        default: 'mm',
        validator (val) {
          if (!val) {
            console.error('format-minute属性值为空')
            return false
          }
          if (!val.startsWith('mm')) {
            console.error('format-minute属性值没有以"mm"开头')
            return false
          }
          return true
        }
      },
      minYear: {
        type: Number,
        default () {
          return new Date().getFullYear() - 10
        }
      },
      maxYear: {
        type: Number,
        default () {
          return new Date().getFullYear() + 10
        }
      },
      hideYear: {
        type: Boolean,
        default: false
      },
      hideMinute: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      value (val) {
        this.visible = val
        this.$nextTick(() => {
          this.setSlotSelectedValues()
        })
      },
      visible (val) {
        this.$emit('input', val)
      }
    },
    methods: {
      initSlots () {
        let defaultSlots = [
          this.getYears(),
          this.getMonths(),
          this.getDates(),
          this.getHours(),
          this.getMinutes()
        ]

        if (this.type === 'date') {
          this.slots = defaultSlots.slice(0, 3)
        } else if (this.type === 'time') {
          this.slots = defaultSlots.slice(3)
        } else {
          this.slots = defaultSlots
        }
      },
      setSlotSelectedValues () {
        let nowDate = null
        if (this.select) {
          if (typeUtil.isString(this.select)) {
            try {
              const dateString = this.select.replace(/-/ig, '/')
              nowDate = new Date(dateString)
            } catch (error) {
              console.error('传入的select字符串不合法，无法实例化为一个Date对象')
            }
          } else if (typeUtil.isDate(this.select)) {
            nowDate = this.select
          } else if (typeUtil.isArray(this.select)) {
            nowDate = new Date()
            typeof this.select[0] !== 'undefined' && nowDate.setFullYear(this.select[0])
            typeof this.select[1] !== 'undefined' && nowDate.setMonth(this.select[1] - 1)
            typeof this.select[2] !== 'undefined' && nowDate.setDate(this.select[2])
            typeof this.select[3] !== 'undefined' && nowDate.setHours(this.select[3])
            typeof this.select[4] !== 'undefined' && nowDate.setMinutes(this.select[4])
          } else {
            console.error('传入的select值不合法，合法的值应该是：一个可以被实例化为Date对象的字符串或为一个Date对象')
            return
          }
        } else {
          nowDate = new Date()
        }

        let currentYear = nowDate.getFullYear()
        let activeYear = currentYear > this.minYear && currentYear <= this.maxYear ? currentYear : this.minYear

        const picker = this.$refs.pickerRef
        switch (this.type) {
          case 'date':
            picker.setSelectedValues([activeYear, nowDate.getMonth(), nowDate.getDate()])
            break
          case 'time':
            picker.setSelectedValues([nowDate.getHours(), nowDate.getHours()])
            break
          default:
            if (this.hideYear) {
              picker.setSelectedValues([nowDate.getMonth(), nowDate.getDate(), nowDate.getHours()])
              !this.hideMinute && picker.setSlotSelectedValue(3, nowDate.getMinutes())
            } else {
              picker.setSelectedValues([activeYear, nowDate.getMonth(), nowDate.getDate(), nowDate.getHours()])
              !this.hideMinute && picker.setSlotSelectedValue(4, nowDate.getMinutes())
            }
        }
      },
      paddingLeftZero (str) {
        str = str + ''
        return `00${str}`.substr(str.length)
      },
      formatText (text = '', pattern = '') {
        const SIGN_REGEXP = /[yMdhsm]+/g

        if (typeof text === 'number') {
          text += ''
        }

        return pattern.replace(SIGN_REGEXP, match => {
          switch (match.charAt(0)) {
            case 'y':
              return text.substr(4 - match.length)
            case 'M':
              return text.substr(2 - match.length)
            case 'd':
              return text.substr(2 - match.length)
            case 'h':
              return text.substr(2 - match.length)
            case 'm':
              return text.substr(2 - match.length)
            case 's':
              return text.substr(2 - match.length)
          }
        })
      },
      handleCancel (event) {
        this.$emit('cancel', event)
      },
      handleConfirm (result) {
        let date = null
        switch (this.type) {
          case 'date':
            date = new Date(...result.values)
            break
          case 'time':
            date = new Date()
            date.setHours(result.values[0])
            date.setSeconds(result.values[1])
            break
          default:
            date = new Date(...result.values)
        }

        if (this.format) {
          this.$emit('confirm', dateUtil.format(date, this.format), result)
        } else {
          this.$emit('confirm', result, date)
        }
      },
      open () {
        this.$refs.pickerRef.open()
        this.initSlotValues()
        window.setTimeout(() => {
          this.initSlotCheckedValues()
        } ,200)
      },
      getYears (minYear = this.minYear, maxYear = this.maxYear) {
        let slot = []
        for (let i = 0; i <= maxYear - minYear; i++) {
          slot.push({
            text: this.formatText(minYear + i, this.formatYear),
            value: minYear + i
          })
        }
        return slot
      },
      getMonths () {
        let slot = []
        for (let i = 0; i <= 11; i++){
          slot.push({
            text: this.formatText(this.paddingLeftZero(i + 1), this.formatMonth),
            value: i
          })
        }
        return slot
      },
      /**
       * 获取 日
       * @param year 年份
       * @param month 月份
       * 每月的天数会受到闰月等的影响，所以需要传入年份和月份
       * 当然每月的天数也是不固定的，所以需要根据月份确定天数
       */
      getDates (year = new Date().getFullYear(), month = new Date().getMonth()) {
        let slot = []
        let lastDate = new Date(year, window.parseInt(month), 0).getDate()
        for (let i = 1; i <= lastDate; i++){
          slot.push({
            text: this.formatText(this.paddingLeftZero(i), this.formatDate),
            value: i
          })
        }
        return slot
      },
      getHours () {
        let slot = []
        for (let i = 0; i <= 23; i++) {
          slot.push({
            text: this.formatText(this.paddingLeftZero(i), this.formatHour),
            value: i
          })
        }
        return slot
      },
      getMinutes () {
        let slot = []
        for (let i = 0; i <= 59; i++) {
          slot.push({
            text: this.formatText(this.paddingLeftZero(i), this.formatMinute),
            value: i
          })
        }
        return slot
      },
      getSeconds () {
        let slot = []
        for (let i = 0; i <= 59; i++) {
          slot.push({
            text: this.formatText(this.paddingLeftZero(i), this.formatSecond),
            value: i
          })
        }
        return slot
      },
      getMaxDate (year, month) {
        return new Date(year, month, 0).getDate()
      },
      handleChange (picker, slotIndex, slotSelectedIndex) {
        // let currentYear = new Date().getFullYear()
        // if (this.hideYear) {
        //   if (slotIndex === 0 && isSlidingEnd) {
        //     /*
        //      当前选择的月份最大日期小于当前选择的日期时
        //      日期选中最大日期
        //      */
        //     let previousCheckedDate = picker.getSlotCheckedValue(this.slotIndexes.date)
        //     let currentMaxDate = this.getMaxDate(currentYear, picker.getSlotCheckedValue(this.slotIndexes.month))
        //     if (previousCheckedDate > currentMaxDate) {
        //       picker.setSlotCheckedValue(1, currentMaxDate)
        //     }

        //     this.setDates(currentYear, picker.getSlotCheckedValue(this.slotIndexes.month))
        //   }
        // } else {
        //   if (slotIndex === 1 && isSlidingEnd) {
        //     /*
        //      当前选择的月份最大日期小于当前选择的日期时
        //      日期选中最大日期
        //      */
        //     let previousCheckedDate = picker.getSlotCheckedValue(this.slotIndexes.date)
        //     let currentMaxDate = this.getMaxDate(picker.getSlotCheckedValue(this.slotIndexes.year), picker.getSlotCheckedValue(this.slotIndexes.month))
        //     if (previousCheckedDate > currentMaxDate) {
        //       picker.setSlotCheckedValue(2, currentMaxDate)
        //     }

        //     this.setDates(picker.getSlotCheckedValue(this.slotIndexes.year), picker.getSlotCheckedValue(this.slotIndexes.month))
        //   }
        // }
      }
    },
    created () {
      this.initSlots()
    }
  }
</script>