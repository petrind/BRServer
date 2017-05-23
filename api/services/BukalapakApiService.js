'use strict';

var request = require('request');
var Promise = require('promise');
var cache = require('memory-cache');
var config = require('../Config');
var CommonService = require('./CommonService');

exports.getSearchBukalapak = function (keyword, callback) {
    keyword = CommonService.preprocessKeyword(keyword);
    request.get(CommonService.processHeaderRequestBukalapak("https://api.bukalapak.com/v2/products.json?keywords=" + keyword), function(error, response, body) { 
        if (!error && response.statusCode == 200) { 
            callback(body); 
        }
        return null;
    });
}

exports.getPromoSearchBukalapak = function (callback) {
    keyword = CommonService.preprocessKeyword(keyword);
    request.get(CommonService.processHeaderRequestBukalapak("https://api.bukalapak.com/v2/products/promo_banners.json"), function(error, response, body) { 
        if (!error && response.statusCode == 200) { 
            callback(body); 
        }
        return null;
    });
}

exports.getItemBukalapak = function (itemId, callback) {
    request.get(CommonService.processHeaderRequestBukalapak("https://api.bukalapak.com/v2/products/" + itemId + ".json"), function(error, response, body) {
        if(!error && response.statusCode == 200) {
            return body
        }
        return null;
    });
}

exports.getItemReviewsBukalapak = function (itemId, callback) {
    request.get(CommonService.processHeaderRequestBukalapak("https://api.bukalapak.com/v2/products/" + itemId + "/reviews.json"), function(error, response, body) {
        if(!error && response.statusCode == 200) {
            return body
        }
        return null;
    });    
}

