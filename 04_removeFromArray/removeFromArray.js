const removeFromArray = function (myArr, ...removeFromMyArr) {
  removeFromMyArr.forEach((element) => {
    if (myArr.includes(element)) {
      myArr.splice(myArr.indexOf(element), 1);
    }
  });
  return myArr;
};

console.log(removeFromArray([1, 2, 3, 4, 5], 3));

// Do not edit below this line
module.exports = removeFromArray;
