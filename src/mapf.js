function map(arr,func)
{
	if(arr.length==0)
	{
		return [];
	}
	ans=[];
	if(func == 'cube')
	{
		for(let i=0;i<arr.length;i++)
		{
			ans.push(arr[i]*arr[i]*arr[i])
		}
		return ans;
	}
	else if(func== 'identity')
	{
		return arr;
	}
	else
	{
		return arr.map(func);
	}
}
module.exports=map;