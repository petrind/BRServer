'use strict';

var request = require('request');
var Promise = require('promise');
var config = require('../Config.json');
var CommonService = require('./CommonService');

exports.getSearchYoutubeApi = function (query, callback) {
    query.keywords = CommonService.preprocessKeywordReview(query.keywords);
    console.log("https://www.googleapis.com/youtube/v3/search?key="
    + config['ApiKey']
    + "&part=" + config['YoutubeQueryPart']
    + "&q=" + query.keywords);
    
    request.get({ url:  "https://www.googleapis.com/youtube/v3/search?key="
    + config['ApiKey']
    + "&part=" + config['YoutubeQueryPart']
    + "&q=" + query.keywords}, function(error, response, body) {
        if (!error && response.statusCode == 200) { 
            callback(body);
            return;
        } 
        console.log(error)
        callback(null);
    }); 
}