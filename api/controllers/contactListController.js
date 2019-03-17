'use strict';

var mongoose = require('mongoose'),
  Contact = mongoose.model('Contacts');

const { check, validationResult } = require('express-validator/check');

exports.list_all_contacts = function(req, res) {
  Contact.find({}, function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};

exports.create_a_contact = function(req, res) {
  req.checkBody('firstName', 'First Name is required').notEmpty();
  req.checkBody('firstName', 'First Name should be no more than 20 characters').isLength({max: 20});
  req.checkBody('lastName', 'Last Name is required').notEmpty();
  req.checkBody('lastName', 'Last Name should be no more than 30 characters').isLength({max: 30});
  req.checkBody('email', 'Email does not appear to be valid').isEmail();
  //req.checkBody('phone', 'Phone number does not appear to be valid').isMobilePhone();


  var errors = req.validationErrors();
  if (errors) {
    return res.status(400).json({ errors });
  }
  var new_contact = new Contact(req.body);
  new_contact.save(function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};

exports.read_a_contact = function(req, res) {
  Contact.findById(req.params.contactId, function(err, contact) {
    if (err)
      res.send(err);
    if (!contact)
      res.send(404);
    else
      res.json(contact);
  });
};

exports.update_a_contact = function(req, res) {
  Contact.findById(req.params.contactId, function(err, contact) {
    if (err)
      res.send(err);
    if (!contact)
      res.send(404);
    else
      Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true}, function(err, contact) {
        if (err)
          res.send(err);
        res.json(contact);
        });
  }); 
};

exports.delete_a_contact = function(req, res) {
  Contact.findById(req.params.contactId, function(err, contact) {
    if (err)
      res.send(err);
    if (!contact)
      res.send(404);
    else 
      Contact.remove({
        _id: req.params.contactId
      }, function(err, contact) {
        if (err)
          res.send(err);
        res.json({ message: 'Contact successfully deleted' });
      });
  }); 
};