const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  total=0;
	for(let i=0;i<arr.length; i++){
    total+=arr[i];
  }
  return total;
};

const multiply = function(arr) {
  product=1;
	for(let i=0;i<arr.length; i++){
    product*=arr[i];
  }
  return product;
};

const power = function(a,b) {
	if (b===0) return a*1;
  else if (b===1) return a;
  else {
    pow=a;
    for(let i=2; i<=b; i++){
      pow=pow*a;
    }
    return pow;
  }
};

const factorial = function(a) {
  if(a===0 || a===1) return 1;
  else{
    fact=1;
    for(let i=a; i>=1; i--){
      fact=fact*i;
    }
    return fact;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
