const sumAll = function(integer1,integer2) {

    let sum
    
        for (i = integer1; i <= integer2; i++) {
            if (i ==integer1) {
                sum = i;
            }
            else {
                sum = sum + i;
            }
        }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
