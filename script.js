//your JS code here. If required.
secondHighest(arr)=>{
	let highest=arr[0];
	let second=arr[0];
	for(let x:arr){
		if(x>highest){
			second=highest;
			highest=x;
		}
		else if(x>second){
		second=x;
		}
	}

return second;
}
