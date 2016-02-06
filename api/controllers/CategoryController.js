/*
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
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
  }
}
