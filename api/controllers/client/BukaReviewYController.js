'use strict';


var mongoose = require('mongoose'),
  BukaReviewY = mongoose.model('BukaReviewYs');
var bukalapakApiService = require('../../services/YoutubeApiService');

exports.getReviewY = function(req, res) {
    return getReviewYFromYoutube();

    function getReviewYFromYoutube() {
        return bukalapakApiService.getSearchYoutubeApi(req.query.keyword, callbackReviewYoutube);
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