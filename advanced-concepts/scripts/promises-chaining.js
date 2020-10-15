function log(result) { console.log(result); }

var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(promise2);
        // or: return resolve(promise2);
    }, 1000)
});

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("[+] Promise2 resolved");
    }, 2000)
});

var result = promise1.then();
result.then(log);

promise1.then().then(log);