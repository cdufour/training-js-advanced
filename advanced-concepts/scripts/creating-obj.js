var obj1 = {
    firstName: "Alain",
    lastName: "Deloin"
};

console.log(obj1.firstName); // => Alain

obj1.greeting = function() {
    console.log("Hello");
    console.log(arguments);
    console.log(this);
};

function test() {
    console.log(this); // window
    console.log(this === window); // true
}

test(); // this ==

/*
delete obj1.lastName;
obj1.lastName; // undefined
"lastName" in obj1; // false
obj1.hasOwnProperty("firstName"); // true
obj1.hasOwnProperty("toString"); // false, "toString" is inherited from its prototype
"toString" in obj1; // true, in operator looks in the prototype
*/