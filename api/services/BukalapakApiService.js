'use strict';

var request = require('request');
var Promise = require('promise');
var cache = require('memory-cache');
var config = require('../Config.json');
var CommonService = require('./CommonService');

exports.getSearchBukalapak = function (query, callback) {
    var querystring = Object.keys(query)
        .map(key => key + '=' + encodeURIComponent(query[key]))
        .join('&');
    request.get(CommonService.processHeaderRequestBukalapak("https://api.bukalapak.com/v2/products.json?" + querystring), function(error, response, body) { 
        if (!error && response.statusCode == 200) { 
            callback(body);
            return;
        }
        console.log(error)
        callback(null);
    });
}

/**
 * Pending, will be worked after app v0.1
 */
exports.getPromoSearchBukalapak = function (query, callback) {
    var querystring = Object.keys(query)
        .map(key => key + '=' + encodeURIComponent(query[key]))
        .join('&');
    request.get(CommonService.processHeaderRequestBukalapak("https://api.bukalapak.com/v2/products/promo_banners.json?" + querystring), function(error, response, body) { 
        if (!error && response.statusCode == 200) { 
            callback(body);
            return;
        }
        console.log(error)
        callback(null);
    });
}

/**
 * Deprecated, because whole item info can be gotten using getSearchBukalapak
 */
exports.getItemBukalapak = function (itemId, query, callback) {
    var querystring = Object.keys(query)
        .map(key => key + '=' + encodeURIComponent(query[key]))
        .join('&');
    request.get(CommonService.processHeaderRequestBukalapak("https://api.bukalapak.com/v2/products/" + itemId + ".json?" + querystring), function(error, response, body) {
        if(!error && response.statusCode == 200) {
            callback(body);
            return;
        }
        console.log(error)
        callback(null);
    });
}

exports.getItemReviewsBukalapak = function (itemId, query, callback) {
    var querystring = Object.keys(query)
        .map(key => key + '=' + encodeURIComponent(query[key]))
        .join('&');
    request.get(CommonService.processHeaderRequestBukalapak("https://api.bukalapak.com/v2/products/" + itemId + "/reviews.json?" + querystring), function(error, response, body) {
        if(!error && response.statusCode == 200) {
            callback(body);
            return;
        }
        console.log(error)
        callback(null);
    });    
}

