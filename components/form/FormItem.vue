<template>
  <div class="kw-form-item" :class="{'no-border': noBorder, 'label-stack': labelTypeValue === 'stack'}" @click="handleClick">
    <label class="kw-form-item__label" :class="[labelColorClass, labelAlignClass]" :style="labelStyles" v-if="!hideLabel">
      <slot name="label">{{label}}</slot>
    </label>
    <div class="kw-form-item__control" :class="{'is-inline': inline}">
      <slot></slot>
    </div>

    <template v-if="!labelTypeValue">
      <div class="kw-form-item__value">
        <slot name="value"></slot>
      </div>
      <!-- arrow -->
      <div class="kw-form-item__arrow" v-if="isLink">
        <kw-icon icon="arrow-right" color="c0c0c0"></kw-icon>
      </div>
    </template>
  </div>
</template>

<script>
  import {color} from '~src/utils/index'

  export default {
    name: 'kwFormItem',
    data () {
      return {
        labelWidthValue: 0,
        labelStyle: {},
        labelTypeValue: '',
        labelAlignValue: ''
      }
    },
    props: {
      label: String,
      isLink: {
        type: Boolean,
        default: false
      },
      inline: {
        type: Boolean,
        default: false
      },
      noBorder: {
        type: Boolean,
        default: false
      },
      hideLabel: {
        type: Boolean,
        default: false
      },
      labelWidth: [String, Number],
      labelType: {
        type: String,
        default: ''
      },
      labelColor: {
        type: String,
        default: ''
      },
      labelAlign: String
    },
    computed: {
      labelStyles () {
        if (this.labelWidthValue) {
          this.labelStyle['width'] = `${this.labelWidthValue}px`
        }
        return this.labelStyle
      },
      labelColorClass () {
        if (color.has(this.labelColor)) {
          return `kw-fc-${this.labelColor}`
        } else {
          this.$set(this.labelStyle, 'color', this.labelColor)
        }
      },
      labelAlignClass () {
        return this.labelAlignValue ? `kw-form-item__label--${this.labelAlignValue}` : ''
      }
    },
    methods: {
      getFormComponent (component) {
        if (!component || !component.$vnode.componentOptions.tag.match('kw-form')) {
          return null
        }
        if (component.$vnode.componentOptions.tag === 'kw-form') {
          return component
        } else {
          return this.getFormComponent(component.$parent)
        }
      },
      handleClick (event) {
        this.$emit('click', event)
      }
    },
    mounted () {
      let $form = this.getFormComponent(this)
      this.labelWidthValue = this.labelWidth ? this.labelWidth : $form.labelWidth
      if (this.labelColor) {
        this.labelStyle['color'] = this.labelColor
      } else if ($form.labelColor) {
        this.labelStyle['color'] = $form.labelColor
      }

      this.labelTypeValue = this.labelType ? this.labelType : $form.labelType ? $form.labelType : ''
      this.labelAlignValue = this.labelAlign ? this.labelAlign : $form.labelAlign ? $form.labelAlign : ''
    }
  }
</script>

<style lang="scss">
  @mixin kw-font-colors {
    @each $key, $values in $system-colors {
      .kw-fc-#{$key} {
        color: nth($values, 1);
      }
    }
  }
  .kw-form{
    .kw-form-item{
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-sizing: border-box;
      min-height: $item-height;
      /*padding: 0 15px;*/
      background: $color-light;
      &:not(.no-border){
        border-bottom: 1px solid $item-border-color;
      }
      &.label-stack{
        display: block;
        /*padding: 10px 15px;*/
        .kw-form-item__control{
          margin: 10px 0 0 0;
          .kw-input-wrapper{
            padding: 0;
          }
        }
      }
      .kw-form-item__label{
        flex-shrink: 0;
        display: flex;
        align-items: center;
        color: $form-label-color;
        font-size: $font-size;
        @include kw-font-colors;
        &--center{
          justify-content: center;
        }
        &--right{
          justify-content: flex-end;
        }
      }
      .kw-form-item__control{
        flex: 1;
        margin-left: 10px;
        &.is-inline{
          display: flex;
          align-items: center;
          .kw-input-wrapper{
            width: auto;
          }
        }
        .kw-input-wrapper{
          border: none;
          .kw-input{
            padding: 0;
          }
        }
      }
      .kw-form-item__value{
        display: flex;
        align-items: center;
      }
      .kw-form-item__arrow{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        color:#c3c3c3;
      }
    }
  }
</style>
