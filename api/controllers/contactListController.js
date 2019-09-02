'use strict';

var mongoose = require('mongoose'),
  Contact = mongoose.model('Contacts');

exports.list_all_contacts = function(req, res) {
  Contact.find({}, function(err, contact) {
    if (err)
      res.sendStatus(err);
    res.json(contact);
  });
};

exports.create_a_contact = function(req, res) {
  var new_contact = new Contact(req.body);
  new_contact.save(function(err, contact) {
    if (err)
      return res.status(400).json({ err:err.message });
    res.json(contact);
  });
};

exports.read_a_contact = function(req, res) {
  Contact.findById(req.params.contactId, function(err, contact) {
    if (!contact)
      res.sendStatus(404);
    else
      res.json(contact);
  });
};

exports.update_a_contact = function(req, res) {
  Contact.findById(req.params.contactId, function(err, contact) {
    if (!contact)
      res.sendStatus(404);
    else
      Contact.replaceOne({_id: req.params.contactId}, req.body, {new: true}, function(err, contact) {
        if (err)
          return res.status(400).json({ err:err.message });
        res.sendStatus(204);
        });
  }); 
};

exports.delete_a_contact = function(req, res) {
  Contact.findById(req.params.contactId, function(err, contact) {
    if (!contact)
      res.sendStatus(404);
    else 
      Contact.remove({
        _id: req.params.contactId
      }, function(err, contact) {
        if (err)
          res.sendStatus(err);
        res.sendStatus(204);
      });
  }); 
};