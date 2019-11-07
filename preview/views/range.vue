<template>
  <kw-layout>
    <kw-nav>Range 滑块</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本用法">
        <kw-range v-model="value0"></kw-range>
      </demo-block>
      <demo-block title="最小最大值">
        <kw-range :min="-50" :max="50" sign></kw-range>
      </demo-block>
      <demo-block title="两端文字">
        <kw-range begin="小" end="大"></kw-range>
      </demo-block>
      <demo-block title="指定步长">
        <kw-range :step="10" sign></kw-range>
      </demo-block>
      <demo-block title="禁用">
        <kw-range disabled></kw-range>
      </demo-block>
      <demo-block title="轨道宽度">
        <kw-range :bar-height="4"></kw-range>
      </demo-block>
       <demo-block title="设置颜色">
        <kw-range track-color="#999" active-color="success"></kw-range>
      </demo-block>
      <demo-block title="自定义手柄">
        <kw-range v-model="value1">
          <div class="custom-handle">{{value1}}</div>
        </kw-range>
      </demo-block>
      <demo-block title="控制滑块行为">
        <kw-range
          begin="小"
          end="大"
          sign="音量"
          @dragging="handleDragging"
          @drag-end="handleDragEnd"></kw-range>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
<script>
export default {
  data: () => ({
    value0: 50,
    value1: 50,
    warningCount: 0
  }),
  methods: {
    handleDragging (value, range) {
      if (value >= 80 && !this.warningCount) {
        this.warningCount = 1
        range.forbid()
        this.$dialog.alert('继续增大音量将损伤听力，是否继续？', {
          confirmButtonText: '我知道了'
        }).then(() => {
          range.allow()
        })
      }
    },
    handleDragEnd (value) {
      value >= 80 && this.$toast(`最终音量为${value}`)
    }
  }
}
</script>
<style lang="scss">
.custom-handle {
  width: 40px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 4px;
  background: #ff4949;
  font-size: 12px;
  color: #fff;
}
</style>