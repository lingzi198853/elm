module.exports = {
  setCookie: function (name, value, expires, path, domain, secure) {
    var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value)
    if (expires instanceof Date) {
      cookieText += '; expires=' + expires
    }
    if (path) {
      cookieText += '; path=' + path
    }
    if (domain) {
      cookieText += '; domain=' + domain
    }
    if (secure) {
      cookieText += '; secure=' + secure
    }
    document.cookie = cookieText
  },
  getCookie: function (name) {
    var cname = name + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim()
      if (c.indexOf(cname) === 0) return c.substring(name.length, c.length)
    }
    return ''
  },
  delCookie: function (name) {
    document.cookie = name + '=; expires=' + new Date(0)
  }
}
