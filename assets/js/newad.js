if (location.pathname === '/newad') {
  var vm = new Vue({
    // el: document.body,
    el: '#somecontent',
    data: {
      csrf: '',
      categories: [],
      subcategories: [],
      category: ''
    },

    methods: {
      requestSubcategories () {
        io.socket.get('/subcategory/find', {
          category: vm.category
        }, function (data) {
          vm.$data.subcategories = data
        })

        io.socket.get('/csrfToken', function (data) {
          vm.$data.csrf = data._csrf
        })
      }
    }
  })

  io.socket.get('/csrfToken', function (data) {
    vm.$data.csrf = data._csrf
  })

  io.socket.get('/category/find', function (data) {
    vm.$data.categories = data
  })
}
