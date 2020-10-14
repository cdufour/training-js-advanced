var dumaSingleton = (function() {

    var _instance; // private stored instance for future access

    function _createInstance() {
        console.log("Instance created");
        var items = ["Athos", "Porthos", "Aramis"];
        return items;
    }

    return {
        getInstance: function() {
            if (!_instance) _instance = _createInstance();
            return _instance;
        }
    }

})();

var musketeers = dumaSingleton.getInstance();
var mousquetaires = dumaSingleton.getInstance();

console.log(musketeers);
console.log(mousquetaires);
console.log(musketeers === mousquetaires);