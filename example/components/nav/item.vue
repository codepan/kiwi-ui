<template>
  <router-link :to="view" tag="li" class="nav-item" @click.native="closeSidenav">
    <slot></slot>
  </router-link>
</template>

<script>
  import bus from '~example/common/bus'
  export default {
    props: ['view'],
    data() {
      return {
        radioId: (Math.random() * 100000).toFixed(0)
      }
    },
    computed: {
      checkIt() {
        const currentPath = this.$route.path
        let isCurrent = false
        if (currentPath === this.view || currentPath === `/${this.view}`) {
          isCurrent = true
        }
        return isCurrent
      }
    },
    methods: {
      selectIt() {
        bus.update('selectedView', this.view)
      },
      closeSidenav () {
        bus.update('toggleSidenav', false)
      }
    }
  }
</script>

<style lang="scss">
  .nav-item {
    margin: 10px 0 0 10px;
    padding: 0;
    list-style: none;
    cursor: pointer;
    color: #515a6e;
    font-size: 14px;
    &:hover {
      color: #65ccaf;
    }
    &.router-link-active {
      color: #5bb89e;
    }
  }
</style>
