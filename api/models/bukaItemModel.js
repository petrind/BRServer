'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BukaItemhSchema = new Schema({
  bukaItemName: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  bukaSearchId : {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  additionalInfo: {
    type: String
  }
});

module.exports = mongoose.model('BukaItems', BukaItemhSchema);