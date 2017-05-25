'use strict';

var request = require('request');
var Promise = require('promise');
var config = require('../Config.json');
var CommonService = require('./CommonService');

exports.getSearchGoogleApi = function (query, callback) {
    query.keyword = CommonService.preprocessKeywordReview(query.keyword);
    request.get({ url:  "https://www.googleapis.com/customsearch/v1?key=" 
    + config['ApiKey'] 
    + "&cx=" + config['SearchEngineId'] 
    + "&q=" + query.keyword}, function(error, response, body) {
        console.log("https://www.googleapis.com/customsearch/v1?key=" 
            + config['ApiKey'] 
            + "&cx=" + config['SearchEngineId'] 
            + "&q=" + query.keyword);
        if (!error && response.statusCode == 200) { 
            callback(body);
            return;
        }
        console.log(error)
        callback(null);
    }); 
}