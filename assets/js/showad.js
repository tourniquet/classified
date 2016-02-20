if (location.pathname.match(/^\/\d{8}$/)) {
  var vm = new Vue({
    el: '#content',
    data: {
      category: {
        title: ''
      },

      ad: {
        subcategory: '',
        title: '',
        description: '',
        price: ''
      }
    },

    methods: {
      moment: function (date) {
        return moment(date).format('D MMMM YYYY')
      }
    }
  })

  io.socket.get('/ad/find', {
    url: location.pathname.match(/^\/(\d{8})$/)[1]
  }, function (data) {
    vm.$data.ad = data[0]

    // find category by id
    var category = data[0].subcategory.category
    io.socket.get('/category/find', {
      id: category
    }, function (data) {
      vm.$data.category = data
    })
  })
}
