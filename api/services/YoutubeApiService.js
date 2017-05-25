'use strict';

var request = require('request');
var Promise = require('promise');
var config = require('../Config.json');
var CommonService = require('./CommonService');

exports.getSearchYoutubeApi = function (query, callback) {
    query.keyword = CommonService.preprocessKeywordReview(query.keyword);
    request.get({ url:  "https://www.googleapis.com/youtube/v3/search?key="
    + config['ApiKey']
    + "&q=" + query.keyword}, function(error, response, body) {
        if (!error && response.statusCode == 200) { 
            callback(body);
            return;
        } 
        console.log(error)
        callback(null);
    }); 
}