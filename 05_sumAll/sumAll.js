const sumAll = function(integer1,integer2) {

    let sum

    if (integer1 > integer2) {
        largerNumber = integer1;
        smallerNumber = integer2;
    }
    else {
        largerNumber = integer2;
        smallerNumber = integer1
    }

    if (integer1 < 0 | integer2 < 0 | typeof(integer1) != 'number' | typeof(integer2) != 'number') {
        return 'ERROR'
    }
    
    for (currentNumber = smallerNumber; currentNumber <= largerNumber; currentNumber++) {
        if (currentNumber == smallerNumber) {
            sum = currentNumber;
        }
        else {
            sum = sum + currentNumber;
        }
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
