'use strict';
module.exports = function(app) {
    var bukaReviewG = require('../controllers/client/BukaReviewGController')
        , bukaReviewY = require('../controllers/client/BukaReviewYController')
        , bukaSearch = require('../controllers/client/BukaSearchController')
        , bukaItem = require('../controllers/client/BukaItemController')
        , bukaBuy = require('../controllers/client/BukaBuyController');

    // todoList Routes
    app.route('/search')
        .get(bukaSearch.getSearch);

    app.route('/popular')
        .get(bukaSearch.getPopularSearch);

    app.route('/item')
        .get(bukaItem.getBukaItem);
    
    app.route('/review/bukalapak')
        .get(bukaItem.getBukaItemReviewFromBukalapak);
    
    app.route('/review/google')
        .get(bukaReviewG.getReviewG);
    
    app.route('/review/youtube')
        .get(bukaReviewY.getReviewY);

    app.route('/buy')
        .post(bukaBuy.postSaveBukaBuy);
};
