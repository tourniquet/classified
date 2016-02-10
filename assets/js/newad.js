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
        request({ method:'GET', url:'/subcategory/find?category=' + vm.category, json: true }, function (err, xhr, data) {
          vm.$data.subcategories = data
        })
      }
    }
  })

  request('/csrfToken', function (err, xhr, data) {
    vm.$data.csrf = JSON.parse(data)._csrf
  })

  request('/category/find', function (err, xhr, data) {
    vm.$data.categories = JSON.parse(data)
  })
}
