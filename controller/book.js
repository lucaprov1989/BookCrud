/*Backend Actions*/
var mongoose = require('../config/mongodb');
var controller_common = require('./common');
var Book = require('../model/Book.js');

var controller = {
    _name: "book",
    //GET ALL BOOKS
    index: function(req, res) {
            res.json('no action found');
    },
    //GET ALL BOOKS
    getAll: function(req, res) {
        Book.find(function (err, books) {
            if (err) return next(err);
            res.json(books);
        });

    },
    //GET ONE FROM ID
    getOne: function(req, res) {
        Book.findById(req.params.id, function (err, book) {
            if (err) return next(err);
            res.json(book);
        });
    },
    //SAVE IT
    save: function(req, res) {
        Book.create(req.body, function (err, book) {
            if (err) return next(err);
            res.json(book);
        });
    },
    //UPDATE IT
    update: function(req, res) {
        Book.findByIdAndUpdate(req.params.id, req.body, function (err, book) {
            if (err) return next(err);
            res.json(book);
        });
    },
    //DELETE IT 
    delete: function(req, res) {
        Book.findByIdAndRemove(req.params.id, req.body, function (err, book) {
            if (err) return next(err);
            res.json(book);
        });
    }

};

exports.execute = function(req, res) {

    controller_common.dispatch(req, res, controller);
};