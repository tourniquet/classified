/*
 * AdController
 *
 * @description :: Server-side logic for managing ads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index (req, res) {
    'use strict'

    DbService
      .multiple(Category.find(), Ad.find())
      .then(function (a) {
        res.view('ad/index', {
          categories: a[0],
          ads: a[1],
          user: req.session.User
        })
      }, function (err) {
        res.serverError(err)
      })
  },

  newad (req, res) {
    res.view('ad/newad', {
      user: req.session.User
    })
  },

  create (req, res) {
    var url = new Date().getTime().toString().slice(5)
    var user;

    if (req.session.authenticated) {
      user = req.session.User.id
    } else {
      user = null;
    }

    var price = req.param('price') + ' ' + req.param('currency')

    Ad.create({
      url: url,
      title: req.param('title'),
      description: req.param('description'),
      price: price,
      user: user,
      subcategory: req.param('subcategory')
    }).exec(function (err) {
      if (err) {
        return res.serverError(err)
      }

      res.redirect('/')
    })
  },

  showad (req, res) {
    res.view('ad/showad')
  }
}
