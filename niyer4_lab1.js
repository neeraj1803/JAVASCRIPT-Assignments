// Program to find sum of numbers entered by user


n=prompt('How many numbers do you want to sum?')
var add=0;
for(var i=1;i<=n;++i)
{
add=add+i;
}
result=alert('sum of first '+n+ ' numbers is '+add)
console.log(result)