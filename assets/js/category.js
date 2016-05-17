/* globals location, Vue, io */

if (location.pathname.match(/^\/category\/\w+$/)) {
  var vm = new Vue({
    el: '#content',
    data: {
      category: '',
      subcategories: [],
      ads: []
    }
  })

  var category = location.pathname.split('/')[2]
  io.socket.get('/category/data', {
    category: category
  }, function (data) {
    vm.$data.category = data.categories.title
    vm.$data.subcategories = data.categories.subcategories
    vm.$data.ads = data.ads
  })
}
