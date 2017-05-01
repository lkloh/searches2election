

/*
 * Election: 2016 US Presidential Election
 * Survey from: Oct 7, 2016 - Nov 7, 2016
 * Poll Day: Nov 8, 2016
 * Key Words: Hilary Clinton, Donald Trump 
 * Geo: US
 * Language Code: en-US
 * Winner: Trump 
 */
optionsObject = 
	{'keyword':'trump', 
	'startTime' : new Date(year=2016)};

var Oct7_2016_start = new Date(year=2017, month=9, day=7, hours=0, minutes=0, seconds=0, milliseconds=0);
var Nov7_2016_end = new Date(year=2017, month=10, day=7, hours=23, minutes=50, seconds=0, milliseconds=0);
var donal_trump_interest = 
	{keyword: 'Donald Trump', 
	startTime: Oct7_2016_start,
	endTime: Nov7_2016_end};

googleTrends.interestOverTime(donal_trump_interest, );

