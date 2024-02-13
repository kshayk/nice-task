const goodFunction = (numberArray) => {
    return numberArray.reduce((prev, curr) => {
        return prev+curr;
    }, 0);
}

const badFunction = (numberArray) => {
    let sum = 0;
    for (let i = 0; i < numberArray.length; i++) {
        sum += numberArray[i];
    }

    return sum;
}

module.exports.goodFunction = goodFunction;
module.exports.badFunction = badFunction;