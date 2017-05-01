

const googleTrends = require('google-trends-api');

var scrapeData = require("./trendsFunction.js");

var valentineObjLastTwoDays = 
	{keyword: 'Valentines Day', 
	startTime: new Date(Date.now() - (48 * 60 * 60 * 1000))};

var feb13start = new Date(year=2017, month=1, day=13, hours=0, minutes=0, seconds=0, milliseconds=0);
var feb15start = new Date(year=2017, month=1, day=15, hours=0, minutes=0, seconds=0, milliseconds=0);
var valentineDayObj = 
	{keyword: 'Valentines Day', 
	startTime: feb13start,
	endTime: feb15start};


console.log("\nInterest from past two days (April / May 2017)");
//googleTrends.interestOverTime(valentineObjLastTwoDays, scrapeData.getAverageInterest);


console.log("\nInterest from just before Valentines Day 2017: ");
//googleTrends.interestOverTime(valentineDayObj, scrapeData.getAverageInterest);


// Average Interest around Valentine's Day: 48.672222222222224
// Average Interest around May 2017: 14.089385474860336

googleTrends.relatedQueries(valentineDayObj)
	.then(function(results) {
	  	var jsonObj = JSON.parse(results);
	  	var relatedQueryList = jsonObj['default']['rankedList'][0]['rankedKeyword'];
		for (var i = 0; i < relatedQueryList.length; i++) {
			console.log(relatedQueryList[i]);
		}
	})
	.catch(function(err) {
	  console.log(err);
	});








