if ("rxjs" in window) console.log("rxjs loaded")

function log(result) { console.log(result); }

function updateDom(value) {
    var div = document.createElement("div");
    //div.innerText = "Div created dynamically";
    //div.innerText = value.clientX;
    div.innerText = value;
    //if (value.clientX > 100) div.style.color = "red";
    document.body.appendChild(div);
}

let Rx = window.rxjs;
const { Observable, interval, from, fromEvent } = Rx;
const { map } = Rx.operators;

// Create an observable source which emits "Ciao"
let source = Observable.create(observer => {
    observer.next("Ciao");
    observer.next("tutti");

    for (let i = 0 ; i < 5; i++)
        observer.next(i)

    observer.complete(); // source empty, no mor next()

});

//source.subscribe(log);

let sourceAsync = Observable.create(observer => {
    for (let i = 0 ; i < 5; i++)
        setTimeout(() => observer.next(i), 1000 * i)
});

//sourceAsync.subscribe(log);

//interval(2000).subscribe(updateDom)

let musketeers = ["Athos","Porthos","Aramis"];
let srcMusketeers = from(musketeers);
//srcMusketeers.subscribe(log);

let srcDomEvent = fromEvent(document, "click");
//srcDomEvent.subscribe(updateDom);

(function() {
    const multiplyByTen = n => n*10;
    const addFive = n => n+5;
    const winningMessage = n => "I won " + n + " EUR";
    const square = n => n*n;
    
    interval(1000)
        .pipe(
            map(square),
            //map(addFive),
            map(winningMessage)
        )
        .subscribe(updateDom);
    
})()
