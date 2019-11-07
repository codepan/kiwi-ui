let map = new Map()
map.set('default', 14)
map.set('small', 12)
map.set('large', 16)

export default {
  has (size = 'default') {
    return map.has(size)
  },
  get (size = 'default') {
    return map.get(size)
  }
}
