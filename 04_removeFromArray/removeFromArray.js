const removeFromArray = function(myArr, ...removeFromMyArr) {
    return myArr.filter(first => {
        for (const element of removeFromMyArr) {
            return first !== element
        }
    })
};

console.log(removeFromArray([1,2,3,4,5], 1, 2, 3));

// Do not edit below this line
module.exports = removeFromArray;
