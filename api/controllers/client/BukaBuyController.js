 


var mongoose = require('mongoose'),
  BukaBuy = mongoose.model('BukaBuys');
var CommonService = require('../../services/CommonService');

exports.postSaveBukaBuy = function(req, res) {
    if (!CommonService.tokenValidation(req, res)) {
            return;
    }
    return saveBukaBuy();

    function saveBukaBuy() {
        var new_BukaBuy = new BukaBuy(req.body);
        new_BukaBuy.save(function(err, bukaReviewG) {
            if (err) {
                console.log(err);
                return;
            }
        });
    }
};