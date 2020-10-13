var user1 = {
    firstName: "Roberto",
    lastName: "Baggio",
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

var user2 = {
    firstName: "Sofia",
    lastName: "Loren",
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

var greeting = function(term, punct) {
    console.log(term + ' ' + this.firstName + punct);
};

// .bind methods return a function with bound parameters
// and bound context (objet)
// the term parameter is locked (bound)
var morningGreet = greeting.bind(user1, "Good morning");
var eveningGreet = greeting.bind(user1, "Good evening");

morningGreet('?');
eveningGreet("...");

// No rebinding for bound context
morningGreet.call(user2, ';') // Good morning Roberto;