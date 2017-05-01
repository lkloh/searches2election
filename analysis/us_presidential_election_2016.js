
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
	{keyword: "hate Trump", 
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


// Trump's Interest data: 44.57575757575758, 
// no trump: 42.54545454545455
// hate trump: 47.09090909090909
// googleTrends.interestOverTime(donald_trump_interest, scrapeData.getAverageInterest);


// Clinton's Interest data: 38.36363636363637, 
// no clinton: 48.15151515151515
// hate clinton: 43.93939393939394
googleTrends.interestOverTime(hillary_clinton_interest, scrapeData.getAverageInterest);









