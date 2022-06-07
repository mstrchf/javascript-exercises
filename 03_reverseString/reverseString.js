const reverseString = function (string) {
  if (string == "") return "";

  let split = string.split("");
  let reversedString = "";

  for (let index = split.length - 1; index >= 0; index--) {
    reversedString += split[index];
  }

  return reversedString;
};

console.log(reverseString('hello'));

// Do not edit below this line
module.exports = reverseString;
