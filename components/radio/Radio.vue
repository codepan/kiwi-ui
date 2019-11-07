<template>
  <div class="kw-radio" :class="{'disabled': slefDisabled}" @click="handleClick">
    <i class="kw-radio-icon" :class="{active: checked}" :style="checkedIconStyle"></i>
    <span class="kw-radio-label">
      <slot>{{label}}</slot>
    </span>
  </div>
</template>

<script>
  import { color as colorUtil } from '~src/utils'
  export default {
    name: 'kwRadio',
    data () {
      return {
        checked: false,
        selfColor: this.color,
        slefDisabled: this.disabled,
        radioGroup: null
      }
    },
    props: {
      label: String,
      name: {
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: 'primary'
      }
    },
    computed: {
      checkedIconStyle () {
        if (!this.checked || this.slefDisabled) return {}

        if (colorUtil.has(this.selfColor)) {
          return {
            background: colorUtil.get(this.selfColor)
          }
        }

        return {
          background: this.selfColor
        }
      }
    },
    methods: {
      handleClick () {
        if (this.slefDisabled) return
        this.radioGroup.setValue(this.name)
      },
      setChecked (checked) {
        this.checked = checked
      },
      setColor (color) {
        this.selfColor = color
        return this
      },
      setDisabled (disabled) {
        this.slefDisabled = disabled
        return this
      },
      getRadioGroup (component) {
        if (!component) return null
        if (component.$options.name === 'kw-radio-group') {
          return component
        }
        return this.getRadioGroup(component.$parent)
      }
    },
    created () {
      this.radioGroup = this.getRadioGroup(this.$parent)
      this.radioGroup && this.radioGroup.addRadio(this)
    }
  }
</script>
<style lang="scss">
.kw-radio{
  display: inline-flex;
  align-items: center;
  &+.kw-radio{
    margin-left: 14px;
  }
  &.disabled{
    .kw-radio-icon{
      background-color: #d9d9d9;
      border-color: #ccc;
    }
    .kw-radio-label{
      color: #999;
    }
  }
  .kw-radio-icon{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 1px solid $border-color;
    &.active {
      border: none;
      &::after {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background: $color-light;
      }
    }
  }
  .kw-radio-label{
    flex: 1;
    margin-left: 5px;
    font-size: 14px;
    color:#333;
  }
}
</style>
