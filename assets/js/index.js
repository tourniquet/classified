if (location.pathname === '/') {
  var vm = new Vue({
    // el: document.body,
    el: '#somecontent',
    data: {
      categories: [],
      ads: []
    }
  })

  request('/category/find', function (err, xhr, data) {
    vm.$data.categories = JSON.parse(data)
  })

  request('/ad/find', function (err, xhr, data) {
    vm.$data.ads = JSON.parse(data)
  })
}
