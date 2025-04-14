const fibonacci = function(num) {
    if(Number.isNaN(num)){return Number(num)}
    if(num < 0){return "OOPS"}
    if(num == 0){return 0}
    if(num <= 2){return 1}
    let prim = 1;
    let sec = 1;
    let x;
    while(num > 2){
        x = prim + sec;
        sec = prim;
        prim = x;
        num--;
    }
    return prim;
};

// Do not edit below this line
module.exports = fibonacci;
