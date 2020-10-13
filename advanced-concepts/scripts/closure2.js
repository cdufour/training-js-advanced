// Problem
// when callbacks return i equals 5
// 5 is printed 5 times in the console
(function(){
    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i) 
        }, 500)
    }
})();

// Solution: closure by creating an inner scope
for (var i = 1; i < 6; i++) {
    // outer lexical scope
    // closure keeps the parent state

    (function(index) {
        // inner lexical scope
        // index (inner scope) closes over i (outer scope)
        setTimeout(function() {
            console.log(index) 
         }, 1000 * index)
    })(i) // IIFE Immediately Invoked Function Expression
}