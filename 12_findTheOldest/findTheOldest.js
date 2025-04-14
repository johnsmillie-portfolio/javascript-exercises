const findTheOldest = function(people) {
    let oldest;
    let max = 0;
    const today = new Date().getFullYear();
    people.forEach((el) =>{
        let age = el.hasOwnProperty("yearOfDeath") ? el.yearOfDeath - el.yearOfBirth :
            today - el.yearOfBirth;
        if(age > max){
            max = age;
            oldest = el;
        }
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
