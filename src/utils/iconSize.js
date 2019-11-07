let map = new Map()
map.set('default', 22)
map.set('small', 16)
map.set('large', 28)

export default {
  has (size = 'default') {
    return map.has(size)
  },
  get (size = 'default') {
    return map.get(size)
  },
  set (sizeName, sizeValue) {
    map.set(sizeName, sizeValue)
  }
}
