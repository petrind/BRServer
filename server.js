var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  BukaSearch = require('./api/models/bukaSearchModel'),
  BukaBuy = require('./api/models/bukaBuyModel'),
  BukaReviewY = require('./api/models/bukaReviewYModel'),
  BukaReviewG = require('./api/models/bukaReviewGModel'),
  BukaItem = require('./api/models/bukaItemModel'),
  Env = require('./api/Env.json'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect(Env.production.mongo); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/BukaReviewAppRoutes');
routes(app);

app.listen(port);


console.log('BukaReview RESTful API server started on: ' + port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});