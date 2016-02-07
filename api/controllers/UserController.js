/*
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	registration (req, res) {
    res.view('user/registration')
  },

  profile (req, res) {
    User.findOne({ id: req.param('id') }).populate('ads').exec(function (err, user) {
      if (err) {
        return res.serverError(err)
      }

      if (!user) res.view(404)

      res.view('user/profile', {
        user: user
      })
    })
  }
}
