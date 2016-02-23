/*
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  category (req, res) {
    Category.findOne({ title: req.param('category') }).exec(function (err, data) {
      if (err) {
        return res.serverError(err)
      }

      var categoryId = data.id

      DbService
        .multiple(Category.findOne({ title: req.param('category') }).populate('subcategories'), Ad.find({ categoryId: categoryId }))
        .then(function (data) {
          res.json({
            categories: data[0],
            ads: data[1]
          })
        })
    })
  }
}
