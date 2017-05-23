 


var mongoose = require('mongoose'),
  BukaBuy = mongoose.model('BukaBuys');

exports.postSaveBukaBuy = function(req, res) {
    return saveBukaBuy();

    function saveBukaBuy() {
        var new_BukaBuy = new BukaBuy(req.body);
        new_BukaBuy.save(function(err, bukaReviewG) {
            if (err){
                console.log(err);
                return;
            }
        });
    }
};