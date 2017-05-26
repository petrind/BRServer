'use strict';


var mongoose = require('mongoose'),
    BukaReviewY = mongoose.model('BukaReviewYs');
var googleApiService = require('../../services/YoutubeApiService');
var CommonService = require('../../../services/CommonService');

exports.getReviewY = function(req, res) {
    if (!CommonService.tokenValidation(req, res)) {
            return;
    }
    return getReviewYFromYoutube();

    function getReviewYFromYoutube() {
        return googleApiService.getSearchYoutubeApi(req.query, callbackReviewYoutube);
    }
    function callbackReviewYoutube(data) {
        res.json(JSON.parse(data));
        res.send();
        //TODO build data for BukaSearch
        //save data
        var new_BukaReviewY = new BukaReviewY(req.body);
        new_BukaReviewY.save(function(err, bukaReviewG) {
            if (err){
                console.log(err);
                return;
            }
        });
    }
};