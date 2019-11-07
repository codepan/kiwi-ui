const isType = (input, type) => {
  type = type.toLowerCase()
  type = type.charAt(0).toUpperCase() + type.slice(1)
  return Object.prototype.toString.call(input) === `[object ${type}]`
}

export default {
  isObject: input => isType(input, 'object'),
  isString: input => isType(input, 'string'),
  isNumber: input => isType(input, 'number'),
  isDate: input => isType(input, 'date'),
  isArray: input => Array.isArray(input),
  isFunction: input => isType(input, 'function')
}