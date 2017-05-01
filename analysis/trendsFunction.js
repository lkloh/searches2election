


module.exports.getAverageInterest = function(err, results) {
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
	};

  module.exports.getRelatedQueriesInterest = function(results) {
    var jsonObj = JSON.parse(results);
    var relatedQueryList = jsonObj['default']['rankedList'][0]['rankedKeyword'];
    var totalValue = 0;
    for (var i = 0; i < relatedQueryList.length; i++) {
        var query = relatedQueryList[i];
        var value = query['value'];
        totalValue += value;
    }
    console.log("Total value: " + totalValue);
  }


















	




