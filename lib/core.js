window.d1 = (self => {
  const formatTime = (date = new Date()) =>
    `${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${
      date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    }.${date.getMilliseconds() < 100 ? '' + date.getMilliseconds() + '0' : date.getMilliseconds()}`

  const appendMsg = (cls, ...msg) => {
    const span = document.createElement('li')
    if (cls) {
      span.className = cls
    }
    span.innerText = formatTime() + ' ' + msg.map(JSON.stringify).join(', ')
    document.getElementById('output').appendChild(span)
  }

  const identity = a => a
  const first = arr => (arr && arr.length ? arr[0] : undefined)
  const getter = field => obj => obj[field]

  const println = (...msg) => appendMsg(undefined, ...msg)
  const error = e => appendMsg('error', e.message)
  const fail = e => {
    self.error(e)
    throw e
  }

  return Object.assign(self, {
    error,
    fail,
    first,
    identity,
    println,
  })
})(window.d1 || {})
