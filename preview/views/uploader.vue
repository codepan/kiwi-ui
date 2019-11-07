<template>
  <kw-layout>
    <kw-nav>Uploader 文件上传</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本使用">
        <kw-uploader @after-add="afterAdd"></kw-uploader>
      </demo-block>
      <demo-block title="文件类型">
        <kw-uploader accept="image/png"></kw-uploader>
      </demo-block>
      <demo-block title="图片预览">
        <kw-uploader preview></kw-uploader>
      </demo-block>
      <demo-block title="文件多选">
        <kw-uploader multiple preview></kw-uploader>
      </demo-block>
      <demo-block title="最大上传数量">
        <kw-uploader multiple preview :max-count="2"></kw-uploader>
      </demo-block>
      <demo-block title="预览图的删除及删除动作">
         <kw-uploader multiple preview remove-action="drag"></kw-uploader>
      </demo-block>
      <demo-block title="限制文件大小">
        <kw-uploader multiple preview :max-size="2000" @exceed="handleExceed"></kw-uploader>
      </demo-block>
      <demo-block title="过滤文件">
        <kw-uploader multiple preview :before-add="beforeAdd"></kw-uploader>
      </demo-block>
       <demo-block title="自动上传">
        <kw-uploader
          multiple
          preview
          auto
          :action="action"></kw-uploader>
      </demo-block>
      <demo-block title="手动上传">
        <kw-uploader
          multiple
          preview
          :action="action"
          ref="uploaderRef"></kw-uploader>
        <kw-button size="full" @click="start">上传</kw-button>
        <kw-button size="full" @click="retry">重试</kw-button>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
<script>
  export default {
    data () {
      return {
        images: [],
        action: {
          target: 'http://localhost:9999',
          fileKey: 'fileFile',
          fileValue: 'file',
          extra (file) {
            return {
              name: file.name,
              size: file.size
            }
          }
        }
      }
    },
    methods: {
      beforeAdd (file) {
        const maxSize = 1024 * 1024 * 1
        if (file.size > maxSize) {
          this.$toast(`您选择的文件超过了 ${maxSize / (1024 * 1024)}MB`)
          return false
        }

        return true
      },
      afterAdd (files) {
        // 此时可以自行将文件上传至服务器
        console.dir(files)
      },
      add () {
        this.$file.select((files, localFiles) => {
          this.images.push(...localFiles)
        })
      },
      handleExceed (file) {
        this.$toast(`上传的${file.name}文件太大`)
      },
      start () {
        this.$refs.uploaderRef.start()
      },
      retry () {
        this.$refs.uploaderRef.retry()
      }
    }
  }
</script>
<style scoped>
</style>
