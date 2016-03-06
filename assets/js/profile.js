if (location.pathname.match(/^\/profile\/\w+$/)) {
  var vm = new Vue({
    el: '#content',
    data: {
      ads: []
    },

    methods: {
      updateAd (ad) {
        var self = this
        var url = '/ad/' + ad.id

        if (confirm('some message')) {
          io.socket.put(url, {
            updatedAt: new Date()
          }, function (data) {
            self.ads.$remove(ad)
            self.ads.push(data)
          })
        }
      },

      removeAd (ad) {
        var url = '/ad/' + ad.id

        if (confirm('Some message')) {
          this.ads.$remove(ad)

          io.socket.delete(url, function (data) {
            data
          })
        }
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
