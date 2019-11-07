const DATETIME_REGEXP = /[yMdhsm]+/g
const paddingLeftZero = (str, length) => {
  str = str + ''
  return length === 1 ? str : ('00' + str).substr(str.length)
}

let format = (date, pattern = 'yyyy-MM-dd hh:mm:ss') => {
  if (!date) return ''
  if (typeof date === 'string') {
    date = date.replace(/-/g, '/') // 解决IOS safrai 实例化Date出错
    date = new Date(date)
  }

  if (typeof date === 'number') {
    date = new Date(date)
  }

  return pattern.replace(DATETIME_REGEXP, match => {
    let matchLength = match.length
    switch (match.charAt(0)) {
      case 'y': return (date.getFullYear() + '').substr(4 - matchLength)
      case 'M': return paddingLeftZero(date.getMonth() + 1, matchLength)
      case 'd': return paddingLeftZero(date.getDate(), matchLength)
      case 'w': return date.getDay() + 1
      case 'h': return paddingLeftZero(date.getHours(), matchLength)
      case 'm': return paddingLeftZero(date.getMinutes(), matchLength)
      case 's': return paddingLeftZero(date.getSeconds(), matchLength)
    }
  })
}

export default {
  format
}
