function getColor(color) {
  let ele = document.createElement('div')
  ele.style.color = color
  ele.setAttribute('id', 'temp-color-dom')
  document.body.appendChild(ele)
  let style = document.defaultView.getComputedStyle(document.getElementById('temp-color-dom'), null)

  window.setTimeout(() => {
    document.body.removeChild(ele)
  }, 100)

  return style['color']
    .replace(/^rgb\(([^\\)]+)\)/, '$1')
    .replace(/\s/g, '')
    .split(',')
}

export function mix(color) {
  let rgb1 = getColor(color)
  let rgb2 = [230, 230, 230]
  let result = []
  rgb1.forEach((item, index) => {
    result.push(Math.floor(rgb1[index] * rgb2[index] / 255))
  })
  result = `rgb(${result.join(',')})`
  return result
}
