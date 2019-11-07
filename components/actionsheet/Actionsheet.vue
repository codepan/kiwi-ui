<template>
  <kw-popup position="bottom" v-model="visible" class="kw-actionsheet">
    <div class="kw-actionsheet-actions">
      <div class="kw-actionsheet-title" v-if="title">{{title}}</div>
      <div
        class="kw-actionsheet-action"
        :class="colorClass"
        :style="[actionColorStyle]"
        v-for="(action, index) in actions"
        :key="index" 
        @click="handleActionClick(action.action)">{{action.text}}</div>
    </div>
    <div
      class="kw-actionsheet-action kw-actionsheet-action-cancel"
      :class="colorClass"
      :style="cancelStyle"
      @click="visible = false"
      v-if="cancelText">{{cancelText}}</div>
  </kw-popup>
</template>

<script>
  import  {color as colorUtil, type as typeUtil} from '~src/utils'
  export default {
    name: 'kwActionsheet',
    data () {
      return {
        visible: false
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      actions: {
        type: Array,
        required: true,
        validator (value) {
          if (!value) {
            throw new Error('actions为必传参数')
          }

          if (value && value.length === 0) {
            throw new Error('actions不能为空数组')
          }

          return true
        }
      },
      title: String,
      cancel: {
        type: [String, Object],
        default: '取消'
      },
      color: {
        type: String,
        default: 'primary'
      }
    },
    computed: {
      colorClass () {
        if (colorUtil.keys().includes(this.color)) return `kw-${this.color}-text-color`
        return null
      },
      actionColorStyle () {
        if (!this.colorClass) return {color: this.color}
        return null
      },
      cancelStyle () {
        console.log(this.cancel)
        console.log(typeUtil.isObject(this.cancel))
        if (typeUtil.isObject(this.cancel)) {
          return {
            color: this.cancel.color,
            ...this.cancel.style
          }
        }
        if (!this.colorClass) return {color: this.color}
        return null
      },
      cancelText () {
        return this.cancel.text || this.cancel
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
      handleActionClick (method) {
        method(this)
        this.visible = false
      }
    }
  }
</script>

<style lang="scss">
  .kw-actionsheet{
    margin: 0 10px;
    background: transparent;
    &-actions{
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 10px;
      .kw-actionsheet-title{
        line-height: 36px;
        color: $disabled-color;
        text-align: center;
        background: $color-light;
      }
      .kw-actionsheet-action{
        &:not(:first-child){
          border-top: 1px solid $border-color;
        }
      }
    }

  }

  .kw-actionsheet-action{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 46px;
    background: $color-light;
    border: none;
    outline: none;
    font-size: $font-size-large;
    &:active{
      background: $color-stable;
    }
    &-cancel{
      margin-bottom: 10px;
     border-radius: 8px;
    }
  }
</style>
