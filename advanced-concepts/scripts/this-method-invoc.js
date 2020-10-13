var name = "global";

var obj1 = {
    name: "obj1",
    fn1: function() {
        console.log("From fn1 in obj1 ---");
        console.log(this);
        console.log(this.name);
    }
};

obj1.fn1();

var obj2 = {
    name: "obj2",
    fn2: obj1.fn1
};

obj2.fn2();

// function expression in the global scope
var fn3 = function() {
    console.log("From fn3 ---");
    console.log(this);
    console.log(this.name);
};

this.fn3(); // == fn3() == window.fn3()

var obj3 = {
    name: "obj3",
    fn3: fn3
};

obj3.fn3(); // obj3 is the context

// nested objects
var obj4 = {
    name: "obj4",
    obj5: {
        name: "obj5",
        fn5: function() {
            console.log("From obj5 in fn5 ---");
            console.log(this);
            console.log(this.name);
        }
    }
};

obj4.obj5.fn5();

var fn6 = function() {
    console.log("fn6");
};
//fn6.name = "fn66"; name property not writable
fn6.fn7 = function() {
    var name = "fn7";
    console.log("From fn7 in fn6 ---");
    console.log(this);
    console.log(this.zozo);
};

fn6.fn7();

