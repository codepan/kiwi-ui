<template>
  <div class="kw-info-box-content" ref="bmInfoBoxRef" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'kwBmInfoBox',
    data () {
      return {
        BMap: null,
        map: null,
        infoBox: null
      }
    },
    methods: {
      asyncLoadInfoBoxScript (callback) {
        const $script = document.createElement('script')
        $script.type = 'text/javascript'
        $script.src = 'http://api.map.baidu.com/library/InfoBox/1.2/src/InfoBox_min.js'
        document.head.appendChild($script)

//        let intervalCount = 0
//        let method = () => {
//          intervalCount ++
//          if (window.BMapLib && window.BMapLib.InfoBox) {
//            callback(window.BMapLib.InfoBox)
//            window.clearInterval(interval)
//          } else if (intervalCount === 100) {
//            window.clearInterval(interval)
//            intervalCount = 0
//            callback(null)
//          }
//        }
//        let interval = window.setInterval(method, 10)

        window.setTimeout(() => {
          callback(window.BMapLib.InfoBox)
        }, 2000)
      },
      ready (BMap, map) {
        this.BMap = BMap
        this.map = map
        this.asyncLoadInfoBoxScript(InfoBox => {
          if (InfoBox) {
            this.addInfoBox(InfoBox)
          }
        })
      },
      addInfoBox (InfoBox) {
        let {BMap, map} = this
        let opts = {
          enableAutoPan: true
        }
        this.infoBox = new InfoBox(map, this.$refs.bmInfoBoxRef, opts) // 创建信息窗口对象
      },
      open (point) {
        point = new BMap.Point(point.lng || point.lon || point.longitude, point.lat || point.latitude)
        this.infoBox.open(point)
      },
      close (event) {
        this.infoBox.close()
        this.$emit('close', event)
      },
      handleClick () {
      }
    }
  }
</script>

<style lang="scss">
  .kw-info-box-content{
    min-width: pxToRem(400);
    height: auto;
    overflow: hidden;
  }
  .kw-baidu-map-wrapper{
    .infoBox{
      img[src='close.png']{
        display: none;
      }
    }
  }
</style>
