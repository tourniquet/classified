/*
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  somefunc (req, res) {
    Ad.find({ subcategory: '56cb0e7ae43def5b64bfd19b' }).exec(function () {
      res.json()
    })
  },

  index (req, res) {
    DbService
      .multiple(Subcategory.find(), Ad.find())
      .then(function (data) {
        res.view('category', {
          subcategories: data[0],
          ads: data[1]
        })
      }, function (err) {
        res.serverError(err)
      })
  },

  category (req, res) {
    Category.findOne({ title: req.param('category') }).exec(function (err, data) {
      if (err) {
        return res.serverError(err)
      }

      var categoryId = data.id

      DbService
        .multiple(Category.findOne({ title: req.param('category') }).populate('subcategories'), Ad.find({ categoryId: categoryId }))
        .then(function (data) {
          res.view('subcategory', {
            subcategories: data[0].subcategories,
            ads: data[1]
          })
        })
    })
  }
}
