const sumAll = function(start, end) {
    if(start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR";
    }    
    if(start < end) {start--;}
    else{end--;}
    const x = (end*(end+1))/2;
    const y = (start*(start+1))/2;
    return Math.abs(x-y);
};

// Do not edit below this line
module.exports = sumAll;
