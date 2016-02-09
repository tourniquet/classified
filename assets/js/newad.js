if (location.pathname === '/ad/newad2') {
  console.log('newad2')

  var vm = new Vue({
    // el: document.body,
    el: '#somecontent',
    data: {
      csrf: ''
    }
  })
}

request('/csrfToken', function (err, xhr, data) {
  vm.$data.csrf = JSON.parse(data)._csrf
})
