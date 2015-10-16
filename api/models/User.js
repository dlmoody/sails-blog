/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,
  attributes: {
    username : {
      type: 'string',
      unique: true,
      defaultsTo: ''
    },
    email : {
      type: 'email',
      unique: true,
      defaultsTo: ''
    },
    firstName: {
      type: 'string',
      defaultsTo: ''
    },
    lastName: {
      type: 'string',
      defaultsTo: ''
    },
    entries:{
      collection: 'Entry',
      via: 'user'
    },
    passports : {
      collection: 'Passport',
      via: 'user'
    }

  }
};
