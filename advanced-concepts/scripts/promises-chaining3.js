var authors = [
    { id: 15, name: "Dumas" },
    { id: 23, name: "Flaubert" }
];

var books = [
    { id: 1, title: "Le comte de Monte-Cristo", authorId: 15 },
    { id: 2, title: "Madame Bovary", authorId: 23 },
    { id: 3, title: "Les trois mousquetaires", authorId: 15 }
];

function log(result) { console.log(result); }

var getBooks = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(books);
        }, 1000)
    }) 
};

var getAuthorById = function(id) {
    return new Promise(function(resolve, reject) {

        // WARNING: do not forget var/let, otherwises author "falls" in the global object
        var author = authors.filter(author => author.id === id)[0];

        if (!author) reject("[-] Author " + id + " not found");

        setTimeout(function() {
            resolve(author)
        }, 500)

    })
}

function getAuthorsAfterBooks() {

    // this function will always return
    // undefined

    getBooks()
        .then(books => {
            var promises = [];
            books.forEach(book => {
                var p = getAuthorById(book.authorId);
                promises.push(p);
            })
            // Promise.all returns a promise which will
            // resolve with all values resolved by
            // iterated promises
            return Promise.all(promises);
        })
        .then(authors => log(authors))
}

//getBooks().then(log);
//getAuthorById(23).then(log);
//getAuthorById(58).then(log).catch(log);

// getBooks()
//     .then(books => getAuthorById(books[0].authorId))
//     .then(author => log(author.name)) // Dumas

// getBooks().then(books => {
//     books.forEach(book => {
//         getAuthorById(book.authorId).then(author => log(author.name))
//     })
// })

// getAuthorsAfterBooks();


var failurePromise = function() {
    return Promise.reject("[-] failurePromise rejected")
};


(async function() {

    var books = await getBooks();
    var author = await getAuthorById(books[0].authorId);

    // try/catch allows to capture the rejected state
    // of a promise using async/await

    try {
        var author = await getAuthorById(58);
    } catch (err) {
        log(err);
    }


    try {
        var result = await failurePromise();
    } catch (err) {
        console.log(err);
    }

})()
