if (location.pathname === '/') {
  var vm = new Vue({
    // el: document.body,
    el: '#somecontent',
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
}
