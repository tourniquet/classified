if (location.pathname.match(/^\/profile\/\w+$/)) {
  var vm = new Vue({
    el: '#content',
    data: {
      ads: [],
      user: {
        id: ''
      },
      ownerId: ''
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

  io.socket.get('/session/check', function (data) {
    vm.$data.user = data
  })

  var id = location.pathname.split('/')[2]
  io.socket.get('/user/data', {
    id: id
  }, function (data) {
    vm.$data.ownerId = id
    vm.$data.ads = data.user.ads
  })
}
