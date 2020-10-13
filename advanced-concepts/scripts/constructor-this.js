function Greeting() {
    console.log(this);
}

Greeting(); // this === window (global object)

new Greeting(); // this === Greeting object

// Capitalized name to indicate that this function
// will serve as constructor for objects
function Users(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    this.fullName = function() {
        return  this.firstName + ' ' + this.lastName;
    }
}

var user1 = new Users("Roberto", "Baggio");
var user2 = new Users("Sofia", "Loren");

/*

user1
Users {firstName: "Roberto", lastName: "Baggio", fullName: ƒ}
    firstName: "Roberto"
    fullName: ƒ ()
    lastName: "Baggio"
    __proto__: Object
        constructor: ƒ Users(fName, lName)

user2 instanceof Users // true

// without constructor (new operator), this is bound to global
Users("Alain", "Deloin"); // new is MISSING !
window.firstName; // Alain
*/