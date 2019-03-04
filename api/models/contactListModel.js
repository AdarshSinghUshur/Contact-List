'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  firstName: {
    type: String,
    required: 'First Name is required'
  },
  lastName: {
    type: String,
    required: 'Last Name is required'
  },
  email: {
    type: String,
    required: 'Email is required'
  },
  phone: {
    type: String,
  },
  streetAddress1: {
    type: String,
  },
  streetAddress2: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  postalCode: {
    type: String,
  },
});

module.exports = mongoose.model('Contacts', ContactSchema);