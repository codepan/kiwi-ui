<template>
  <div class="doc-sidenav" @click.stop="">
    <doc-nav bg="#f8f8f8"></doc-nav>
  </div>
</template>

<script>
  import docNav from './nav'
  import bus from '~example/common/bus'
  export default {
    components: {
      docNav
    },
    created () {
      document.addEventListener('click', () => {
        bus.update('toggleSidenav', false)
      })
    }
  }
</script>

<style lang="scss">
  .doc-sidenav {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 60%;
    overflow-y: auto;
    overflow-x: hidden;
    box-shadow: 2px 0px 4px #eee;
    animation: move .2s linear alternate;
    @keyframes move {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }
  }
</style>
