function log(result) { console.log(result); }

var parse = function(str) {
    var newStr = str.replace('[', '').replace(']', '');
    return newStr.split(',');
}

var jsonParse = function() {
    var that = this; // this binding capture
    return new Promise(function(resolve, reject) {
        resolve(parse(that.data))
    })
};

var getData = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({
                data: "[Athos,Porthos,Aramis]",
                json: jsonParse
            })
        }, 500)
    })
};

getData()
    .then(res => res.json())
    .then(musketeers => {
        musketeers.forEach(mus => log(mus))
    })