<template>
  <div
    class="kw-input-number"
    :class="{'kw-input-number-small': size === 'small', 'kw-input-number-large': size === 'large', 'kw-input-number-readonly': readonly}">
    <div class="kw-input-minus" :class="{'disabled': !canMinus}" @click="minus">-</div>
    <input type="number" class="kw-input" v-model="inputValue" :disabled="disabled" :readonly="readonly || !editable" @input="handleInput">
    <div class="kw-input-plus" :class="{'disabled': !canPlus}" @click="plus">+</div>
  </div>
</template>

<script>
  export default {
    name: 'kwInputNumber',
    data () {
      return {
        inputValue: this.value,
        canMinus: true,
        canPlus: true
      }
    },
    props: {
      value: {
        type: [Number, String],
        default: 1
      },
      min: {
        type: Number,
        default: -Infinity
      },
      max: {
        type: Number,
        default: Infinity
      },
      step: {
        type: Number,
        default: 1
      },
      size: String,
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      editable: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      value (value) {
        this.inputValue = this.processInputValue(value)
      },
      inputValue (value) {
        this.canPlus = !this.max || this.inputValue < this.max
        this.canMinus = this.inputValue > this.min
        this.$emit('change', value)
      }
    },
    methods: {
      processInputValue (value) {
        value = value + ''
        if (!value) {
          return ''
        }
        value = value.replace(/^D$/igm, '')
        return Number.parseInt(value)
      },
      plus () {
        if (!this.canPlus || this.readonly) {
          return
        }
        if (!this.max || this.inputValue < this.max) {
          let oldValue = this.inputValue
          this.inputValue += this.step
          this.$emit('plus', this.inputValue, oldValue)
        }
      },
      minus () {
        if (!this.canMinus || this.readonly) {
          return
        }
        if (this.inputValue > this.min) {
          let oldValue = this.inputValue
          this.inputValue -= this.step
          this.$emit('minus', this.inputValue, oldValue)
        }
      },
      handleInput () {
        this.$emit('input', this.inputValue)
      }
    },
    created () {
      if (this.disabled) {
        this.canMinus = false
        this.canPlus = false
      }

      if (this.value === this.min) {
        this.canMinus = false
      }
    }
  }
</script>

<style lang="scss">
  .kw-input-number{
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    height: $input-number-size;
    border-radius: 4px;
    border: 1px solid $border-color;
    font-size: $font-size;
    overflow: hidden;
    &.kw-input-number-small{
      height: $input-number-size-small;
    }
    &.kw-input-number-large{
      height: $input-number-size-large;
    }
    .kw-input{
      flex: 1;
      box-sizing: border-box;
      border-radius: 0; // 消除微信默认圆角的case
      color: $content-color;
      border: none;
      outline: none;
      width: 50px;
      height: 100%;
      border-left: 1px solid $border-color;
      border-right: 1px solid $border-color;
      text-align: center;
      line-height: 1;
      // background: red;
      -webkit-box-shadow: 0 0 0 1000px white inset;
      &::-webkit-input-placeholder{
        font-size: 15px;
        color:#ccc;
      }
      &[disabled]{
        background: $disabled-bg-color;
        color:$disabled-color;
        opacity: .7;
        &::-webkit-input-placeholder{
          font-size: $font-size;
          color: $input-placeholder-color;
        }
      }
    }
    .kw-input-minus, .kw-input-plus{
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 100%;
      font-size: 16px;
      color: $subtitle-color;
      user-select: none;
      background: $bg-color;
      &:active{
        background: $color-stable;
      }
      &.disabled{
        background: $disabled-bg-color;
        color:$disabled-color;
        opacity: .7;
      }
    }
  }
</style>
