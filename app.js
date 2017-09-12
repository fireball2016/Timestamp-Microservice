// required imports for NodeJs
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// create an express instance
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

// get call to return JSON
app.get('/dateValues/:dateVal', function(req, res, next){
  // get the request data for date
  var dateVal = req.params.dateVal;
  // to format in natural date
  var dateFormattingOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  if(isNaN(dateVal)){
    var naturalDate = new Date(dateVal);
    naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
    var unixDate = new Date(dateVal).getTime()/1000;
  }

  else{
    var unixDate = dateVal;
    var naturalDate = new Date(dateVal *1000);
    naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
  }

  res.json({unix: unixDate, natural: naturalDate});

});


// FOR REAL SERVER TESTING, CHANGE 'LOCAL HOST 3000' 
app.listen(3000, function(){
  console.log('its working');
});
