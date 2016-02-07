/*
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var bcrypt = require('bcrypt')

module.exports = {
  create (req, res) {
    if (!req.param('email') || !req.param('password')) {
      res.redirect('/user/login')
    }

    User.findOne({ where: { email: req.param('email') } }, function (err, user) {
      bcrypt.compare(req.param('password'), user.encryptedPassword, function (err, valid) {
        if (!err) {
          req.session.authenticated = true
          req.session.User = user

          res.redirect('/')
        } else if (err) {
          res.redirect('/user/login')
        }
      })
    })
  },

  destroy (req, res, next) {
    req.session.destroy()

    res.redirect('/')
  }
}
