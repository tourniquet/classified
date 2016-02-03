/*
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var bcrypt = require('bcrypt')

module.exports = {
  create: function (req, res) {
    if (!req.param('email') || !req.param('password')) {
      res.redirect('/user/login')
    }

    User.findOne({ where: { email: req.param('email') } }, function (err, user) {
      bcrypt.compare(req.param('password'), user.encryptedPassword, function (err, valid) {
        if (!err) {
          req.session.authenticated = true
          req.session.User = user

          res.view('user/profile', {
            user: user
          })
          // res.redirect('/user/profile' + user.id)
        } else if (err) {
          res.view('user/registration')
        }
      })
    })
  },

  redirectMe: function (req, res) {
    res.view('/user')
  },

  destroy: function (req, res, next) {
    req.session.destroy()

    res.redirect('/user/login')
  }
}
