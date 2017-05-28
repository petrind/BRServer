'use strict';


var mongoose = require('mongoose'),
    BukaItem = mongoose.model('BukaItems');
var Promise = require('promise');
var bukalapakApiService = require('../../services/BukalapakApiService');
var CommonService = require('../../services/CommonService');

/**
 * DEPRECATED, whole needed item info can be gotten in product search
 */
exports.getBukaItem = function(req, res) {
    if (!CommonService.tokenValidation(req, res)) {
            return;
    }
    return getBukaItemFromBukalapak();

    function getBukaItemFromBukalapak() {
        return bukalapakApiService.getItemBukalapak(req.query.itemId, req.query, callbackBukaItemGet);        
    }

    function callbackBukaItemGet(data) {
        res.json(JSON.parse(data));
        res.send();
    }
};
/**
 * Get and savedata of item review viewed by user
 */
exports.getBukaItemReviewFromBukalapak = function(req, res) {
    if (!CommonService.tokenValidation(req, res)) {
            return;
    }
    return getBukaItemReviewBukalapak();

    function getBukaItemReviewBukalapak() {
        return bukalapakApiService.getItemReviewsBukalapak(req.query.itemId, req.query, callbackBukaItemGet);        
    }

    function callbackBukaItemGet(data) {
        res.json(JSON.parse(data));
        res.send();
        
        var saveData = {
            bukaSearch : req.query.bukaSearch || req.query.bukasearch ,
            aditionalInfo: "blreview" //means open on review from bukalapak
        }
        var new_BukaItem = new BukaItem (saveData);
        new_BukaItem.save(function(err, bukaSearch) {
            if (err){
                console.log(err);
                return;
            }
        });
    }
}