// check if password and password confirmation are the same
function checkPassword () {
  var password = document.getElementById('password')
  var passwordConfirmation = document.getElementById('password-confirmation')

  if (password.value === passwordConfirmation.value) {
    passwordConfirmation.setCustomValidity('')
  } else if (password.value !== passwordConfirmation.value) {
    passwordConfirmation.setCustomValidity('Password don\'t match')
  }
}

// check if email already exist
function checkEmail () {
  var userEmail = document.getElementById('email').value

  io.socket.get('/user/find', {
    email: userEmail
  }, function (data) {
    if (data[0]) {
      email.setCustomValidity('This email is already taken')
    } else {
      email.setCustomValidity('')
      checkPassword()
    }
  })
}

// allow only numbers in 'price' and 'phone' area
function isNumberKey (evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode

  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false
  }

  return true
}
