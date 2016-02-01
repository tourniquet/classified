/*
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	registration: function (req, res) {
    res.view('user/registration')
  },

  profile: function (req, res) {
    User.findOne({ id: req.param('id') }).exec(function (err, user) {
      if (err) console.log(err)
      if (!user) res.view(404)

      res.view('user/profile', {
        user: user
      })
    })
  }
}
