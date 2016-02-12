/*
* Ad.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    url: {
      type: 'integer'
    },

    user: {
      model: 'user'
    },

    subcategory: {
      model: 'subcategory'
    },

    title: {
      type: 'string',
      minLength: 3,
      required: true
    },

    description: {
      type: 'string',
      required: true
    }
  },

  afterCreate (values, next) {
    Ad.publishCreate(values)

    next()
  }
}
