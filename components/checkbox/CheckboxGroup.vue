<template>
  <div class="kw-checkbox-group" :class="{'is-list': list, 'align-right': align === 'right'}">
    <slot></slot>
  </div>
</template>

<script>
  import {color} from '~src/utils/index'

  export default {
    name: 'kw-checkbox-group',
    props: {
      value: Array,
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
      },
      max: {
        type: Number,
        default: Number.MAX_SAFE_INTEGER
      }
    },
    data () {
      return {
        result: this.value,
        checkboxes: []
      }
    },
    watch: {
      value: {
        handler (val) {
          this.result = val
        },
        deep: true,
        immediate: true
      },
      result: {
        handler (val) {
          this.$nextTick(this.updateCheckboxes)
          this.$emit('input', val)
          this.$emit('change', val)
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      updateCheckboxes () {
        this.checkboxes.forEach(checkbox => {
          checkbox.setChecked(this.result.includes(checkbox.name))
        })
      },
      updateStatus (checkboxName, checked) {
        if (checked) {
          if (!this.result.includes(checkboxName)) {
            this.result.push(checkboxName)
          }
        } else {
          this.result.splice(this.result.indexOf(checkboxName), 1)
        }
      },
      addCheckbox (checkbox) {
        this.checkboxes.push(checkbox)
      }
    },
    mounted () {
      this.checkboxes.forEach(checkbox => {
        checkbox
          .setColor(this.color)
          .setDisabled(this.disabled)
      })
    }
  }
</script>

<style lang="scss">
  .kw-checkbox-group{
    display: inline-block;
    font-size: 0;
    &.is-list{
      display: block;
      border-top: 1px solid $item-border-color;
      border-bottom: 1px solid $item-border-color;
      .kw-checkbox{
        display: flex;
        width: 100%;
        padding:12px 15px;
        &:not(:last-child){
          border-bottom: 1px solid $item-border-color;
        }
        &+.kw-checkbox{
          margin-left: 0;
        }
      }
      &.align-right{
        .kw-checkbox {
          flex-direction: row-reverse;
        }
      }
    }
  }
</style>
