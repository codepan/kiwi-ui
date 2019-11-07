<template>
  <kw-layout>
    <kw-nav>Rating 打分器</kw-nav>
    <kw-main has-nav>
      <demo-block title="指定默认星级">
        <kw-rating v-model="ratingLevel"></kw-rating>
      </demo-block>
      <demo-block title="星级的数量">
        <kw-rating :count="6"></kw-rating>
      </demo-block>
      <demo-block title="显示星级对应的文字提示">
        <kw-rating show-text></kw-rating>
      </demo-block>
      <demo-block title="自定义每个星级对应的文字">
        <kw-rating show-text :texts="['一塌糊涂', '不好', '一般般', '不错', '很棒']"></kw-rating>
      </demo-block>
      <demo-block title="更改星级文字的位置">
        <kw-rating show-text text-position="bottom"></kw-rating>
      </demo-block>
      <demo-block title="绑定选中星级后的select事件">
        <kw-rating @select="handleSelected"></kw-rating>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
<script>
  export default {
    data () {
      return {
        ratingLevel: 3
      }
    },
    methods: {
      handleSelected (selectedCount) {
        this.$toast({
          position: 'bottom',
          message: `你选择的星级为${selectedCount}`,
          duration: 600
        })
      }
    }
  }
</script>
