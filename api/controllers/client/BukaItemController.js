'use strict';


var mongoose = require('mongoose'),
    Bukaitem = mongoose.model('BukaItems');
var bukalapakApiService = require('../../services/BukalapakApiService');
var Promise = require('promise');

exports.getBukaItem = function(req, res) {
    return getBukaItemFromBukalapak();

    function getBukaItemFromBukalapak() {
        return bukalapakApiService.getItemBukalapak(req.query.itemId, callbackBukaItemGet);        
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
};

exports.getBukaItemReviewFromBukalapak = function(req, res) {
    return getBukaItemReviewBukalapak();

    function getBukaItemReviewBukalapak() {
        return bukalapakApiService.getItemReviewsBukalapak(req.query.itemId, callbackBukaItemGet);        
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