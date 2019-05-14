function isEven(num)
{
	if(num%2 == 0)
	{
		return true;
	}
	return false;

}

function factorial(num)
{
	if(num == 0)
	{
		return 1;
	}
	
	return num * factorial(num-1);
}

function kebabToSnake(str)
{
	return str.replace('-','_');
}

console.log(isEven(5))
console.log(factorial(3))
console.log(kebabToSnake("hello-there"))