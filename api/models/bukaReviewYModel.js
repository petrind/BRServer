'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BukaReviewYSchema = new Schema({
    bukaSearch: {
        type: String,
    },
    YTitle : {
        type: String
    },
    YUrl : {
        type : String
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    additionalInfo: {
    type: Schema.Types.Mixed
  }
});

module.exports = mongoose.model('BukaReviewYs', BukaReviewYSchema);