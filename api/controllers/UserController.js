/* globals User */

/*
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create (req, res) {
    User.create(req.body).exec(function (err, result) {
      if (err) {
        return res.serverError(err)
      }

      return res.redirect('/')
    })
  },

  data (req, res) {
    User.findOne({ id: req.param('id') }).populate('ads').exec(function (err, user) {
      if (err) {
        return res.serverError(err)
      }

      if (!user) {
        res.view(404)
      }

      res.json({
        user: user
      })
    })
  }
}
