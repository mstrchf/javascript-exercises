const add = function(n1, n2) {
	return n1 + n2
};

const subtract = function(n1, n2) {
	return n1 - n2
};

const sum = function(nums) {
  let total = 0
	nums.forEach(num => {
    total += num;
  });

  return total
};

const multiply = function(nums) {
  let total = 1;
  nums.forEach(num => {
    total *= num
  });

  return total
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
  
  let factor = 1
	for (let i = 1; i <= num; i++) {
    factor *= i
  }

  return factor
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
