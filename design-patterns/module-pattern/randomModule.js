var randomModule = (function() {
    var _min = 0;
    var _max = 10;
    var _type = "int";

    var _randInt = function() {
        return Math.floor(Math.random() * (_max - _min) + _min);;
    };

    var _randFloat = function() {
        return parseFloat((Math.random() * (_max - _min) + _min).toFixed(2));
    };

    var _rand = function(type) {
        var type = type || _type;
        if (type === "int") return _randInt();
        if (type === "float") return _randFloat();
    }

    var _setConfig = function(min,max) {
        _min = min;
        _max = max;
    }

    return {
        rand: _rand,
        config: _setConfig
    }

})();