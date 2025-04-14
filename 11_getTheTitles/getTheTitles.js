const getTheTitles = function(books) {
    const res = new Array();
    books.forEach((book) => {
        res.push(book.title)
    })
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
