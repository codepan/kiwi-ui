let map = new Map()
map.set('light', '#fff')
map.set('stable', '#e8e8e8')
map.set('primary', '#2d8cf0')
map.set('info', '#50bfff')
map.set('success', '#65ccaf')
map.set('warning', '#f7ba2a')
map.set('danger', '#ff4949')
map.set('lively', '#ff7800')
map.set('royal', '#8a6de9')

export default {
  has: color => map.has(color),
  get: color => map.get(color),
  keys: () => Array.from(map.keys()),
  values: () => map.values(),
  entries: () => map.entries(),
  getBgColorClass: color => `kw-${color}-bg-color`,
  getTextColorClass: color => `kw-${color}-text-color`,
  getBorderColorClass: color => `kw-${color}-border-color`
}
