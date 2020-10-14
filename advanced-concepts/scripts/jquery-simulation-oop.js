// reproduces jQuery behavior in OOP style
class MyDomObject {
    _ref; // propery

    constructor(elem) {
        this._ref = elem; // initialise the property
    }

    getRef() {
        return this._ref;
    }

    // methods
    attr(name, value) {
        var argc = arguments.length;
        if (argc === 1) return this._ref.getAttribute(name);
        if (argc === 2) {
            this._ref.setAttribute(name, value);
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
