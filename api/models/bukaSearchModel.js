'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BukaSearchSchema = new Schema({
  searchQuery: {
    type: Schema.Types.Mixed,
    Required: 'Search query'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  additionalInfo: {
    type: Schema.Types.Mixed
  }
});

module.exports = mongoose.model('BukaSearchs', BukaSearchSchema);