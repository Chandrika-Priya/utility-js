function tail(arr)
{
	if(arr.length ==0){
		return [];
	}
	return arr.slice(1,arr.length);
}

module.exports=tail;