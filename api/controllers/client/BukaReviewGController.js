'use strict';


var mongoose = require('mongoose'),
    BukaReviewG = mongoose.model('BukaReviewGs');
var googleApiService = require('../../services/GoogleApiService');
var CommonService = require('../../services/CommonService');

exports.getReviewG = function(req, res) {
    if (!CommonService.tokenValidation(req, res)) {
            return;
    }
    return getReviewGFromGoogle();

    function getReviewGFromGoogle() {
        return googleApiService.getSearchGoogleApi(req.query, callbackReviewGoogle);
    }

    function callbackReviewGoogle(data) {
        res.json(JSON.parse(data));
        res.send();
        //TODO build data for BukaSearch
        //save data
        var new_BukaReviewG = new BukaReviewG(req.body);
        new_BukaReviewG.save(function(err, bukaReviewG) {
            if (err){
                console.log(err);
                return;
            }
        });
    }
};