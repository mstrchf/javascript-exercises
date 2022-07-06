const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }
  let n1 = 0;
  let n2 = 1;
  let sum = 0;

  for (let i = 2; i <= num; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }

  return num == 0 ? n1 : n2;
};

// Do not edit below this line
module.exports = fibonacci;
