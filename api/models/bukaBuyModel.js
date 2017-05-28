'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BukaBuySchema = new Schema({
  bukaBuyName: {
    type: String,
  },
  bukaLapakUrl: {
    type: String,
  },
  parent: {
    type: [{
      type: String,
      enum: ['bukaItem', 'bukaReview', 'bukaReviewG', 'bukaReviewY']
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