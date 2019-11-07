<template>
  <div class="kw-bm-info-box" ref="bmInfoBoxRef">
    <div class="kw-info-box-content">
      <div class="info-box-header">
        <span class="info-box-header-title">车辆位置信息</span>
        <i class="info-box-header-close kw-icon-close-outline" @touchend="close"></i>
      </div>
      <div class="info-box-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'kwBmInfoBox',
    data () {
      return {
        BMap: null,
        map: null,
        point: {},
        infoBox: null
      }
    },
    methods: {
      asyncLoadInfoBoxScript (callback) {
        const $script = document.createElement('script')
        $script.type = 'text/javascript'
        $script.src = 'http://api.map.baidu.com/library/InfoBox/1.2/src/InfoBox_min.js'
        document.head.appendChild($script)

        let intervalCount = 0
        let method = () => {
          intervalCount ++
          if (window.BMapLib && window.BMapLib.InfoBox) {
            callback(window.BMapLib.InfoBox)
            window.clearInterval(interval)
          } else if (intervalCount === 100) {
            window.clearInterval(interval)
            intervalCount = 0
            callback(null)
          }
        }
        let interval = window.setInterval(method, 10)
      },
      ready (BMap, map, point) {
        this.BMap = BMap
        this.map = map
        this.point = new BMap.Point(point.lng, point.lat)

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
        this.open()
      },
      open () {
        this.infoBox.open(this.point)
      },
      close () {
        this.infoBox.close()
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$parent.transmitDataToChild((BMap, map, point) => {
          this.ready(BMap, map, point)
        })
      })
    }
  }
</script>

<style lang="scss">
  .kw-info-box-content{
    min-width: pxToRem(400);
    height: auto;
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius: pxToRem(10);
    background: rgba(255, 255, 255, .6);
    .info-box-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: pxToRem(10);
      border-bottom: 1px solid #ccc;
      .info-box-header-title{
        font-size: pxToRem(30);
      }
      .info-box-header-close{
        color: $color-danger;
        font-size: pxToRem(46);
        &:active{
          color:orange;
        }
      }
    }
    .info-box-body{
      padding: pxToRem(10);
      font-size: pxToRem(26);
      color:#666;
    }
  }
  .kw-baidu-map-wrapper{
    .infoBox{
      img[src='close.png']{
        display: none;
      }
    }
  }
</style>
