'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BukaBuySchema = new Schema({
  bukaBuyName: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  bukaLapakUrl: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  parent: {
    type: [{
      type: String,
      enum: ['bukaItem', 'bukaReview']
    }],
    default: ['bukaItem']
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  additionalInfo: {
    type: String
  }
});

module.exports = mongoose.model('BukaBuys', BukaBuySchema);