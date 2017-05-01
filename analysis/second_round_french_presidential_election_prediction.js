



const googleTrends = require('google-trends-api');
var scrapeData = require("./trendsFunction.js");

/*
 * Election: French Presidenial Election
 * Second Round: May 7 - 8, 2017
 * Survey from: last 48 hours from now
 * Key Words: Emmanuel Macron, Marine Le Pen
 * Geo: FR
 * Language Code: fr-FR
 * Predicted Result: Marine Le Pen wins??
 * Date prediction was made: May 1, 2017 
 */


var macron_interest = 
	{keyword: 'Emmanuel Macron', 
	startTime: new Date(Date.now() - (48 * 60 * 60 * 1000)), 
	geo: 'FR',
	hl: 'fr-FR'};

var le_pen_interest = 
	{keyword: 'Marine Le Pen', 
	startTime: new Date(Date.now() - (48 * 60 * 60 * 1000)), 
	geo: 'FR',
	hl: 'fr-FR'};



// Emmanuel Macron's Interest data:  17.379888268156424
googleTrends.interestOverTime(macron_interest, scrapeData.getAverageInterest);


// Marine Le Pen's Interest data: 23.30167597765363
googleTrends.interestOverTime(le_pen_interest, scrapeData.getAverageInterest);




// marine le len's Related query value: 810
googleTrends.relatedQueries(le_pen_interest)
	.then(scrapeData.getRelatedQueriesInterest)
	.catch(function(err) {
	  console.log(err);
	});

// Emmanuel Macron's Related query value: 495
googleTrends.relatedQueries(macron_interest)
	.then(scrapeData.getRelatedQueriesInterest)
	.catch(function(err) {
	  console.log(err);
	});






