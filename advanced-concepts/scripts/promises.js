var success = false;

var promise1 = new Promise(function(resolve, reject) {
    //resolve(200)
    reject(500)
});

promise1.then(log).catch(log)

function log(info) { console.log(info) }


var promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("[+] Promise2 resolved");
    }, 2000)
});

var promise3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject("[-] Promise3 rejected");
    }, 3000)
});

var promise4 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if (success) {
            resolve("[+] Promise4 resolved");
        } else {
            reject("[-] Promise4 rejected");
        }
    }, 4000)
});



promise2.then(log);
promise3.then(log).catch(log);
promise4.then(log).catch(log);
