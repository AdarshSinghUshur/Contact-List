'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    maxlength: 20,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z'-]+( [a-zA-Z'-]+)*$/.test(v);
      },
    }
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    maxlength: 30,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z'-]+( [a-zA-Z'-]+)*$/.test(v);
      },
    }
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    maxlength: 50,
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
    maxlength: 30,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z0-9'.-]+( [a-zA-Z0-9'.-]+)*$/.test(v);
      },
    }
  },
  streetAddress2: {
    type: String,
    maxlength: 20,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z0-9'.-]+( [a-zA-Z0-9'.-]+)*$/.test(v);
      },
    }
  },
  city: {
    type: String,
    maxlength: 30,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z0-9'-.]+( [a-zA-Z0-9'-.]+)*$/.test(v);
      },
    }
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
        return /^[0-9]{5}(?:-[0-9]{4})?$/.test(v);
      },
    }
  },
});

module.exports = mongoose.model('Contacts', ContactSchema);