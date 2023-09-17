const removeFromArray = function(array,...args) {

    // let position = array.indexOf(args);
    // console.log(position)
    
    // let newArray = array.splice(position,1)         // Attempting to remove the target element(s)
    // console.log(newArray)
    // // console.log(args)

    if (args.length > 1) {
        
        for(let i = 0; i < args.length; i++){
            if (array.includes(args[i])) {
                let position = array.indexOf(args[i]);
                console.log(position)
        
                let newArray = array.splice(position,1)         // Attempting to remove the target element(s)
                console.log(newArray)
                // console.log(args)
            }
            else if (array.includes(args[i] == false)) {
                continue;
            }
        }
    }
    else if (args.length == 1) {
        let position = array.indexOf(args[0]);
        console.log(position)
    
        let newArray = array.splice(position,1)         // Attempting to remove the target element(s)
        console.log(newArray)
        // console.log(args)
    }
    else {

    }
    return array

};

// Do not edit below this line
module.exports = removeFromArray;
