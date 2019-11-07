<template>
  <div class="kw-toast" :class="[positionClass, {'is-active': visible}]">
    <kw-icon class="kw-toast-icon" v-if="type && type !== 'text'" :icon="icon" color="stable"></kw-icon>
    <div class="kw-toast-text">{{message}}</div>
  </div>
</template>

<script>
  import defaultOptions from './default-options'
  export default {
    name: 'kwToast',
    data () {
      return {
        ...defaultOptions,
        visible: true
      }
    },
    computed: {
      positionClass () {
        return `kw-toast-${this.position}`
      },
      icon () {
        switch (this.type) {
          case 'success':
            return 'success-fill'
            break
          case 'error':
            return 'close-fill'
            break
          case 'warning':
            return 'warning-fill'
            break
        }
      }
    }
  }
</script>

<style lang="scss">
 .kw-toast{
   position: fixed;
   left: 50%;
   transform: translateX(-50%);
   z-index:9999;
   display: flex;
   justify-content: center;
   align-items: center;
   max-width: 90%;
   padding: 8px 10px;
   border-radius: 5px;
   background: rgba(0, 0, 0, .8);
   color: $color-stable;
   font-size: 16px;
   @keyframes fade-in {
     from{
       opacity: 0;
     }
     to {
       opacity: 1;
     }
   }
   @keyframes fade-out {
     to{
       opacity: 0;
     }
     from {
       opacity: 1;
     }
   }
   animation: fade-out .5s;
   &.is-active{
     animation: fade-in .5s;
   }
   &.kw-toast-top{
     top: 50px;
   }
   &.kw-toast-middle{
     top: 50%;
     transform: translate(-50%, -50%);
   }
   &.kw-toast-bottom{
     bottom: 50px;
   }
   .kw-toast-icon{
     margin-right: 4px;
   }
   .kw-toast-text{
   }
 }
</style>
