'use strict';


var mongoose = require('mongoose'),
    BukaReviewG = mongoose.model('BukaReviewGs');
var googleApiService = require('../../services/GoogleApiService');
var CommonService = require('../../services/CommonService');

/**
 * Get review from google
 */
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
    }
};

//TODO make method to save what google review  click by user