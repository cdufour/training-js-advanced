// Immediately Invoked Function Expression

// Func declaration
function squareDecl(n) {
    console.log(n*n);
}

// Func expression
var squareExp = function(n) {
    console.log(n*n);
};

// squareExpIife is init with the return of the
// IIFE
var squareExpIife = function(n) {
    console.log(n*n);
    //return n*n;
}(2);

// anonymous IIFE
(function(n) {
    console.log(n*n);
})(3)