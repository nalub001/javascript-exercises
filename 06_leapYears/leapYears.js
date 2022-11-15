const leapYears = function(arg1) {
    if((arg1%4===0 && arg1%100 !== 0) || arg1%400 ===0)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = leapYears;
