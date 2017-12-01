/*Backend Actions*/

var mongoose = require('../config/mongodb');
var controller_common = require('./common');
var model_tris = require('../model/book');

var controller = {
    _name: "book",
    get: function(req, res) {
        res.json('im in!');

    },
    save: function(req, res) {
        res.json({result: 'ok'});

    },
    update: function(req, res) {
        res.json({result: 'ok'});

    },
    delete: function(req, res) {
        res.json({result: 'ok'});

    }

};

exports.execute = function(req, res) {

    controller_common.dispatch(req, res, controller);
};