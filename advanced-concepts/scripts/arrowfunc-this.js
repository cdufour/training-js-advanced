var firstName = "Alain", lastName = "Deloin";
var user1 = {firstName: "Roberto", lastName: "Baggio"};
var user2 = {firstName: "Sofia", lastName: "Loren"};

var fullName = function() {
    console.log(this.firstName + ' ' + this.lastName);
};

fullName(); // Alain Deloin
fullName.call(user1); // Roberto Baggio
fullName.call(user2); // Sofia Loren

var fullName = function() {
    // async function with callback
    setTimeout(function() {
        console.log(this.firstName + ' ' + this.lastName);
    }, 2000)
};

// Problem: we lost the "this binding" context
// we the callback returns
fullName.call(user1); // Alain Deloin
fullName.call(user2); // Alain Deloin

// Solution: arrow function
var fullName = function() {
    setTimeout(() => {
        console.log(this.firstName + ' ' + this.lastName);
    }, 2000)
};

fullName.call(user1); // Roberto Baggio
fullName.call(user2); // Sofia Loren

