var sum = function(x,y) {
    return x+y;
};

var run = function(fn,a,b) {
    console.log(fn(a,b));
};

// call between functions
run(sum, 10, 5); // => 15

// first parameter: anonymous inline function
run(function(x,y) {
    return x*y;
}, 10, 5);
