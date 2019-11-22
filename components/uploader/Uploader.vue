<template>
  <div class="kw-uploader">
    <ul class="kw-uploader-list">
      <li
        class="kw-uploader-item"
        v-for="(imageFile, index) in imageFiles"
        :key="index">
        <div
          class="image-mask"
          @touchstart="currentActivedIndex = index"
          @touchend="handleTouchEnd"
          v-gesture:tap="handleTap"
          v-gesture:hold="handleHold"
          v-gesture:drag="handleDrag"
        ></div>
        <img
          class="kw-uploader-image"
          ref="imageRef"
          :data-progress="imageFile.progress"
          :src="imageFile.url"/>
        <template v-if="imageFile.status !== 'ready'">
          <div class="progress-wrapper" :style="progressStyle(imageFile.progress)" v-if="imageFile.status === 'uploading'">
            {{imageFile.progress}}%
          </div>
          <div class="status-wrapper" v-else>
            <kw-icon icon="success-fill" color="success" v-if="imageFile.status === 'success'"></kw-icon>
            <kw-icon icon="warning-fill" color="danger" v-if="imageFile.status === 'fail'"></kw-icon>
          </div>
        </template>
        <kw-icon icon="close-fill" color="stable" class="icon-delete" @click="removeFile(index)" v-if="removable && removeAction !== 'drag' && !trashHandler.isShow"></kw-icon>
      </li>
      <li class="kw-uploader-item kw-uploader-handle" @click="select" v-if="files.length < this.maxCount">
        <kw-icon icon="add" size="60" color="stable"></kw-icon>
      </li>
    </ul>
    <div class="kw-uploader-trash" :class="{active: trashHandler.isActive}" v-if="trashHandler.isShow && removable && removeAction !== 'click'" ref="trashRef">
      <kw-icon icon="delete" color="light"></kw-icon>
      <span class="text">{{trashHandler.isActive ? '松手可删除' : '拖动到此处删除'}}</span>
    </div>
    <input class="kw-uploader-file" @change="handleChange" type="file" ref="myFile" :multiple="multiple" :accept="accept">
  </div>
</template>

<script>
  // import image1 from './yanjing.jpg'
  // import image2 from './shuijiao.jpg'
  import fileUpload from './file-upload'
  import { type as typeUtil } from '~src/utils'
  import { gesture } from '~src/directives'
  export default {
    name: 'kw-uploader',
    directives: {
      gesture
    },
    data () {
      return {
        files: [],
        trashHandler: {
          isShow: false,
          isActive: false
        },
        currentActivedIndex: 0,
        dragHandler: {
          startX: 0,
          startY: 0
        }
      }
    },
    props: {
      accept: {
        type: String,
        default: 'image/*'
      },
      multiple: {
        type: Boolean,
        default: false
      },
      preview: {
        type: Boolean,
        default: false
      },
      maxCount: {
        type: Number,
        default: 10,
        validator: maxCount => maxCount > 0
      },
      maxSize: {
        type: Number,
        default: 1024 * 1024 * 10 // 10MB
      },
      removable: {
        type: Boolean,
        default: true
      },
      removeAction: {
        type: String,
        default: 'both',
        validator: action => ['click', 'drag', 'both'].includes(action)
      },
      auto: {
        type: Boolean,
        default: false
      },
      action: {
        type: [String, Object],
        default: () => ({})
      },
      beforeAdd: {
        type: Function
      },
      showSuccess: {
        type: Boolean,
        default: false
      },
      showFail: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      processedAction () {
        if (typeUtil.isString(this.action)) {
          return {
            target: this.action
          }
        }

        return this.action
      },
      currentImage () {
        return this.$refs.imageRef[this.currentActivedIndex]
      },
      imageFiles () {
        return this.files.filter(({ type }) => type.includes('image'))
      },
      progressStyle () {
        return progress => ({
          background: `linear-gradient(to bottom, transparent 0%, transparent ${progress}%, rgba(0, 0, 0, .4) ${progress + 0.01}%, rgba(0, 0, 0, .4) 100%)`
        })
      }
    },
    methods: {
      select () {
        const $file = this.$refs.myFile
        $file.click()
      },
      handleChange () {
        let files = [...this.$refs.myFile.files]
        files = files.slice(0, this.maxCount)

        files.forEach(file => {
          // 若存在beforeAdd函数，则调用
          const result = this.beforeAdd ? this.beforeAdd(file) : true
          if (result) {
            // 若文件大小超过限制，则触发exceed事件
            if (file.size > this.maxSize) {
              this.$emit('exceed', file)
            } else {
              // 转换原生File对象为包装File对象，并将其添加至files数组
              this.transformFile(file, newFile => {
                this.files.push(newFile)

                // 若为自动上传，则自动上传文件
                if (this.auto) {
                  this.start([newFile])
                }
              })
            }
          }
        })

        this.$emit('after-add', this.files)
      },
      getObjectURL (file) {
        let url = null
        if (window.createObjectURL) { // basic
          url = window.createObjectURL(file)
        } else if (window.URL) { // mozilla firefox
          url = window.URL.createObjectURL(file)
        } else if (window.webkitURL) { // webkit safari chrome
          url = window.webkitURL.createObjectURL(file)
        }
        return url
      },
      transformFile (file, callback) {
        let newFile = {
          name: file.name,
          size: file.size,
          type: file.type,
          lastModified: file.lastModified,
          lastModifiedDate: file.lastModifiedDate,
          url: this.getObjectURL(file),
          base64: '',
          status: 'ready',
          progress: 0,
          response: '',
          file
        }

        if (this.processedAction.fileValue === 'base64') {
          const fileReader = new FileReader()

          fileReader.onload = event => {
            callback({...newFile, base64: event.target.result})
          }

          fileReader.readAsDataURL(file)
        } else {
          callback(newFile)
        }
        
      },
      handleTap () {
        if (!this.preview) return
        this.$previewer({
          images: this.files,
          index: this.currentActivedIndex
        })
      },
      handleHold (event) {
        if (!this.removable || this.removeAction === 'click') {
          return
        }
        this.trashHandler.isShow = true
        const { pageX, pageY } = event.touches[0]
        this.dragHandler.startX = pageX
        this.dragHandler.startY = pageY
        this.currentImage.setAttribute('style', 'transform: scale(1.2); opacity: 0.6')
      },
      handleDrag (event) {
        if (!this.removable || this.removeAction === 'click') {
          return
        }
        const { pageX: currentX, pageY: currentY } = event.touches[0]
        const { startX, startY } = this.dragHandler
        const translateX = currentX - startX
        const translateY = currentY - startY
        this.currentImage.setAttribute('style', `transform: scale(1.2) translate(${translateX}px, ${translateY}px)`)
        this.trashHandler.isActive = this.currentImage.getBoundingClientRect().bottom + this.$refs.trashRef.getBoundingClientRect().height > 736
      },
      handleTouchEnd (event) {
        if (!this.removable || this.removeAction === 'click') {
          return
        }
        const { style } = this.currentImage

        if (this.trashHandler.isActive) {
          this.removeFile(this.currentActivedIndex)
        }
        this.trashHandler.isShow = false
        this.trashHandler.isActive = false
        this.currentImage.removeAttribute('style')
      },
      removeFile (index) {
        this.files.splice(index, 1)
      },
      upload (files) {
        files.forEach(file => {
          fileUpload.upload(file)
          .then(() => {
            this.$emit('upload-success', file)
          })
          .catch(() => {
            this.$emit('upload-fail', file)
          })
        })
      },
      start (files = this.files) {
        this.upload(files)
      },
      // 暂停上传，实现断点续传，目前没思路
      pause () {
      },
      // 重试再次上传，上传前一次上传失败的文件
      retry () {
        this.upload(this.files.filter(file => file.status === 'fail'))
      }
    },
    created () {
      if (this.auto && this.processedAction) {
        fileUpload.setAction(this.processedAction)
      }
    }
  }
</script>
<style lang="scss">
  .kw-uploader {
    &-list {
      display: flex;
      flex-wrap: wrap;
      .kw-uploader-item {
        flex-shrink: 0;
        position: relative;
        width: 100px;
        height: 100px;
        margin: 0 8px 8px 0;
        .image-mask {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .kw-uploader-image {
          width: 100%;
          height: 100%;
        }
        .icon-delete {
          position: absolute;
          top: -8px;
          right: -8px;
          z-index: 2;
          border-radius: 100%;
          background: $color-light;
        }
        .progress-wrapper {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .status-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 0;
          line-height: 1;
          border-radius: 100%;
          background: $color-light;
        }
      }
      .kw-uploader-handle {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px dashed #e5e5e5;
      }
    }
    &-file{
      display: none;
    }
    &-trash {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: $color-danger;
      opacity: 0.8;
      .text {
        margin-top: 10px;
        color: $color-light;
        font-size: $font-size-small;
      }
      &.active {
        opacity: 1;
      }
    }
  }
</style>
