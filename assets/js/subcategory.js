if (location.pathname.match(/^\/(?!ad|category|subcategory)(\w+)\/(?!find|create)(\w+)$/)) {
  var vm = new Vue({
    el: '#content',
    data: {
      category: '',
      subcategories: [],
      ads: []
    }
  })

  var category = location.pathname.split('/')[1]
  var subcategory = location.pathname.split('/')[2]
  io.socket.get('/subcategory/data', {
    category: category,
    subcategory: subcategory
  }, function (data) {
    vm.$data.category = data.category.title
    vm.$data.subcategories = data.category.subcategories
    vm.$data.ads = data.subcategory.ads
  })
}
