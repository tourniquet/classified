if (location.pathname === '/') {
  var vm = new Vue({
    el: '#content',
    data: {
      categories: [],
      ads: []
    }
  })

  io.socket.get('/category/find', function (data) {
    vm.$data.categories = data
  })

  io.socket.get('/ad/find', function (data) {
    vm.$data.ads = data
  })

  io.socket.on('ad', function () {
    io.socket.get('/ad/find', function (data) {
      vm.$data.ads = data
    })
  })
}
