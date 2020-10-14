var MY_APP = MY_APP || {};

(function(ns) {

    var prompt = "Salut.",
        prompt2 = "Tout va bien ?",
        prompt3 = "On se connaît non ?",
        counter = 0,
        users = [];

    var isNewUser = function(user) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].toUpperCase() === user.toUpperCase()) {
              return false; // implicit break
            }
        }
        ns.addUser(user);
        return true;
    };

    ns.addUser = function(user) {
        users.push(user);
    };

    ns.greeting = function(user) {
       var greet = prompt + ' ';
       if (isNewUser(user)) {
            greet += prompt2;
       } else {
            greet += prompt3;
       }
       console.log(greet);
       counter++;
    };

    ns.numOfGreetings = function() {
        console.log("Total number of greetings: " + counter);
    }


})(MY_APP)