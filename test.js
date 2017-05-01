


const googleTrends = require('google-trends-api');

var valentineObjNow = {keyword: 'Valentines Day', startTime: new Date(Date.now() - (4 * 60 * 60 * 1000))}

var feb13start = new Date(year=2017, month=1, day=13, hours=0, minutes=0, seconds=0, milliseconds=0);
var feb15start = new Date(year=2017, month=1, day=15, hours=0, minutes=0, seconds=0, milliseconds=0);
var valentineDayObj = 
	{keyword: 'Valentines Day', 
	startTime: feb13start,
	endTime: feb15start}

// var obj = valentineObjNow;
var obj = valentineDayObj;

var obtainResults = function(err, results) {
  		if (err) {
  			console.log('oh no error!', err);
  		} else {
  			var totalInterest = 0.0;
  			var totalResults = 0;

  			var jsonObj = JSON.parse(results)
  			var entries = jsonObj['default']['timelineData']
  			for (var i = 0; i < entries.length; i++) {
  				var searchQueryInterest = entries[i];
  				var interest = searchQueryInterest['value'][0];
  				totalInterest += interest;
  				totalResults += 1; 
  			}
  			console.log("Average Interest: " + totalInterest / totalResults);
  		}
	}

googleTrends.interestOverTime(obj, 
	function(err, results) {
  		if (err) {
  			console.log('oh no error!', err);
  		} else {
  			var totalInterest = 0.0;
  			var totalResults = 0;

  			var jsonObj = JSON.parse(results)
  			var entries = jsonObj['default']['timelineData']
  			for (var i = 0; i < entries.length; i++) {
  				var searchQueryInterest = entries[i];
  				var interest = searchQueryInterest['value'][0];
  				totalInterest += interest;
  				totalResults += 1; 
  			}
  			console.log("Average Interest: " + totalInterest / totalResults);
  		}
	}
);
















