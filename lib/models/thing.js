'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var ThingSchema = new Schema({
  word: String,
  lastFetched: Date,
  data: Array
});



mongoose.model('Thing', ThingSchema);
