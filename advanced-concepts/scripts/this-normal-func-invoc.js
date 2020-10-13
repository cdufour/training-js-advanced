// In thoses examples, all functions
// are executed in the global space (global object => window)

var name = "global";

var fn1 = function() {
    var name = "fn1";
    console.log("From fn1 ---");
    console.log(this);
    console.log(this.name);
    fn2();
    return function fn3() {
        var name = "fn3";
        console.log("From fn3 ---");
        console.log(this);
        console.log(this.name);
    }
};

var fn2 = function() {
    var name = "fn2";
    console.log("From fn2 ---");
    console.log(this);
    console.log(this.name);
};

var runIt = function(fn) {
    var name = "runIt";
    console.log("From runIt ---");
    console.log(this);
    console.log(this.name);
    fn();
};

//fn1();
//runIt(fn2);
//fn1()(); // executes fn3 (returned by fn1)

// Call runIt with anonymous fn as param
runIt(function() {
    var name = "Anonymous";
    console.log("From Anonymous ---");
    console.log(this);
    console.log(this.name);
});


