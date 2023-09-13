const removeFromArray = function(array,args) {

    let position = array.indexOf(args);
    array.splice(position,position);
    return array

};

// Do not edit below this line
module.exports = removeFromArray;
