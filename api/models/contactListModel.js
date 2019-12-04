'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
  city: {
    type: String,
    maxlength: 30,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z0-9'.,-]+( [a-zA-Z0-9'.-]+)*$/.test(v);
      }
    }
  },
  country: {
    type: String,
    maxlength: 30,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z0-9'.-]+( [a-zA-Z0-9'.-]+)*$/.test(v);
      }
    }
  }
});

var EmployerSchema = new Schema({
  jobTitle: {
    type: String,
    maxlength: 30,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z0-9'.-]+( [a-zA-Z0-9'.-]+)*$/.test(v);
      }
    }
  },
  company: {
    type: String,
    maxlength: 30,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z0-9'.-]+( [a-zA-Z0-9'.-]+)*$/.test(v);
      }
    }
  }
});

var ContactSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    maxlength: 20,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z'-]+( [a-zA-Z'-]+)*$/.test(v);
      }
    }
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    maxlength: 30,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z'-]+( [a-zA-Z'-]+)*$/.test(v);
      }
    }
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    maxlength: 50,
    validate: {
      validator: function(v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,})?$/.test(v);
      }
    }
  },
  location: {
    type: LocationSchema,
  },
  employer: {
    type: EmployerSchema
  }  
});

module.exports = mongoose.model('Contacts', ContactSchema);