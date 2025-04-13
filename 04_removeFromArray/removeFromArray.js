const removeFromArray = function(arr, ...args) {
    const res = new Array();

    const set = new Set(args);

    

    for(let i = 0; i < arr.length; i++){
        if(!set.has(arr[i])){
            res.push(arr[i])
        }
    }
   
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
