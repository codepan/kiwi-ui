<template>
  <div class="kw-radio-group" :class="{'is-list': list, 'align-right': align === 'right'}">
    <slot></slot>
  </div>
</template>

<script>
  import {color} from '~src/utils/index'

  export default {
    name: 'kw-radio-group',
    props: {
      value: null,
      list: {
        type: Boolean,
        default: false
      },
      align: {
        type: String,
        default: 'left'
      },
      color: {
        type: String,
        default: 'primary'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        selfValue: null,
        radios: []
      }
    },
    watch: {
      value: {
        handler (val) {
          this.selfValue = val
        },
        immediate: true
      },
      selfValue: {
        handler (val) {
          this.$nextTick(this.updateRadios)
          this.$emit('input', val)
          this.$emit('change', val)
        },
        immediate: true
      }
    },
    methods: {
      updateRadios () {
        this.radios.forEach(radio => {
          radio.setChecked(this.selfValue === radio.name)
        })
      },
      setValue (value) {
        this.selfValue = value
      },
      addRadio (radio) {
        this.radios.push(radio)
      }
    },
    mounted () {
      this.radios.forEach(radio => {
        radio.setDisabled(this.disabled).setColor(this.color)
      })
    }
  }
</script>

<style lang="scss">
  .kw-radio-group{
    display: inline-flex;
    align-items: center;
    vertical-align: bottom;
    &.is-list{
      display: block;
      border-top: 1px solid $item-border-color;
      border-bottom: 1px solid $item-border-color;
      .kw-radio{
        display: flex;
        width: 100%;
        padding:12px 15px;
        &:not(:last-child){
          border-bottom: 1px solid $item-border-color;
        }
        &+.kw-radio{
          margin-left: 0;
        }
      }
      &.align-right{
        .kw-radio {
          flex-direction: row-reverse;
        }
      }
    }
  }
</style>
