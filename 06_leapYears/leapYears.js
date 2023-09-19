const leapYears = function(year) {
    if (year % 100 == 0 && year % 400 !== 0) {
        yearStatus = 'Not a Leap Year'
    }
    else if (year % 4 == 0 || year % 400 == 0) {
        yearStatus = 'Leap Year'
    }
    else {
        yearStatus = 'Not a Leap Year'
    }

    if (yearStatus == 'Leap Year') {
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
