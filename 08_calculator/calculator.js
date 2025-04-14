const add = function(num1, num2) {
  return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(nums) {
  if(nums.length === 0){return 0}
	return nums.reduce((sum , el) => sum += el)
};
;
const multiply = function(nums) {
  return nums.reduce((prod, el) => prod *= el)
};

const power = function(base, exponent) {
	return base**exponent;
};

const factorial = function(num) {
	let res = 1;
  while(num > 1){
    res *= num--;
  }
  return res;
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
