<template>
  <section class="kw-countdown-wrapper">
    <slot>
      {{countdownTime}}
    </slot>
  </section>
</template>

<script>
  export default {
    name: 'kwCountdown',
    data () {
      return {
        intervalInstance: null,
        nowTimestamp: ''
      }
    },
    props: {
      endTime: {
        type: [Number, Date, String],
        default: '',
        required: true
      },
      format: {
        type: String,
        default: 'hh时mm分ss秒'
      }
    },
    methods: {
      formatValue (timestamp) {
        if (timestamp <= 0) {
          window.clearInterval(this.intervalInstance)
          return '0分钟'
        }
        let hours = window.parseInt(timestamp / 1000 / 60 / 60)
        let minutes = window.parseInt(timestamp / 1000 / 60 % 60)
        let seconds = window.parseInt(timestamp / 1000 % 60)
        if (hours) {
          hours = this.paddingLeftZero(hours)
        } else {
          this.format.substring(this.format.indexOf('m'))
        }
        if (minutes) {
          minutes = this.paddingLeftZero(minutes)
        } else {
          this.format.substring(this.format.indexOf('s'))
        }
        seconds = this.paddingLeftZero(seconds)

        let [hStr, mStr, sStr] = [hours + '', minutes + '', seconds + '']
        let timeStr = this.format.replace(/[hms]+/g, match => {
          switch (match.charAt(0)) {
            case 'h':
              return hStr.substring(0, match.length)
            case 'm':
              return mStr.substring(0, match.length)
            case 's':
              return sStr.substring(0, match.length)
          }
        })
        this.$emit('change', timeStr)
        return timeStr
      },
      paddingLeftZero (str) {
        str = str + ''
        return ('00' + str).substring(str.length)
      }
    },
    computed: {
      countdownTime () {
        let endTime = this.endTime
        let date
        if (!endTime) {
          return 0
        }
        if (typeof endTime === 'string') {
          endTime = endTime.replace(/-/g, '/') // IOS中日期分隔符如果是"-"，则会报错
          try {
            date = new Date(endTime)
          } catch(error) {
            console.error('end-time不是一个合法的可被格式化的日期字符串')
          }
        } else if (typeof endTime === 'number') {
          try {
            date = new Date(endTime)
          } catch (error) {
            console.error('end-time不是一个合法的时间戳')
          }
        } else if (typeof endTime === 'object' && endTime instanceof Date) {
          date = endTime
        } else {
          console.error('end-time不合法')
          return
        }
        return this.formatValue(date.getTime() - this.nowTimestamp)
      }
    },
    created () {
      this.nowTimestamp = Date.now()
      this.intervalInstance = window.setInterval(() => {
        this.nowTimestamp = Date.now()
      }, 1000)
    }
  }
</script>

<style lang="scss">
  .kw-countdown-wrapper{
    display: inline;
    color:#333;
    font-size: 14px;
  }
</style>
