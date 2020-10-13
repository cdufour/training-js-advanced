"use strict"; // global object unavailable for this binding

var name = "global";

var fn = function() {
    var name = "fn";
    console.log(name);
    console.log(this.name); // TypeError: Cannot read property 'name' of undefined 
};

fn();