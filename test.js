

const googleTrends = require('google-trends-api');

/*
 * Election: 2016 UK vot to withdraw from the European Union
 * Survey from: Dec 23, 2015 - June 23, 2016
 * Poll day: June 23, 2016
 * Key Words: Brexit, Bremain
 * Geo: GB
 * Language Code: en-GB
 * Winner: Brexit
 */




/*
 * Election: 2016 US Presidential Election
 * Survey from: Nov 7, 2016 - May 7, 2016
 * Poll Day: Nov 8, 2016
 * Key Words: Hilary Clinton, Donald Trump 
 * Geo: US
 * Language Code: en-US
 * Winner: Trump 
 */
optionsObject = 
	{'keyword':'trump', 
	'startTime' : new Date(year=2016)};


googleTrends.apiMethod(optionsObject, [callback]);

/*
 * Election: French Presidenial Election
 * First Round: April 22 - 23, 2017
 * Survey from: Nov 21, 2016 - April 21, 2016
 * Key Words: Emmanuel Macron, Marine Le Pen, Francois Fillon, Jean-Luc Melenchon
 * Geo:
 * Language Code: fr-FR
 * Result: Macron gets the most votes, then Le Pen
 */

/*
 * To validate my hypothesis:
 * French election next round from 6-7 May 2017
 * Survey from April 24, 2017 - current date
 * Key Words: Emmanuel Macron, Marine Le Pen
 * Projected result: use to see if this hypothesis deserves merit 
 */



