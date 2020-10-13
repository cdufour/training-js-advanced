var fn1 = function(val) {
    console.log(val);
};

var code = "console.log(val);";

// bock instructions provided via parameter
var fn2 = new Function("val", code);

fn1("function expression");
fn2("function constructor");


// Objet copy is done by reference
// the two functions point to the same object
/*
var fn3 = fn1;

fn3.showUser = function() { 
    console.log(this.userName) 
};

fn3.showUser();

dir(fn1) // fn1 contains the showUser method

*/

