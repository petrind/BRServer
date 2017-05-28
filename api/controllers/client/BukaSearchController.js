'use strict';

var mongoose = require('mongoose'),
    BukaSearch = mongoose.model('BukaSearchs');
var Promise = require('promise');
var bukalapakApiService = require('../../services/BukalapakApiService');
var CommonService = require('../../services/CommonService');

/**
 * Get search query from user at first screen
 */
exports.getSearch = function(req, res) {
    if (!CommonService.tokenValidation(req, res)) {
            return;
    }
    return getSearchFromBukalapak();

    function getSearchFromBukalapak() {
        return bukalapakApiService.getSearchBukalapak(req.query, callbackSearch);
    }

    function callbackSearch(data) {
        res.json(JSON.parse(data));
        res.send();

        var saveData = {searchQuery: req.query, additionalInfo: "search"};
        var new_BukaSearch = new BukaSearch(saveData);
        new_BukaSearch.save(function(err, bukaSearch) {
            if (err){
                console.log(err);
                return;
            }
        });
    }
};

/**
 * Get and save Popular search based on db of bukareview
 */
exports.getPopularSearch = function(req, res) {
    if (!CommonService.tokenValidation(req, res)) {
            return;
    }
    return getPopularSearchFromDb();

    function getPopularSearchFromDb() {
        return bukalapakApiService.getSearchBukalapak(req.query, callbackPopularSearch);
    }

    function callbackPopularSearch(data) {
        res.json(JSON.parse(data));
        res.send();
        
        var saveData = {searchQuery: req.query, additionalInfo: "popular"}
        var new_BukaSearch = new BukaSearch(saveData);
        new_BukaSearch.save(function(err, bukaSearch) {
            if (err){
                console.log(err);
                return;
            }
        });
    }
}

/**
 * get and save promo based on BL
 */
exports.getPromoSearch = function(req, res) {
    if (!CommonService.tokenValidation(req, res)) {
            return;
    }
    return getPromoSearchFromBukalapak();

    function getPromoSearchFromBukalapak() {
        return bukalapakApiService.getPromoSearchBukalapak(req.query, callbackPromoSearch);
    }

    function callbackPromoSearch(data) {
        res.json(JSON.parse(data));
        res.send();

        var new_BukaSearch = new BukaSearch({searchQuery: req.query, additionalInfo: "promo"});
        new_BukaSearch.save(function(err, bukaSearch) {
            if (err){
                console.log(err);
                return;
            }
        });
    }
}