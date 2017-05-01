



const googleTrends = require('google-trends-api');
var scrapeData = require("./trendsFunction.js");

/*
 * Election: French Presidenial Election
 * First Round: April 22 - 23, 2017
 * Survey from: March 21, 2017 - April 21, 2017
 * Key Words: Emmanuel Macron, Marine Le Pen, Francois Fillon, Jean-Luc Melenchon
 * Geo: FR
 * Language Code: fr-FR
 * Result: Macron gets the most votes, then Le Pen
 * Ne pas voter pour <name>
 */

var March21_start = new Date(year=2017, month=2, day=21, hours=0, minutes=0, seconds=0, milliseconds=0);
var April21_end = new Date(year=2017, month=3, day=21, hours=23, minutes=59, seconds=0, milliseconds=0);

var macron_interest = 
	{keyword: 'Emmanuel Macron', 
	startTime: March21_start,
	endTime: April21_end,
	geo: 'FR',
	hl: 'fr-FR'};

var le_pen_interest = 
	{keyword: 'Marine Le Pen', 
	startTime: March21_start,
	endTime: April21_end,
	geo: 'FR',
	hl: 'fr-FR'};

var fillon_interest = 
	{keyword: 'Francois Fillon', 
	startTime: March21_start,
	endTime: April21_end,
	geo: 'FR',
	hl: 'fr-FR'};

var melenchon_interest = 
	{keyword: 'Jean-Luc Melenchon', 
	startTime: March21_start,
	endTime: April21_end,
	geo: 'FR',
	hl: 'fr-FR'};


// Emmanuel Macron's Interest data: 40.03030303030303
googleTrends.interestOverTime(macron_interest, scrapeData.getAverageInterest);


// Marine Le Pen's Interest data: 53.60606060606061
googleTrends.interestOverTime(le_pen_interest, scrapeData.getAverageInterest);


// Francois Fillon's Interest data: 24.03030303030303
googleTrends.interestOverTime(fillon_interest, scrapeData.getAverageInterest);


// Jean-Luc Melenchon's Interest data: 40.03030303030303
googleTrends.interestOverTime(melenchon_interest, scrapeData.getAverageInterest);





// marine le len's Related query value: 940
googleTrends.relatedQueries(le_pen_interest)
	.then(scrapeData.getRelatedQueriesInterest)
	.catch(function(err) {
	  console.log(err);
	});

// Emmanuel Macron's Related query value: 1020
googleTrends.relatedQueries(macron_interest)
	.then(scrapeData.getRelatedQueriesInterest)
	.catch(function(err) {
	  console.log(err);
	});






