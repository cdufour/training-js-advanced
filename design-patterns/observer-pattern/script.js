function UpdateBgEvent() {
    this.observers = [];
}

UpdateBgEvent.prototype = {
    subscribe: function(domRef) {
        var elem = document.getElementById(domRef);
        this.observers.push(elem);
    },
    unsubscribe: function(domRef) {
        this.observers = this.observers
            .filter(function(obs) {
                return obs.id !== domRef;
            })
    },
    trigger: function() {
        this.observers.forEach(function(obs) {
            obs.style.backgroundColor = "green";
        })
    },
    publish: function(color) {
        this.observers.forEach(function(obs) {
            obs.style.backgroundColor = color;
        })
    }
};

var uEvent = new UpdateBgEvent();
uEvent.subscribe("target");
uEvent.subscribe("target2");
uEvent.subscribe("target3");

document.getElementById("btnTrigger")
    .addEventListener("click", () => {
        uEvent.trigger();
    });