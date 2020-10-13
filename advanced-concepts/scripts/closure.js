// outer function
var fn = function() {
    var a = 2,
        b = 3;

    // inner function
    // closes over parent scope
    var fn2 = function() {
        console.log(a+b);
    }

    //fn2();
    setTimeout(fn2, 3000);
};

fn();