'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BukaSearchSchema = new Schema({
  searchQuery: {
    type: String,
    Required: 'Search query'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  additionalInfo: {
    type: String
  }
});

module.exports = mongoose.model('BukaSearchs', BukaSearchSchema);