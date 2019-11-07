<template>
  <kw-layout>
    <kw-nav>Checkbox 复选框</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本使用">
        <kw-checkbox v-model="checked0">选项一</kw-checkbox>
      </demo-block>
      <demo-block title="禁用状态">
        <kw-checkbox v-model="checked1" disabled>选项一</kw-checkbox>
        <kw-checkbox v-model="checked2" disabled>选项二</kw-checkbox>
      </demo-block>
      <demo-block title="选中时颜色">
        <kw-checkbox v-model="checked3" color="success">选项一</kw-checkbox>
        <kw-checkbox v-model="checked4" color="info">选项二</kw-checkbox>
      </demo-block>
      <demo-block title="图标形状">
        <kw-checkbox v-model="checked5" shape="square">选项一</kw-checkbox>
        <kw-checkbox v-model="checked6" shape="square">选项二</kw-checkbox>
      </demo-block>
      <demo-block title="复选组">
        <kw-checkbox-group v-model="result1">
          <kw-checkbox
            v-for="item in list"
            :key="item"
            :name="item"
          >复选框 {{item}}</kw-checkbox>
        </kw-checkbox-group>
      </demo-block>
      <demo-block title="列表样式">
        <kw-checkbox-group v-model="result2" list>
          <kw-checkbox
            v-for="item in list"
            :key="item"
            :name="item"
          >复选框 {{item}}</kw-checkbox>
        </kw-checkbox-group>
      </demo-block>
      <demo-block title="右对齐">
        <kw-checkbox-group  v-model="result3" list align="right" :max="2">
          <kw-checkbox
            v-for="item in list"
            :key="item"
            :name="item"
          >复选框 {{item}}</kw-checkbox>
        </kw-checkbox-group>
      </demo-block>
      <demo-block title="最大选择个数">
        <kw-checkbox-group  v-model="result4" list :max="2">
          <kw-checkbox
            v-for="item in list"
            :key="item"
            :name="item"
          >复选框 {{item}}</kw-checkbox>
        </kw-checkbox-group>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
<script>
  export default {
    data () {
      return {
        checked0: false,
        checked1: false,
        checked2: true,
        checked3: true,
        checked4: true,
        checked5: false,
        checked6: true,
        list: ['A', 'B', 'C'],
        result1: ['A', 'B'],
        result2: ['A', 'B'],
        result3: ['A'],
        result4: ['A', 'B']
      }
    },
    methods: {
      handleChange (value) {
        this.$toast({
          position: 'bottom',
          message: `您选择的值为 ${value}`,
          duration: 500
        })
      }
    }
  }
</script>
