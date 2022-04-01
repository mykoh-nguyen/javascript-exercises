const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return (a > b ? a- b : b -a)
};

const sum = function(arr) {
  let total = 0;
  for(i =0 ; i< arr.length; i++){
    total+= arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let total = 1;

  for(i = 0 ;i<arr.length ;i++){
    total*= arr[i];
  }
  return total;

};

const power = function(a,b) {
  return Math.pow(a,b);
};

const factorial = function(a) {
	let total = 1;

  while(a != 0){
    total = total * a;
    a--;
  }
  return total;
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
