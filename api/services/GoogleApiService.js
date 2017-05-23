'use strict';

var request = require('request');
var Promise = require('promise');
var config = require('../Config');
var CommonService = require('./CommonService');

exports.getSearchGoogleApi = function (keyword, callback) {
    keyword = CommonService.preprocessKeyword(keyword);
    request.get({ url:  "GET https://www.googleapis.com/customsearch/v1?key=" 
    + config['ApiKey'] 
    + "&cx=" + config['SearchEngineId'] 
    + "&q=" + keyword}, function(error, response, body) { 
        if (!error && response.statusCode == 200) { 
            callback(body); 
        }
        callback(null);
    }); 
}