const fs = require('fs')
const path = require('path')

function hasIndexJs (dir) {
  let dirs = []
  try {
    dirs = fs.readdirSync(dir)
  } catch (e) {
    dirs = null
  }
  return dirs && dirs.includes('index.js')
}

function getComponentsEntry (entry) {
  let dirs = fs.readdirSync(entry)

  let results = {}

  dirs = dirs.filter(dir => {
    return hasIndexJs(path.resolve(entry, dir))
  }).forEach(dir => {
    results[dir] = path.resolve(entry, dir)
  })

  return results
}

module.exports = getComponentsEntry