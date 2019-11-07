<template>
  <div class="kw-bm-label" ref="bmLabelRef" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'kwBmLabel',
    data () {
      return {
        BMap: null,
        map: null,
        label: null
      }
    },
    methods: {
      ready (BMap, map) {
        this.BMap = BMap
        this.map = map
      },
      addInfoBox (InfoBox) {
        let {BMap, map} = this
        let opts = {
          enableAutoPan: true
        }
        this.label = new InfoBox(map, this.$refs.bmInfoBoxRef, opts) // 创建信息窗口对象
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
