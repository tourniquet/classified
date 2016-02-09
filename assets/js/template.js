var v = new Vue({
  el: '#user-navbar',
  data: {
    user: {
      id: ''
    }
  }
})

request('/session/check', function (err, xhr, data) {
  v.$data.user = JSON.parse(data)
})
