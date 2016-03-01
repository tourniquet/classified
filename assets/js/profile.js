if (location.pathname.match(/^\/profile\/\w+$/)) {
  var vm = new Vue({
    el: '#content',
    data: {
      ads: []
    },

    methods: {
      removeAd (index) {
        // console.log(index)
        // var url = '/remove/' + this.ads[index].id
        // console.log(this.ads[index].)
        // this.ads.splice(index, 1)

        io.socket.delete(url, function (data) {
          data
        })
      },

      updateAd () {

      }
    }
  })

  var id = location.pathname.split('/')[2]
  io.socket.get('/user/data', {
    id: id
  }, function (data) {
    vm.$data.ads = data.user.ads
  })
}
