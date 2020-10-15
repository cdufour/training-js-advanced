var _ = {};

_.range = function(max) {
    var arr = [];
    // imperative style
    for (var i = 0; i < max; i++)
        arr.push(i);
    return arr;
};

_.map = function(arr, cb) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++)
        newArr.push(cb(arr[i]))
    return newArr;
};

function log(n) { console.log(n) ;}
function square(n) { return n*n; }
function cube(n) { return square(n) * n; }

const numbers = [5, 2, 7];

log(_.range(5)); // [0, 1, 2, 3, 4]
log(_.map(numbers, square)) // [25, 4, 49]
log(_.map(numbers, cube)) // [125, 8, 343]
log(_.map(_.map(numbers, square), square)) // [625, 16, 2401]
log(_.map(_.range(5), square)) // [0, 1, 4, 9, 16]

// same result with .map method from Array prototype
log(numbers.map(square).map(square))
