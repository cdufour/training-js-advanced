// Callback Pattern

function request(url, cb) {
    if (url === "found") {
        cb(200, null);
    } else if (url === "notFound") {
        cb(404, null);
    } else {
        cb(null, 500);
    }
}

function successFn(message) {
    console.log(message);
}

function notFoundFn(message) {
    console.log(message);
}

request("found", function(status, err) {
    if (err) throw new Error(err);
    console.log(status)
});

request("found", successFn);
request("notFound", notFoundFn);