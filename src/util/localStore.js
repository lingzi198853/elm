module.exports = {
  getStore: function (key) {
    if (!key) return
    let value
    try {
      value = window.localStorage.getItem(key)
      return value
    } catch (ex) {
      // 开发环境下提示 error
      if (process.env === 'development') {
        console.error('localStorage.getItem报错,', ex.message)
      }
    }
  },
  setStore: function (key, value) {
    try {
      // ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
      window.localStorage.setItem(key, value)
    } catch (ex) {
      // 开发环境下提示 error
      if (process.env === 'development') {
        console.error('localStorage.setItem报错,', ex.message)
      }
    }
  }
}
