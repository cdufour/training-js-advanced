// Dependances passed to the IIFE

var myModule = (function(Rm) {
    // private space
    var _text = "Private text " + Rm.rand();

    var _update = function(innerText) {
        var target = document.getElementById("target");
        target.innerText = innerText || _text;
    };

    // API public
    return {
        updateDOM: function(innerText) {
            _update(innerText)
        },
        test: function() { console.log("test") }
    }
})(randomModule); // IIFE