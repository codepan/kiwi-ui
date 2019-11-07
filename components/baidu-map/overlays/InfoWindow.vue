<template>
  <div class="kw-bm-info-window" ref="bmInfoWindowRef">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'kwBmInfoWindow',
    data () {
      return {
        BMap: null,
        map: null,
        point: {},
        infoWindow: null
      }
    },
    methods: {
      ready (BMap, map, point) {
        this.BMap = BMap
        this.map = map
        this.point = new BMap.Point(point.lng, point.lat)

        this.addInfoWindow()
      },
      addInfoWindow () {
        let {BMap, map, point} = this
        let opts = {
          width: 0,     // 信息窗口宽度
          height: 0,     // 信息窗口高度
          title: '', // 信息窗口标题
          enableMessage: false,//设置允许信息窗发送短息
          message: '',
          offset: new BMap.Size(0, -10)
        }

        let infoWindow = new BMap.InfoWindow(this.$refs.bmInfoWindowRef, opts) // 创建信息窗口对象
        map.openInfoWindow(infoWindow, point) // 开启信息窗口
        this.infoWindow = infoWindow
      },
      redraw () {
        this.infoWindow.redraw()
      },
      open () {
        !this.infoWindow.isOpen() && this.addInfoWindow()
      },
      close () {
        this.map.closeInfoWindow()
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
</style>
