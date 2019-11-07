<template>
  <kw-layout>
    <kw-nav>Theme 主题</kw-nav>
    <kw-main has-nav>
      <demo-block title="默认蓝色主题">
        <kw-form>
          <kw-form-item>
            <kw-radio-group v-model="switchChecked">
              <kw-radio label="信息" value="1"></kw-radio>
              <kw-radio label="社会" value="2"></kw-radio>
            </kw-radio-group>
          </kw-form-item>
          <kw-form-item>
            <kw-switch v-model="switchChecked"></kw-switch>
          </kw-form-item>
          <kw-form-item>
            <kw-spinner></kw-spinner>
          </kw-form-item>
        </kw-form>
      </demo-block>
      <demo-block title="绿色主题">
        <kw-form>
          <kw-form-item>
            <kw-radio-group color="success">
              <kw-radio label="信息" value="1"></kw-radio>
              <kw-radio label="社会" value="2"></kw-radio>
            </kw-radio-group>
          </kw-form-item>
          <kw-form-item>
            <kw-switch v-model="switchChecked" color="success"></kw-switch>
          </kw-form-item>
          <kw-form-item>
            <kw-spinner color="success"></kw-spinner>
          </kw-form-item>
        </kw-form>
      </demo-block>
      <demo-block title="红色主题">
        <kw-form>
          <kw-form-item>
            <kw-radio-group color="danger">
              <kw-radio label="信息" value="1"></kw-radio>
              <kw-radio label="社会" value="2"></kw-radio>
            </kw-radio-group>
          </kw-form-item>
          <kw-form-item>
            <kw-switch v-model="switchChecked" color="danger"></kw-switch>
          </kw-form-item>
          <kw-form-item>
            <kw-spinner color="danger"></kw-spinner>
          </kw-form-item>
        </kw-form>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
<script>
  export default {
    data () {
      return {
        switchChecked: true
      }
    }
  }
</script>
