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

      var subcategoryTitle = data.title

      DbService
        .multiple(Category.findOne({ title: req.param('category') }).populate('subcategories'), Subcategory.find({ title: subcategoryTitle }).populate('ads'))
        .then(function (data) {
          var ads = data[1]
          console.log(ads)
          res.json({
            categories: data[0],
            ads: data[1]
          })
        })
    })
  }
}
