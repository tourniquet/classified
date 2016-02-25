/*
 * SubcategoryController
 *
 * @description :: Server-side logic for managing subcategories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  subcategory (req, res) {
    Subcategory.findOne({ title: req.param('subcategory') }).exec(function (err, data) {
      if (err) {
        return res.serverError(err)
      }

      var subcategoryId = data.id

      DbService
        .multiple(Category.findOne({ title: req.param('category') }).populate('subcategories'), Subcategory.findOne({ id: subcategoryId }).populate('ads'))
        .then(function (data) {
          res.json({
            category: data[0],
            subcategory: data[1]
          })
        })
    })
  }
}
