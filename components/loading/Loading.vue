<template>
  <div class="kw-loading" :class="className">
    <div class="kw-loading-icon">
      <kw-spinner :color="spinner.color" :type="spinner.type" :size="spinner.size"></kw-spinner>
    </div>
    <div class="kw-loading-text" v-if="text">{{text}}</div>
  </div>
</template>

<script>
  import defaultOptions from './default-options'
  export default {
    name: 'kwLoading',
    data () {
      return {
        ...defaultOptions,
        maskInstance: null
      }
    },
    watch: {
      mask (val) {
        if (val) {
          let options = {
            closeOnClick: false
          }
          this.maskColor && (options.color = this.maskColor)

          this.maskInstance = this.$mask(options)
        }
      }
    },
    methods: {
      close () {
        this.$el.remove()
        if (this.maskInstance) {
          this.mask = false
          this.maskInstance.close()
        }
      }
    }
  }
</script>

<style lang="scss">
 .kw-loading{
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index:9999;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 8px 10px;
   border-radius: 5px;
   background: rgba(0, 0, 0, .6);
   color: #f2f2f2;
   font-size: 16px;
 }
</style>
