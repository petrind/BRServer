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
    type: String
  }
});

module.exports = mongoose.model('BukaReviewYs', BukaReviewYSchema);