var Greeting = function() {};

var greet1 = new Greeting();
var greet2 = new Greeting();

/*
greet1 === greet2 // false
greet1 instanceof Greeting // true
greet2 instanceof Greeting // true

greet1
    Greeting {}
        __proto__: Object

*/