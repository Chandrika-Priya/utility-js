function max(arr)
{
	if(arr.length==0)
	{
		return null;
	}
	else
	{
		let maxi=arr[0];
		for(let i=1;i<arr.length;i++)
		{
			if(maxi < arr[i])
			{
				maxi=arr[i];
			}
		}
		return maxi;
	}
}
module.exports=max;