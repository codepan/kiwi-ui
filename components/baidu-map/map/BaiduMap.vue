<template>
  <div id="kw-baidu-map-wrapper" class="kw-baidu-map-wrapper" :style="computedStyle">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'kwBaiduMap',
    data () {
      let height
      (_this => {
        if (typeof _this.height === 'string') {
          if (_this.height.indexOf('%') === -1) {
            let numberHeight = window.parseInt(_this.height)
            height = numberHeight + '' === _this.height ? `${_this.height}px` : `${_this.height}${_this.height.substring(_this.height.indexOf(numberHeight + ''))}`
          } else {
            height = _this.height
          }
        }
        if (typeof _this.height === 'number') {
          height = `${_this.height}px`
        }
      })(this)

      return {
        computedStyle: {
          height: height
        },
        map: null,
        BMap: null
      }
    },
    props: {
      height: {
        type: [Number, String],
        default () {
          return '100%'
        }
      }
    },
    methods: {
      loadBaiduMapScript () {
        const $script = document.createElement('script')
        $script.type = 'text/javascript'
        $script.src = window.location.protocol + '//api.map.baidu.com/api?v=3.0&ak=Ryl4YWyOIYrBus988xnIU6NF&callback=baiduMapCallback'
        document.head.appendChild($script)
      },
      ready () {
        this.BMap = BMap
        let map = new BMap.Map('kw-baidu-map-wrapper')          // 创建Map实例
        let point = new BMap.Point(116.404, 39.915) // 创建点坐标
        map.centerAndZoom(point, 15)
        map.enableScrollWheelZoom(true)

        this.map = map
        this.$emit('ready', map)

        /*
        向 baidu-map的所有子组件传递BMap对象和map对象
         */
        if (this.$slots && this.$slots.default) {
            this.$slots.default.forEach(child => {
              child.child.ready(BMap, map)
            })
        }
      }
    },
    mounted () {
      this.loadBaiduMapScript()
      window['baiduMapCallback'] = () => {
        this.ready()
      }
    }
  }
</script>

<style lang="scss">
  .kw-baidu-map-wrapper{
  }
</style>
