if (location.pathname === '/login') {
  var vm = new Vue({
    el: '#content',

    data: {
      csrf: ''
    }
  })

  io.socket.get('/csrfToken', function (data) {
    vm.$data.csrf = data._csrf
  })
}
