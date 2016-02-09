// if (location.pathname === /^\d{8}$/) {
if (location.pathname.match(/^\/\d{8}$/)) {
  console.log('showad')

  var vm = new Vue({
    el: '#somecontent',
    data: {
      category: '',
      ad: {
        title: '',

      }
    }
  })

  request({ method:'GET', url:'/ad/find?url=' + location.pathname.match(/^\/(\d{8})$/)[1], json: true }, function (err, xhr, data) {
    vm.$data.ad = data[0]
  })
}
