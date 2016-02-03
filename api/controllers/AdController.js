/*
 * AdController
 *
 * @description :: Server-side logic for managing ads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    Ad.find().exec(function (err, ad) {
      if (err) console.log(err)

      res.view('ad/index', {
        ads: ad
      })
    })
  },

  create: function (req, res) {
    // if (req.session.authenticated) {
    //   user = req.session.User.id
    // }

    Ad.create({
      title: req.param('title'),
      description: req.param('description')
    }).exec(function (err) {
      if (err) console.log(err)

      res.redirect('/')
    })
  }
}
