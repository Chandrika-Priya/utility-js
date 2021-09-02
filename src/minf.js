function min(arr)
{
	if(arr.length==0)
	{
		return null;
	}
	let mini=arr[0];
	for(let i=1;i<arr.length;i++)
	{
		if(mini>arr[i])
		{
			mini=arr[i];
		}
	}
	return mini;
}
module.exports=min;