
const googleTrends = require('google-trends-api');
var scrapeData = require("./trendsFunction.js");

/*
 * Election: 2016 UK vot to withdraw from the European Union
 * Survey from: May 22, 2015 - June 22, 2016
 * Poll day: June 23, 2016
 * Key Words: Brexit, Bremain
 * Geo: GB
 * Language Code: en-GB
 * Winner: Brexit
 */

var May22_2016_start = new Date(year=2016, month=4, day=22, hours=0, minutes=0, seconds=0, milliseconds=0);
var June22_2016_end = new Date(year=2016, month=4, day=22, hours=23, minutes=59, seconds=0, milliseconds=0);

var brexit_interest = 
	{keyword: 'brexit', 
	startTime: May22_2016_start,
	endTime: June22_2016_end,
	geo: 'GB',
	hl: 'en-GB'};

var bremain_interest = 
	{keyword: 'bremain', 
	startTime: May22_2016_start,
	endTime: June22_2016_end,
	geo: 'GB',
	hl: 'en-GB'};


// Brexit Interest data: 57.294444444444444
// googleTrends.interestOverTime(brexit_interest, scrapeData.getAverageInterest);


// Bremain Interest data: 4.277777777777778
googleTrends.interestOverTime(bremain_interest, scrapeData.getAverageInterest);









