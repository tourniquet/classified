if (location.pathname === '/') {
  var vm = new Vue({
    el: document.body,
    data: {
      categories: [],
      ads: [],
      user: {
        id: ''
      }
    }
  })

  request('/category/find', function (err, xhr, data) {
    vm.$data.categories = JSON.parse(data)

    console.log(data.length)
  })

  request('/ad/find', function (err, xhr, data) {
    vm.$data.ads = JSON.parse(data)
  })

  request('/session/check', function (err, xhr, data) {
    vm.$data.user = JSON.parse(data)
  })
}
