// if (location.pathname === /^\d{8}$/) {
if (location.pathname === 25787463) {
  var adUri = location.pathname

  console.log(adUri)


  var vm = new Vue({
    el: document.body,
    data: {
      category: '',
      ad: data,
      user: {
        id: ''
      }
    }
  })

  request('/adUri', function (err, xhr, data) {
    vm.$data.ad = JSON.parse(data)
  })

  // request('/ad/find', function (err, xhr, data) {
  //   vm.$data.ads = JSON.parse(data)
  // })
  //
  // request('/session/check', function (err, xhr, data) {
  //   vm.$data.user = JSON.parse(data)
  // })
}
