'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BukaReviewGSchema = new Schema({
    bukaItemId: {
        type: String,
        Required: 'ItemId'
    },
    GTitle : {
        type: String
    },
    GUrl : {
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

module.exports = mongoose.model('BukaReviewGs', BukaReviewGSchema);