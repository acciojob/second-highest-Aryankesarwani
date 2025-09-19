//your JS code here. If required.
secondHighest(arr){
	
	let highest=-Infinity;
	let second=-Infinity;
	for (let x of arr) {
	    if (x > highest) {
	      second = highest;
	      highest = x;
	    } else if (x > second && x < highest) {
	      second = x;
	    }
	  }

return second;
}
