<template>
  <div class="kw-dialog">
    <header class="kw-dialog-header">{{title}}</header>
    <main class="kw-dialog-body">
      <div class="kw-dialog-body-prompt" v-if="type === 'prompt'">
        <div class="prompt-input-wrapper" :class="{'label-top': inputLabel && inputLabelPosition === 'top', 'label-left': inputLabel && inputLabelPosition === 'left'}">
          <label class="input-label">{{inputLabel}}</label>
          <kw-input :class="{'invalid': showValidateMessage}" :type="inputType" :placeholder="inputPlaceholder" v-model="inputValue"></kw-input>
        </div>
        <div class="prompt-validate-message" :class="{'visible': showValidateMessage}">{{inputValidateMessage}}</div>
      </div>
      <div class="kw-dialog-body-content" v-html="message"></div>
    </main>
    <footer class="kw-dialog-footer">
      <button class="kw-dialog-button kw-dialog-button-cancel" v-if="type !== 'alert'" @click="handleCallback(false)">{{cancelButtonText}}</button>
      <button class="kw-dialog-button kw-primary-text-color" @click="handleCallback(true)">{{confirmButtonText}}</button>
    </footer>
  </div>
</template>

<script lang="ts">
  import defaultOptions from './default-options'
  export default {
    data () {
      return {
        ...defaultOptions,
        visible: false,
        inputValue: '',
        showValidateMessage: false,
        confirmCallback: null,
        cancelCallback: null,
        mask: null
      }
    },
    computed: {
      inputLabelClass () {
        return `input-label-${this.inputLabelPosition}`
      }
    },
    watch: {
      inputValue () {
        if (this.inputValidator && typeof this.inputValidator === 'function') {
          let validatorReturnValue = this.inputValidator(this.inputValue)
          if (typeof validatorReturnValue === 'undefined') {
            return
          }

          if (typeof validatorReturnValue === 'boolean') {
            this.showValidateMessage = !validatorReturnValue
          }

          if (typeof validatorReturnValue === 'string') {
            this.inputValidateMessage = validatorReturnValue
            this.showValidateMessage = true
          }
        }
      }
    },
    methods: {
      handleCallback (isConfirm) {
        if (isConfirm) {
          if (this.type === 'prompt') {
            if (this.validateInputValue()) {
              this.confirmCallback(this.inputValue)
              this.reset()
              this.close()
            }
          } else {
            this.confirmCallback()
            this.reset()
            this.close()
          }
        } else {
          this.cancelCallback()
          this.reset()
          this.close()
        }
      },
      validateInputValue () {
        if (this.inputValidator && typeof this.inputValidator === 'function') {
          let validatorReturnValue = this.inputValidator(this.inputValue)
          if (typeof validatorReturnValue === 'undefined') {
            return true
          }

          if (typeof validatorReturnValue === 'boolean') {
            this.showValidateMessage = !validatorReturnValue
            return validatorReturnValue
          }

          if (typeof validatorReturnValue === 'string') {
            this.inputValidateMessage = validatorReturnValue
            this.showValidateMessage = true
            return false
          }
        } else {
          return true
        }
      },
      reset () {
        // 清空输入框输入的值
        this.inputValue = ''
        this.showValidateMessage = false
        this.inputValidateMessage = ''
      },
      open () {
        this.visible = true

        this.mask = this.$mask({
          closeOnClick: false
        })
        this.$el.style.zIndex = this.mask.getZIndex() + 1
      },
      close () {
        this.visible = false
        this.reset()
        this.$el.remove()
        this.mask.close()
      }
    }
  }
</script>

<style lang="scss">
  .kw-dialog{
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    width: 80%;
    border-radius: 10px;
    background: $color-light;
    overflow:hidden;
    @keyframes zoom-out-in {
      0%{
        transform: scale(1.5);
        transform-origin: center;
      }
      100%{
        transform: scale(1);
        transform-origin: center;
      }
    }
    /*animation: zoom-out-in .2s;*/
    .kw-dialog-header{
      padding: 15px 15px 0 15px;
      text-align: center;
      font-size: 16px;
      color:#333;
    }
    .kw-dialog-body{
      padding: 15px;
      text-align: center;
      font-size: 13px;
      color:#333;
      .kw-dialog-body-prompt{
        text-align: left;
        .prompt-input-wrapper{
          &.label-top,&.label-left{
            display: flex;
            .input-label{
              display: block;
            }
          }
          &.label-left{
            align-items: center;
            .input-label{
              margin-right: 3px;
            }
            .kw-input-wrapper{
              width: auto;
              flex: 1;
            }
          }
          &.label-top{
            flex-direction: column;
            .input-label{
              margin-bottom: 3px;
            }
          }
          .input-label{
            display: none;
            font-size: 12px;
            color:#666;
          }
          .kw-input-wrapper{
            &.invalid{
              border: 1px solid $color-danger;
              transition: border .3s ease-in;
            }
          }
        }
        .prompt-validate-message{
          margin-top: 2px;
          min-height: 12px;
          line-height: 1;
          text-align: left;
          visibility: hidden;
          opacity: 0;
          color: $color-danger;
          font-size: 10px;
          &.visible{
            visibility: visible;
            opacity: 1;
            transition: opacity .3s ease-in;
          }
        }
      }
    }
    .kw-dialog-footer{
      display: flex;
      height: 40px;
      @include border-1px-with-position($border-color, top);
    }
  }

  .kw-dialog-button{
    flex:1;
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
    @include border-1px-with-position($border-color, right);
    letter-spacing: 2px;
    font-size: $font-size-large;
    background: $color-light;
    &:last-child{
      &::after {
        display: none;
      }
    }
  }
  .kw-dialog-button-cancel{
    color: $subtitle-color;
  }
</style>
