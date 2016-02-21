/*
 * SubcategoryController
 *
 * @description :: Server-side logic for managing subcategories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  subcategory (req, res) {
    DbService
      .multiple(Subcategory.findOne({ title: req.param('subcategory') }), Ad.find())
      .then(function (data) {
        res.view('subcategory', {
          subcategories: data[0].subcategories,
          ads: data[1]
        })
      })
  }
}
