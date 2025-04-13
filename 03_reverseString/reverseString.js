const reverseString = function(str) {
    const chars = str.split("");
    let res = "";
    for(let i = chars.length-1; i >=0; i--){
        res += chars[i];
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
