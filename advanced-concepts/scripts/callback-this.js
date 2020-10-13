document.addEventListener("DOMContentLoaded", function() {
    var logo = document.querySelector("#logo");

    logo.addEventListener("click", function() {
        console.log("Clicked");
    })
})

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

// Solution 1
var fullName = function() {
    var that = this; // this capture
    setTimeout(function() {
        console.log(that.firstName + ' ' + that.lastName);
    }, 2000)
};

fullName.call(user1); // Roberto Baggio
fullName.call(user2); // Sofia Loren

// Solution 2
var fullName = function() {
    setTimeout(function() {
        console.log(this.firstName + ' ' + this.lastName);
    }.bind(this), 2000)
};

fullName.call(user1); // Roberto Baggio
fullName.call(user2); // Sofia Loren

