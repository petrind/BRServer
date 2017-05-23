'use strict';

var request = require('request');
var Promise = require('promise');
var config = require('../Config');
var CommonService = require('./CommonService');

exports.getSearchYoutubeApi = function (keyword,callback) {
    keyword = CommonService.preprocessKeyword(keyword);
    request.get({ url:  "https://www.googleapis.com/youtube/v3/search?key="
    + config['ApiKey']
    + "&q=" + keyword}, function(error, response, body) { 
        if (!error && response.statusCode == 200) { 
            callback(body); 
        } 
        callback(null);
    }); 
}