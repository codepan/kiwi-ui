import Vue from 'vue'

const eventBus = new Vue({
  data: {
    selectedView: '',
    toggleSidenav: false
  },
  methods: {
    update(target, val) {
      this[target] = val
    }
  }
})

export default eventBus
