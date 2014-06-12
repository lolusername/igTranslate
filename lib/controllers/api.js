'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing');

/**
 * Get awesome things
 */
exports.fetchPicsForWord = function(req, res) {
  return Thing.find({word: req.params.word})
};