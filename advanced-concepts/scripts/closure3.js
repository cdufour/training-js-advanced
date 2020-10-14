var counter = function() {
        var cnt = 0,
            logo = document.querySelector("#logo"),
            title = document.querySelector("#title");

    var print = function() {
        console.log(cnt);
    };

    var incr = function(e) {
        console.log(e);
        cnt++; // closure
        print();
    };

    logo.addEventListener("click", incr);
    title.addEventListener("click", incr);
};

counter();