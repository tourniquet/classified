var v = new Vue({
  el: '#user-navbar',
  data: {
    user: {
      id: ''
    }
  }
})

io.socket.get('/session/check', function (data) {
  v.$data.user = data
})
