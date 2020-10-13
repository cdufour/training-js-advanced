// var greeting = function() {
//     console.log("Bonjour");
// };

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

var greeting = function(term) {
    console.log(term + ' ' + this.firstName);
};

greeting.call(user1, "Buongiorno");
greeting.call(user2, "Buona sera");

var greeting2 = function(term, punct) {
    console.log(term + ' ' + this.firstName + punct);
};

// call: arguments are comma-separated
greeting2.call(user1, "Buongiorno", '!');
greeting2.call(user2, "Buona sera", '?');

// apply: arguments are stored in an array
greeting2.apply(user1, ["Buongiorno", "!!!"]);
greeting2.apply(user2, ["Buona sera", ";"]);

console.log(user1.fullName.call(user2));
