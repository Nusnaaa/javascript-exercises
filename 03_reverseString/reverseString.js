const reverseString = function(string) {

    len = string.length;
    reverseOrder = '';

    for (i = len - 1; i >= 0; i--) {
        reverseOrder = reverseOrder.concat(string[i].toString());
    }
    return reverseOrder

};

// Do not edit below this line
module.exports = reverseString;
