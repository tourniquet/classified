/*
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt')

module.exports = {
  schema: true,

  attributes: {
    email: {
      type: 'email',
      required: true,
      unique: true
    },

    encryptedPassword: {
      type: 'string'
    },

    phone: {
      type: 'array',
      required: true,
      unique: true
    },

    ads: {
      collection: 'ad',
      via: 'user'
    },

    toJSON () {
      var obj = this.toObject()
      delete obj.encryptedPassword
      delete obj._csrf
      return obj
    }
  },

  beforeCreate (values, next) {
    bcrypt.hash(values.password, 10, function (err, encryptedPassword) {
      if (err) console.log(err)

      values.encryptedPassword = encryptedPassword
      next()
    })
  }
}
