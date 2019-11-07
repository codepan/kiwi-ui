# Uploader (文件上传)
支持多文件上传，支持图片预览，图片删除等功能

---
## 示例
### 基本使用
绑定after-add事件，回调参数为Files：选择的图片组成的 `包装File对象` 数组，拿到`包装File对象`后可自行完成上传逻辑，也可设置auto属性自动上传（后面有示例会讲），亦可调用组件示例的start()方法上传（后面有示例会讲）

阐述概念：在html5中或者说javascript中原生的File对象称为：`原生File对象`，组件对其进行了二次包装，将其称之为`包装File对象`

原生File对象[参见这份文档](https://developer.mozilla.org/en-US/docs/Web/API/File)，或自行查询

包装File对象支持的属性参见下文表格
名称|说明|类型
---|---|---
name|文件名|string
size|文件大小|number
type|文件类型|string
lastModified|最近修改时间戳|number
lastModifiedDate|最近修改日期|Date
url|文件在磁盘上的绝对地址，通过URL.createObjectURL()实现|string
base64|文件转base64后的值|string
status|文件的状态，包括：ready，uploading，success，error|string
progress|文件上传进度，值为[0, 100]|number
file|原生File对象|File
```html
<template>
  <kw-uploader @after-add="afterAdd"></kw-uploader>
</template>
<script>
  export default {
    methods: {
      afterAdd (files) {
        // 此时可以自行将文件上传至服务器
        console.dir(files)
      }
    }
  }
</script>
```
### 文件类型
通过accept属性指定可选择的文件类型，accept属性同原生 `input[type="file"]` 标签上的accept属性，取值[参考这篇文章](https://www.w3school.com.cn/media/media_mimeref.asp)。默认只支持选择图片文件，accept的默认值为 `image/*`
```html
<kw-uploader accept="image/png"></kw-uploader>
```
### 图片预览
preview属性设置为true，开启图片预览功能，当选择的文件类型为图片类型时，支持图片预览，组件内部会根据File对象中的type属性来判断是否为图片类型
```html
<kw-uploader preview></kw-uploader>
```
### 文件多选
multiple属性设置为true，可以一次选择多个文件
```html
<kw-uploader multiple preview></kw-uploader>
```
### 最大上传数量
默认一次最多选择10个文件，通过max-count属性指定最大上传数量，取值为大于0的整数
```html
 <kw-uploader multiple preview :max-count="2"></kw-uploader>
```
### 预览图的删除及删除动作
默认预览图支持删除，removable设置为false可以禁止删除预览图

默认有两种动作可以删除预览图：
* 一种是点击预览图右上角的删除按钮；
* 一种是长按预览图然后拖拽至页面底部垃圾箱中松手删除

可以通过remove-action属性来控制删除动作，可选值有三种：click、drag、both，默认值为both

* click对应点击删除按钮
* drag对应拖拽删除
* both即两者均可
```html
  <!-- 禁止删除 -->
  <!--
 <kw-uploader multiple preview :removable="false"></kw-uploader>
 -->
 <kw-uploader multiple preview remove-action="drag"></kw-uploader>
```
### 限制文件大小
默认上传的文件最大为1024 * 1024 * 10（10MB），超过最大限制的文件组件会过滤掉，不会被上传，可以通过max-size来指定最大文件大小

选择的文件超过最大限制时会触发exceed事件，回调参数为原生File对象
```html
<template>
  <kw-uploader multiple preview :max-size="2000000" @exceed="handleExceed"></kw-uploader>
</template>
<script>
  export default {
    methods: {
      handleExceed (file) {
        this.$toast(`上传的${file.name}文件太大`)
      }
    }
  }
</script>
```
### 过滤文件
上面的例子中：max-size和accept属性分别对文件的大小和文件的类型做出了具体的限制，你还可以通过before-add属性来实现对文件的自定义过滤

before-add属性需要你传入一个函数，每选择一个文件，在该文件被添加到组件的files数组之前，函数都会被调用，并会向函数注入一个当前文件的原生File对象作为参数，函数内部可以通过返回一个boolean值来实现对文件的过滤，返回true则会被添加至files数组等待上传，反之不会。
```html
<template>
  <kw-uploader multiple preview :before-add="beforeAdd"></kw-uploader>
</template>
<script>
  export default {
    methods: {
      beforeAdd (file) {
        const maxSize = 1024 * 1024 * 1
        if (file.size > maxSize) {
          this.$toast(`您选择的文件超过了 ${maxSize / (1024 * 1024)}MB`)
          return false
        }

        return true
      }
    }
  }
</script>
```
### 自动上传
默认文件选择之后不会自动上传，设置auto属性为true，开启文件自动上传，默认为false。同时需要通过action属性指定文件上传的后端服务接口地址，action可以是一个字符串，也可以是一个对象，当为字符串时会被解析为:`{target: action}`形式，其中target属性即代表接口地址。action对象支持的所有可配置项参见下方说明。

对action中比较重要且难理解的属性做以详细说明：
* fileKey：文件上传至接口时的文件参数名，默认为 file，这是一个前后端共同约定的值
* fileValue：采用哪种数据格式上传文件，有两种形式
  
  file：代表包装File对象中的file属性指向的原生File对象，此时传递的是二进制文件，request的 Content-Type 为 multipart/form-data
  
  base64：代表包装File对象中的base64属性指向的文件base64的值，此时传递的是普通字符串，request的 Content-Type为 application/json

  ***当上传大文件时建议选择file的形式，因为大文件转base64会很耗时，导致卡顿，体验不好***

* extra：上传文件时需要附加传递的数据，因为大多数情况下上传文件也一并会传给接口一些其它的参数，这是可以在该属性中进行指定。如果其为函数，则组件会注入当前的包装File对象后调用函数得到数据
```html
<template>
  <kw-uploader
    multiple
    preview
    auto
    :action="action"></kw-uploader>
</template>
<script>
  export default {
    data: () => ({
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
    })
  }
</script>
```
### 手动上传
上一个示例演示了文件选择完毕后就会立即上传，如想手动控制上传，则可以访问Uploader组件实例上的start()方法进行文件上传

retry()方法可以重试再次上传，上传前一次上传失败的文件
```html
<template>
  <kw-uploader
    multiple
    preview
    :action="action"
    ref="uploaderRef"></kw-uploader>
  <kw-button size="full" @click="start">上传</kw-button>
  <kw-button size="full" @click="retry">重试</kw-button>
</template>
<script>
  export default {
    data: () => ({
      action: 'http://localhost:9999'
    }),
    methods: {
      start () {
        this.$refs.uploaderRef.start()
      },
      retry () {
        this.$refs.uploaderRef.retry()
      }
    }
  }
</script>
```
## API
### Props
名称 |描述|类型|可选值|默认值
---|---|---|---|---
accept|接受的文件类型，同原生input\[type="file"\]accept属性|string|-|image/*
multiple|是否支持多选|boolean|`true` `false`|false
preview|是否开启预览|boolean|`true` `false`|false
max-count|最大上传数量|number|大于0的整数|10
max-size|最大文件大小|number|-|1024 * 1024 * 10（10MB）
removable|是否可以删除预览图|boolean|`true` `false`|true
remove-action|删除预览图的动作,click：点击预览图右上角的删除按钮；drag：长按预览图然后拖拽至页面底部垃圾箱中松手删除；both：两者均可|string|click/drag/both|both
auto|是否自动上传|boolean|`true` `false`|false
action|配置上传接口地址及细粒度配置，可配置的属性参见下方|string/object|-|-
before-add|原生File对象被转换为包装File对象之前，即被添加至组件的files属性列表之前的的回调函数，返回false可终止文件读取，即过滤掉该文件，此回调函数常用来实现文件过滤操作|function|-|-
### action配置项
名称 |描述|类型|可选值|默认值
---|---|---|---|---
target|文件上传的后端服务接口地址|string|-|-
fileKey|文件上传至接口时的文件参数名|string|-|file
fileValue|采用哪种数据格式上传文件|string|file/base64|file
extra|上传文件时需要附加传递的数据，如果为函数，则组件会注入当前的包装File对象后调用函数得到数据|object/function|-|{}
### Methods
名称|描述|参数
---|---|---
start|开始上传文件|-
retry|重试再次上传|-
### Events
名称|描述|回调参数
---|---|---
after-add|所有包装File对象被添加至组件的files属性列表后触发|包装File对象组成的列表
exceed|选择的文件超过max-size最大文件尺寸的限制时触发|原生File对象
upload-success|文件上传成功时触发|包装File对象
upload-fail|文件上传失败时触发|包装File对象
