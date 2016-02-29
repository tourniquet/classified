if (location.pathname.match(/^\/profile\/\w+$/)) {
  var vm = new Vue({
    el: '#content',
    data: {
      ads: []
    }
  })

  var id = location.pathname.split('/')[2]
  io.socket.get('/user/data', {
    id: id
  }, function (data) {
    vm.$data.ads = data.user.ads
  })
}
