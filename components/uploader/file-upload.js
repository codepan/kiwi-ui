import { type as typeUtil } from '~src/utils'


class FileUpload {
  defaultAction = {
    target: '',
    fileKey: 'file',
    fileValue: 'file',
    extra: {}
  }

  action = {}

  file = null

  STATUS = {
    UPLOADING: 'uploading',
    SUCCESS: 'success',
    FAIL: 'fail'
  }

  setAction (action) {
    this.action = {...this.defaultAction, ...action}
  }

  transformDataToFormData (file) {
    const { action } = this

    const formData = new FormData()
    let extra = {}

    if (typeUtil.isFunction(action.extra)) {
      extra = action.extra(file)
    } else if (typeUtil.isObject(action.extra)) {
      extra = action.extra
    }

    Object.entries(extra).forEach(([ key, value ]) => {
      formData.append(key, value)
    })
    formData.append(action.fileKey, file[action.fileValue])
    return formData
  }

  transformDataToJSON (file) {
    const { fileKey, fileValue, extra } = this.action
    let data = {}
    let newExtra = {}
    if (typeUtil.isFunction(extra)) {
      newExtra = extra(file)
    } else if (typeUtil.isObject(extra)) {
      newExtra = extra
    }

    Object.entries(newExtra).forEach(([ key, value ]) => {
      data[key] = value
    })

    data[fileKey] = file[fileValue]

    return JSON.stringify(data)
  }

  buildData (file) {
    const { fileValue } = this.action
    if (fileValue === 'file') {
      return this.transformDataToFormData(file)
    }

    if (fileValue === 'base64') {
      return this.transformDataToJSON(file)
    }

    return null
  }

  upload (file) {
    return new Promise((resolve, reject) => {
      this.file = file

      const data = this.buildData(file)
      this.sendData(data).then(resolve).catch(reject)
    })
  }

  sendData (data) {
    return new Promise((resolve ,reject) => {
      this.setStatus(this.STATUS.UPLOADING)
      const { target, fileValue } = this.action

      const xhr = new XMLHttpRequest()
      xhr.upload.onprogress = e => {
        if (e.lengthComputable) {
          this.setProgress(Math.round(e.loaded / e.total * 100))
        }
      }

      xhr.onerror = () => {
        this.setStatus(this.STATUS.FAIL)
        reject()
      }

      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            this.setStatus(this.STATUS.SUCCESS)
            this.setResonse(xhr.responseText || xhr.response)
            resolve()
          } else {
            this.setStatus(this.STATUS.FAIL)
            reject()
          }
        }
      }, false)

      xhr.open('POST', target, true)

      if (fileValue === 'base64') {
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
      }

      xhr.send(data)
    })
  }

  setStatus (status) {
    this.file.status = status
  }

  setProgress (progress) {
    this.file.progress = progress
  }

  setResonse (response) {
    try {
      this.file.response = JSON.parse(response)
    } catch (e) {
      this.file.response = response
    }
  }
}

export default new FileUpload