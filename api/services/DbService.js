module.exports = {
  multiple () {
    'use strict'

    return new Promise((resolve, reject) => {
      var returned = false
      var l = arguments.length
      var counter = 0
      var results = []
      for (let i = 0; i < l; i++) {
        arguments[i].exec(function (err, result) {
          if (returned) {
            return
          }
          if (err) {
            returned = true
            return reject(err)
          }
          results[i] = result
          counter++
          if (counter === l) {
            resolve(results)
          }
        })
      }
    })
  }
}
