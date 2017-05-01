
const googleTrends = require('google-trends-api');
var scrapeData = require("./trendsFunction.js");

/*
 * Election: 2016 US Presidential Election
 * Survey from: Oct 7, 2016 - Nov 7, 2016
 * Poll Day: Nov 8, 2016
 * Key Words: Hilary Clinton, Donald Trump 
 * Geo: US
 * Language Code: en-US
 * Winner: Trump 
 */

var Oct7_2016_start = new Date(year=2016, month=9, day=7, hours=0, minutes=0, seconds=0, milliseconds=0);
var Nov7_2016_end = new Date(year=2016, month=10, day=7, hours=23, minutes=59, seconds=0, milliseconds=0);

var donald_trump_interest = 
	{keyword: "trump", 
	startTime: Oct7_2016_start,
	endTime: Nov7_2016_end,
	geo: 'US',
	hl: 'en-US'};

var hillary_clinton_interest = 
	{keyword: "hate Clinton", 
	startTime: Oct7_2016_start,
	endTime: Nov7_2016_end,
	geo: 'US',
	hl: 'en-US'};


// value of related queries in trump: 450
googleTrends.relatedQueries(donald_trump_interest)
	.then(scrapeData.getRelatedQueriesInterest)
	.catch(function(err) {
	  console.log(err);
	});

// value of related queries in clinton: 135
googleTrends.relatedQueries(hillary_clinton_interest)
	.then(scrapeData.getRelatedQueriesInterest)
	.catch(function(err) {
	  console.log(err);
	});

//googleTrends.interestOverTime(hillary_clinton_interest, scrapeData.getAverageInterest);









