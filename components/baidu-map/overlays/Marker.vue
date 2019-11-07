<template>
  <div class="kw-bm-marker">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import startMarkerIcon from './start-marker-icon.png'
  import endMarkerIcon from './end-marker-icon.png'
  export default {
    name: 'kwBmMarker',
    props: {
      point: {
        type: Object,
        default () {
          return {
            lng: '',
            lat: ''
          }
        }
      },
      icon: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        BMap: null,
        map: null,
        marker: null
      }
    },
    watch: {
      point: {
        handler (val) {
          this.point = val
          this.addMarker()
        },
        deep: true
      }
    },
    methods: {
      ready (BMap, map) {
        !this.BMap && (this.BMap = BMap)
        !this.map && (this.map = map)
      },
      addMarker () {
        let {BMap, map} = this
        let point = new BMap.Point(this.point.lng, this.point.lat) // 116.78114076670327 38.43617640509487
        let marker = new BMap.Marker(point, {
          icon: new BMap.Icon(this.icon === 'start' ? startMarkerIcon : endMarkerIcon, new BMap.Size(32, 42), {
            imageSize: new BMap.Size(32, 42)
          })
        })
        map.addOverlay(marker)
        map.setViewport([point])

        this.marker = marker

        this.bindEvents()
      },
      bindEvents () {
         this.marker.addEventListener('click', (event) => {
           this.handleClick(event)
         })
      },
      transmitDataToChild (callback) {
        let method = () => {
          if (this.BMap && this.map && this.point && this.point.lng && this.point.lat) {
            callback(this.BMap, this.map, this.point)
            window.clearInterval(interval)
          }
        }
        let interval = window.setInterval(method, 50)
      },
      handleClick (event) {
        this.$emit('click', event)
      }
    }
  }
</script>

<style lang="scss">
</style>
