'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BukaItemSchema = new Schema({
  bukaSearch: {
    type: String,
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  additionalInfo: {
    type: Schema.Types.Mixed
  }
});

module.exports = mongoose.model('BukaItems', BukaItemSchema);