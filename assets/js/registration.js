var password = document.getElementById('password')
var passwordConfirmation = document.getElementById('password-confirmation')

var checkPassword = function() {
  if (password.value === passwordConfirmation.value) {
    passwordConfirmation.setCustomValidity('')
  } else if (password.value !== passwordConfirmation.value) {
    passwordConfirmation.setCustomValidity('Password don\'t match')
  }
}

passwordConfirmation.onkeyup = checkPassword


// allow only numbers in 'price' and 'phone' area
var isNumberKey = function (evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode

  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false
  }

  return true
}
