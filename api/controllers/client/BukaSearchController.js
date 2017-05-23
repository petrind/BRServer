'use strict';


var mongoose = require('mongoose'),
    BukaSearch = mongoose.model('BukaSearchs');
var bukalapakApiService = require('../../services/BukalapakApiService');
var Promise = require('promise');

exports.getSearch = function(req, res) {
    return getSearchFromBukalapak();

    function getSearchFromBukalapak() {
        return bukalapakApiService.getSearchBukalapak(req.query.keyword, callbackSearch);
    }

    function callbackSearch(data) {
        res.json(JSON.parse(data));
        res.send();
        //TODO build data for BukaSearch
        //save data
        var new_BukaSearch = new BukaSearch(req.body);
        new_BukaSearch.save(function(err, bukaSearch) {
            if (err){
                console.log(err);
                return;
            }
        });
    }
};

exports.getPopularSearch = function(req, res) {
    return getPopularSearchFromDb();

    function getPopularSearchFromDb() {
        return bukalapakApiService.getSearchBukalapak(req.query.keyword, callbackPopularSearch);
    }

    function callbackPopularSearch(data) {
        res.json(JSON.parse(data));
        res.send();
        //TODO build data for BukaSearch
        //save data
        var new_BukaSearch = new BukaSearch(req.body);
        new_BukaSearch.save(function(err, bukaSearch) {
            if (err){
                console.log(err);
                return;
            }
        });
    }
}

exports.getPromoSearch = function(req, res) {
    return getPromoSearchFromBukalapak();

    function getPromoSearchFromBukalapak() {
        return bukalapakApiService.getPromoSearchBukalapak(callbackPromoSearch);
    }

    function callbackPromoSearch(data) {
        res.json(JSON.parse(data));
        res.send();
        //TODO build data for BukaSearch
        //save data
        var new_BukaSearch = new BukaSearch(req.body);
        new_BukaSearch.save(function(err, bukaSearch) {
            if (err){
                console.log(err);
                return;
            }
        });
    }
}