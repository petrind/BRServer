'use strict';


var mongoose = require('mongoose'),
    BukaReviewY = mongoose.model('BukaReviewYs');
var googleApiService = require('../../services/YoutubeApiService');
var CommonService = require('../../services/CommonService');

/**
 * Get review from youtube
 */
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
    }
};

//TODO make method to save what youtube video click by user