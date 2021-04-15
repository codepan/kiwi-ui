<template>
  <div>
    用户的：{{activeTab}}----activeTab
    <kw-tabs v-model="activeTab" stripe @change="handleChange" slidable>
      <kw-tab title="1">1</kw-tab>
      <kw-tab title="2">2</kw-tab>
      <kw-tab title="3">3</kw-tab>
    </kw-tabs>
    <kw-button @click="switchTab">揍你</kw-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    activeTab: 2
  }),
  methods: {
    switchTab () {
      this.activeTab = 1
    },
    handleChange (tab) {
      console.log(tab)
    }
  },
  created () {
    // this.$dialog.alert('ddddd')
  },
}
</script>