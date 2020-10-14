// reproduces jQuery behavior
// https://api.jquery.com/attr/#attr-attributeName

function MyDomObject(elem) {
    var _ref = elem;

    this.attr = function(name, value) {
        var argc = arguments.length;
        if (argc === 1) return _ref.getAttribute(name);
        if (argc === 2) {
            _ref.setAttribute(name, value);
            return this; // allows method chaining
        }
    }
}

function $(elem) {
    return new MyDomObject(
        document.querySelector(elem)
    );
}

var logo = $("#logo");
