<template>
  <div class="kw-checkbox" :class="{'disabled': slefDisabled}" @click="handleClick">
    <div class="kw-checkbox-icon" :class="[{checked: checked}, `shape-${shape}`]" :style="checkedIconStyle">
      <kw-icon icon="check" size="small" color="light" v-if="checked"></kw-icon>
    </div>
    <span class="kw-checkbox-label">
      <slot>{{label}}</slot>
    </span>
  </div>
</template>

<script>
  import { color as colorUtil } from '~src/utils'
  export default {
    name: 'kw-checkbox',
    data () {
      return {
        checked: this.value,
        selfColor: this.color,
        slefDisabled: this.disabled,
        checkboxGroup: null
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      name: null,
      label: String,
      disabled: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: 'primary'
      },
      shape: {
        type: String,
        default: 'circle',
        validator (shape) {
          return ['circle', 'square'].includes(shape)
        }
      }
    },
    watch: {
      value: {
        handler (val) {
          this.checked = val
        },
        immediate: true
      },
      checked (val) {
        this.checkboxGroup && this.checkboxGroup.updateStatus(this.name, val)
        this.$emit('input', val)
        this.$emit('change', val)
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
      },
    },
    methods: {
      handleClick () {
        if (this.slefDisabled) return
        if (this.checkboxGroup) {
          if (!this.checked) {
            const { result, max } = this.checkboxGroup
            if (result.length === max) return
          }
        }
        this.checked = !this.checked
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
      getCheckboxGroup (component) {
        if (!component) return null
        if (component.$options.name === 'kw-checkbox-group') {
          return component
        }
        return this.getCheckboxGroup(component.$parent)
      }
    },
    created () {
      this.checkboxGroup = this.getCheckboxGroup(this.$parent)
      this.checkboxGroup && this.checkboxGroup.addCheckbox(this)
    }
  }
</script>
<style lang="scss">
.kw-checkbox{
  display: inline-flex;
  align-items: center;
  vertical-align: bottom;
  &+.kw-checkbox{
    margin-left: 14px;
  }
  &.disabled{
    .kw-checkbox-icon{
      background: $border-color;
      &.checked {
        background: $border-color;
      }
    }
    .kw-checkbox-label{
      color: $disabled-color;
    }
  }
  .kw-checkbox-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    &.shape-circle {
      border-radius: 100%;
    }
    border: 1px solid $border-color;
    &.checked {
      border: none;
    }
  }
  .kw-checkbox-label{
    flex: 1;
    margin-left: 5px;
    font-size: 14px;
    color: $content-color;
  }
}
</style>
