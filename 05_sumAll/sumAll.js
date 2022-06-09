const sumAll = function (start, end) {
  let sum = 0;

  if (
    !Number.isInteger(start) ||
    start < 0 ||
    !Number.isInteger(end) ||
    end < 0
  )
    return "ERROR";

  if (end < start) {
    for (let index = end; index <= start; index++) {
      sum += index;
    }
  } else {
    for (let index = start; index <= end; index++) {
      sum += index;
    }
  }

  return sum;
};

console.log(sumAll(5, 1));
// Do not edit below this line
module.exports = sumAll;
