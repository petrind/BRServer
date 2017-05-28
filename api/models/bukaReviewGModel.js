'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BukaReviewGSchema = new Schema({
    bukaSearch: {
        type: String,
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
    type: Schema.Types.Mixed
  }
});

module.exports = mongoose.model('BukaReviewGs', BukaReviewGSchema);