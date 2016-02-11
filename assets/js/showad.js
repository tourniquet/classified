if (location.pathname.match(/^\/\d{8}$/)) {
  console.log('showad')

  var vm = new Vue({
    el: '#somecontent',
    data: {
      category: '',
      ad: {
        title: '',

      }
    }
  })

  io.socket.get('/ad/find', {
    url: location.pathname.match(/^\/(\d{8})$/)[1]
  }, function (data) {
    vm.$data.ad = data[0]
  })
}
