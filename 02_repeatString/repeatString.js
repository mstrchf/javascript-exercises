const repeatString = function(string, num) {

if(num < 0) return 'ERROR'

let val = ''
for (let index = 0; index < num; index++) {
    val+=string;
}
return val
};

// Do not edit below this line
module.exports = repeatString;
