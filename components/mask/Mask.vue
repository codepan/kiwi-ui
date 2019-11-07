<template>
  <div class="kw-mask" @click="click" v-if="visible" :style="{backgroundColor: _color, zIndex: _zIndex}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'kwMask',
    data () {
      return {
        visible: false,
        _zIndex: '',
        _color: '',
        _closeOnClick: true,
        eventHandlers: {}
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      zIndex: {
        type: Number,
        default: 2
      },
      color: {
        type: String,
        default () {
          return 'rgba(0, 0, 0, .4)'
        }
      },
      closeOnClick: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      value (val) {
        this.visible = val
      },
      visible (val) {
        this.$emit('input', val)
      }
    },
    methods: {
      open (options) {
        if (typeof options !== 'undefined') {
          if (typeof options === 'object') {
            let {zIndex, color, closeOnClick} = options
            zIndex && (this._zIndex = zIndex)
            color && (this._color = color)
            if (typeof closeOnClick === 'boolean') {
              this._closeOnClick = closeOnClick
            }
          }
          if (typeof options === 'boolean') {
            this._closeOnClick = options
          }
        }
        this.visible = true
        this.$emit('open')
        this.dispatch('open')
      },
      close () {
        this.visible = false
        this.$emit('close')
        this.dispatch('close')
      },
      click () {
        this.$emit('click')
        this.dispatch('click')
        this._closeOnClick && this.close()
      },
      setColor (color) {
        this._color = color
      },
      getColor () {
        return this._color
      },
      setZIndex (zIndex) {
        this._zIndex = zIndex
      },
      getZIndex () {
        return this._zIndex
      },
      on (name, handler) {
        if (!this.eventHandlers[name]) {
          this.$set(this.eventHandlers, name, [])
        }
        this.eventHandlers[name].push(handler)
        return this
      },
      dispatch (name) {
        if (!this.eventHandlers[name] || this.eventHandlers[name].length === 0) {
          return
        }
        this.eventHandlers[name].forEach(handler => {
          handler && typeof handler === 'function' && handler()
        })
      }
    },
    created () {
      this._zIndex= this.zIndex
      this._color = this.color
      this._closeOnClick = this.closeOnClick
      this.visible = this.value
    }
  }
</script>

<style lang="scss">
  .kw-mask{
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
  }
</style>
