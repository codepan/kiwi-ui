<template>
  <section class="kw-input-wrapper" :class="{'is-textarea': type === 'textarea', 'no-border': noBorder}">
    <template v-if="type === 'textarea'">
      <textarea
        class="kw-textarea"
        ref="textareaRef"
        :placeholder="placeholder"
        :value="inputValue"
        @input="handleInput"
        :rows="rows"
        :maxlength="maxlength"></textarea>
    </template>
    <template v-else>
      <div class="kw-input-left" v-if="showInputLeft">
        <div class="kw-input-icon left-icon" v-if="hasIcon && iconPosition === 'left'">
          <slot name="icon">
            <kw-icon :icon="inputLeftIcon" v-if="inputLeftIcon"></kw-icon>
          </slot>
        </div>
      </div>
      <input
        v-if="type !== 'search'"
        class="kw-input"
        ref="svInputRef"
        :class="inputClass"
        :inputType="type"
        :value="inputValue"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :readonly="inputReadonly"
        :disabled="disabled"
        @input="handleInput"
        @click="handleClick"/>
      <form v-else action="javascript: void(0);" class="kw-adapter-form">
        <input
          class="kw-input"
          :class="inputClass"
          ref="svInputRef"
          :inputType="type"
          :placeholder="placeholder"
          :maxlength="maxlength"
          :value="inputValue"
          :readonly="inputReadonly"
          :disabled="disabled"
          autocomplete="off"
          autocorrect="off"
          @input="handleInput"
          @click="handleClick"
          @keypress.enter="handleSearch"/>
      </form>
      <div class="kw-input-right" v-if="showInputRight">
        <div class="kw-input-icon right-icon" v-if="(hasIcon && iconPosition === 'right') || (inputType === 'password' && toggleVisible) || (clearable && inputValue)">
          <slot name="icon">
            <kw-icon icon="close-fill" v-if="clearable && inputValue" @click="handleClearClick"></kw-icon>
            <kw-icon :icon="{'password-hide': !passwordVisible, 'password-show': passwordVisible}" v-if="inputType === 'password' && toggleVisible" @click="togglePasswordVisible"></kw-icon>
            <kw-icon :icon="inputRightIcon" v-if="inputRightIcon"></kw-icon>
          </slot>
        </div>
        <div class="kw-input-unit" v-if="unit">
          <div class="unit-text">{{unit}}</div>
        </div>
      </div>
    </template>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'kwInput',
    data () {
      return {
        inputValue: this.value,
        inputType: this.type,
        inputReadonly: this.readonly,
        passwordVisible: false
      }
    },
    props: {
      value: [String, Number],
      icon: {
        type: String,
        default: ''
      },
      iconPosition: {
        type: String,
        default () {
          return 'left'
        }
      },
      size: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: ''
      },
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      toggleVisible: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [String, Number]
      },
      unit: {
        type: String,
        default: ''
      },
      clearable: {
        type: Boolean,
        default: false
      },
      negative: {
        type: Boolean,
        default: true
      },
      positive: {
        type: Boolean,
        default: true
      },
      rows: {
        type: [String, Number],
        default: 1,
        validator (val) {
          let intValue = window.parseInt(val)
          if (Number.isNaN(intValue)) {
            console.error('rows应为大于0的整数或能转换为数字的字符串')
            return false
          } else if (intValue <= 0) {
            console.error('rows应为大于0的整数')
            return false
          }
          return true
        }
      },
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      noBorder: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      inputClass () {
        let inputClass = ''
        if (this.size) {
          inputClass += `kw-input-${this.size}`
        }
        if (this.disabled) {
          inputClass += ' disabled'
        }
        return inputClass
      },
      inputLeftIcon () {
        if (this.iconPosition === 'left') {
          return this.icon ? `${this.icon}` : ''
        }
        return ''
      },
      inputRightIcon () {
        if (this.iconPosition === 'right') {
          return this.icon ? `${this.icon}` : ''
        }
        return ''
      },
      hasIcon () {
        if (this.icon || this.$slots.icon) {
          return true
        }
        return false
      },
      showInputLeft () {
        return this.hasIcon
      },
      showInputRight () {
        if ((this.icon && this.iconPosition === 'right') ||
          (this.inputType === 'password' && this.toggleVisible) ||
          (this.clearable && this.inputValue) ||
          this.unit) {
          return true
        }
        return false
      }
    },
    watch: {
      value (val) {
        this.inputValue = val
      },
      inputValue () {
        this.$nextTick(this.adjustSize)
      }
    },
    methods: {
      handleInput (event) {
        let value = event.target.value
        this.setInputValue(value)
      },
      setInputValue (value) {
        value = value + '' // 将数字类型转换为字符串类型
        // html5默认的type="number"时maxlength属性不生效，于是在此自己实现maxlength功能
        if (value.length > this.maxlength) {
          value = value.substr(0, this.maxlength)
        }

        if (this.type === 'integer') {
          let newValue = value
          value = value.replace(/\D+/g, '')
          if (this.negative && newValue.startsWith('-')) {
            value = '-' + value
          }
        }

        if (this.type === 'number') {
          if (typeof this.enableNegative === 'string') {
            if (this.enableNegative === '' || this.enableNegative === 'true') {
              this._enableNegative = true
            } else {
              this._enableNegative = false
            }
          }

          if (typeof this.enableNegative === 'boolean') {
            this._enableNegative = this.enableNegative
          }

          if (this._enableNegative) {
            let startValue = ''
            if (value.startsWith('-')) {
              startValue = '-'
              if (value.charAt(1) === '.') {
                startValue = '-'
              }
            }

            value = value.replace(/[^\d.]/g, '')

            if (startValue === '-') {
              if (value === '.') {
                value = ''
              }
            }
            value = startValue + value
          } else {
            value = value.replace(/[^\d.]/g, '')
          }

          let values = value.split('.')

          if (values.length === 2) {
            if (!values[0]) {
              value = ''
            } else {
              let newValue = ''
              newValue = values[0] + '.' + (values[1] ? values[1].substring(0, 2) : '')
              value = newValue
            }
          }

          if (values.length > 2) {
            values.pop()
            let newValue = ''
            for (let i = 0; i < values.length; i++) {
              newValue += i === values.length - 1 ? values[i] : values[i] + '.'
            }
            value = newValue
          }
        }

        if (this.type === 'hour') {
          value = value.replace(/\D+/g, '')
          if (value.charAt(0) === '0') {
            value = value.charAt(0)
          }
          if (window.parseInt(value) > 23) {
            value = value.substr(0, value.length - 1)
          }
        }
        this.inputValue = value
        this.$emit('input', value)
      },
      setInputType (type) {
        if (type === 'integer') {
          type = 'number'
        }
        this.$nextTick(() => {
          this.$refs.svInputRef.setAttribute('type', type)
        })
      },
      togglePasswordVisible () {
        this.passwordVisible = !this.passwordVisible
        this.setInputType(this.passwordVisible ? 'text' : 'password')
      },
      handleClick (value) {
        if (this.readonly) {
          this.forbidKeyboardPop()
        }
        this.$emit('click', value)
      },
      handleSearch (event) {
        event.stopPropagation()
        event.preventDefault()
        this.$emit('search', event)
      },
      /**
       * 禁止键盘弹出
       */
      forbidKeyboardPop () {
        document.activeElement.blur()
      },
      handleClearClick () {
        this.inputValue = ''
        this.$emit('input', '')
        this.$emit('clear')
      },
      adjustSize () {
        const $textarea = this.$refs.textareaRef
        if (!(this.type === 'textarea' && this.autosize) || !$textarea) {
          return
        }

        // 响应内容正在被删除时，高度动态变化，如果没有这句代码，则内容减少时高度不会做出动态变化
        $textarea.style.height = 'auto'

        let height = $textarea.scrollHeight
        $textarea.style.height = height + 'px'
      }
    },
    created () {
      if (this.type !== 'textarea') {
        this.setInputType(this.inputType)
      }

      if (this.disabled) {
        this.inputReadonly = true
      }
    },
    mounted () {
      this.$nextTick(() => {
        if (this.type === 'textarea' || typeof this.autosize === 'object') {
          const $textarea = this.$refs.textareaRef
          const {minRows, maxRows} = this.autosize

          let lineHeight = $textarea.scrollHeight / this.rows
          if (minRows) {
            $textarea.style.minHeight = minRows * lineHeight + 'px'
          }
          if (maxRows) {
            $textarea.style.maxHeight = maxRows * lineHeight + 'px'
          }
        }

        this.adjustSize()
      })
    }
  }
</script>

<style lang="scss">
  .kw-input-wrapper{
    background: $color-light;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width:100%;
    height: 40px;
    overflow: hidden;
    border: 1px solid $border-color;
    border-radius: 2px;
    font-size: $font-size;
    &.no-border{
      border: none;
    }
    &.is-textarea{
      height: auto;
      min-height: 40px;
      padding: 10px;
      .kw-textarea{
        width: 100%;
        overflow: auto;
        font-size: $font-size;
        color: $content-color;
        margin:0;
        padding:0;
        outline: none;
        border: none;
        resize: none;
        line-height: 1.2;
        box-sizing: border-box;
        -webkit-box-shadow: 0 0 0 1000px white inset;
        &::-webkit-scrollbar{
          display: none;
        }
        &::-webkit-input-placeholder{
          font-size: $font-size;
          color: $input-placeholder-color;
          vertical-align: middle;
        }
      }
    }
    .kw-input-icon{
      display: flex;
      font-size: $font-size;
      color:#bbb;
    }
    .kw-adapter-form{
      flex: 1;
      width: 100%;
      height: 100%;
      input[type="search"]::-webkit-search-cancel-button{
        display: none;
      }
      -webkit-appearance: none;
    }
    .kw-input{
      flex: 1;
      color: $content-color;
      border: none;
      outline: none;
      width: 100%;
      height: 100%;
      padding: 0 10px;
      line-height: 1;
      &::-webkit-input-placeholder{
        font-size: $font-size;
        color: $input-placeholder-color;
      }
      -webkit-box-shadow: 0 0 0 1000px white inset;
      &.disabled{
        background: #f5f7fa;
        color:#c0c4cc;
        &::-webkit-input-placeholder{
          color: $input-placeholder-color;
        }
      }
    }
    .kw-input-left, .kw-input-right{
      display: flex;
      align-items: center;
      height: 100%;
    }
    .kw-input-left{
      .kw-input-icon{
        margin-left: 10px;
      }
    }
    .kw-input-right{
      .kw-input-icon{
        margin-right: 10px;
      }
      .kw-input-unit{
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: 100%;
        padding: 0 7px;
        @include border-1px-with-position(#bfcbd9, left);
        // border-left: 1px solid #bfcbd9;
        background-color: #fbfdff;
        color: #97a8be;
        font-style: normal;
        font-size: $font-size-small;
        .unit-text{
          max-width: 50px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

</style>
