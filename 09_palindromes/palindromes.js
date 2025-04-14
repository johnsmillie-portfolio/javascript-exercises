const palindromes = function (word) {
    word = word.replace(/["."|","|"!"|"?"|" "]/g, "").toLowerCase();
    const chars = word.slice("");
    let l = 0;
    let r = chars.length-1;
    while(l <= r){
        if(chars[l++] !== chars[r--]){return false;}
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
