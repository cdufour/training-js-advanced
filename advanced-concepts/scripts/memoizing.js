// Memoizing technic
// cache data to optimize research
// internal cache for function
// avoids global scope pollution

function isPrime(value) {
    if (!isPrime.answers) isPrime.answers = {};

    if (isPrime.answers[value] != null) {
        return isPrime.answers[value];
    }

    var prime = value != 1; // 1 can never be prime

    for (var i = 2; i < value; i++) {
        if (value % i == 0) {
            prime = false;
            break;
        }
    }

    return isPrime.answers[value] = prime;
}

var test = isPrime(3);

if (isPrime(5)) console.log("5 is prime");

if (isPrime.answers[5]) 
    console.log("The answer was cached!");