'use strict';


var mongoose = require('mongoose'),
    BukaItem = mongoose.model('BukaItems');
var Promise = require('promise');
var bukalapakApiService = require('../../services/BukalapakApiService');
var CommonService = require('./CommonService');

exports.getBukaItem = function(req, res) {
    return getBukaItemFromBukalapak();

    function getBukaItemFromBukalapak() {
        return bukalapakApiService.getItemBukalapak(req.query.itemId, req.query, callbackBukaItemGet);        
    }

    function callbackBukaItemGet(data) {
        res.json(JSON.parse(data));
        res.send();
        //TODO build data for BukaSearch
        //save data
        var new_BukaItem = new BukaItem(req.body);
        new_BukaItem.save(function(err, bukaItem) {
            if (err){
                console.log(err);
                return;
            }
        });
    }
};

exports.getBukaItemReviewFromBukalapak = function(req, res) {
    return getBukaItemReviewBukalapak();

    function getBukaItemReviewBukalapak() {
        return bukalapakApiService.getItemReviewsBukalapak(req.query.itemId, req.query, callbackBukaItemGet);        
    }

    function callbackBukaItemGet(data) {
        res.json(JSON.parse(data));
        res.send();
        //TODO build data for BukaSearch
        //save data
        var new_BukaItem = new BukaItem (req.body);
        new_BukaItem.save(function(err, bukaSearch) {
            if (err){
                console.log(err);
                return;
            }
        });
    }
}