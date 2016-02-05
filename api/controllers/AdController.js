/*
 * AdController
 *
 * @description :: Server-side logic for managing ads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
  index: function (req, res) {
    Ad.find().exec(function (err, ad) {
      if (err) {
        return res.serverError(err)
      }

      res.view('ad/index', {
        ads: ad,
        user: req.session.User
      })
    })
  },

  newad: function (req, res) {
    res.view('ad/newad', {
      user: req.session.User
    })
  },

  create: function (req, res) {
    var url = new Date().getTime().toString().slice(5)
    var user;

    if (req.session.authenticated) {
      user = req.session.User.id
    } else {
      user = null;
    }

    Ad.create({
      url: url,
      title: req.param('title'),
      description: req.param('description'),
      user: user,
      subcategory: '56b34eee160553640c262eec'
    }).exec(function (err) {
      if (err) {
        return res.serverError(err)
      }

      res.redirect('/')
    })
  },

  showad: function (req, res) {
    Ad.findOne({ url: req.param('id') }).populate('subcategory').exec(function (err, ad) {
      if (err) {
        return res.serverError(err)
      }

      res.view('ad/showad', {
        ad: ad,
        user: req.session.User
      })
    })
  }
}
