const palindromes = function (text) {
    let splittedText = text.split('') 
    let normalText = removeNonText(splittedText).join("")
    let reversedText = removeNonText(splittedText).reverse().join("")

    console.log(normalText);
    console.log(reversedText);

    return normalText == reversedText

};

const removeNonText = function (arr) {
    let sanitizedText = []
    arr.forEach(char => {
        if (isLetter(char)) {
            sanitizedText.push(char.toLowerCase())
        }
    });

    return sanitizedText
}

function isLetter(letter) {
    return letter.toUpperCase() != letter.toLowerCase()
}



// Do not edit below this line
module.exports = palindromes;
