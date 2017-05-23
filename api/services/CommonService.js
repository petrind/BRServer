'use strict';

var request = require('request');
var Promise = require('promise');
var config = require('../Config');

exports.preprocessKeyword = function (keyword) {
    if(typeof(keyword) === "string") {
        keyword = keyword.replace(" ", "+");
        if (keyword.toLowerCase().indexOf("review") != -1){
            keyword = "review+of+" + keyword;
        }
    }
    return keyword;
}

exports.processHeaderRequestBukalapak = function (urlAddress) {
    // request.post({ url: "https://api.bukalapak.com/v2/authenticate.json",
    //     headers: {
    //         'Authorization': config['BukalapakAuthorization']
    //     },
    // }, function(error, response, body) {
    //     if(!error && response.statusCode == 200) {
    //         return body;
    //     } else {
    //         return error;
    //     }
    // });
    return {
        url: urlAddress,
        headers: {
            'Authorization': config['BukalapakToken']
        }
    }
}