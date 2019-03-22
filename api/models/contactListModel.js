'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 20
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,})?$/.test(v);
      },
    }
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v);
      },
    }
  },
  streetAddress1: {
    type: String,
    maxlength: 30
  },
  streetAddress2: {
    type: String,
    maxlength: 20
  },
  city: {
    type: String,
    maxlength: 30
  },
  state: {
    type: String,
    maxlength: 2,
    validate: {
      validator: function(v) {
        return /\b[a-zA-Z]{2}\b/.test(v);
      },
    }
  },
  postalCode: {
    type: String,
    validate: {
      validator: function(v) {
        return /^\d{5}$/.test(v);
      },
    }
  },
});

module.exports = mongoose.model('Contacts', ContactSchema);