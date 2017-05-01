/**
 * generate new Id / It used in insert
 */
export function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (f) {
    return setTimeout(f, 1000 / 60);
};

window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || function (requestID) {
    clearTimeout(requestID);
};

function callbackAnimate(timestamp) {
    // if browser doesn't support requestAnimationFrame, generate our own timestamp
    // using Date:
    timestamp = timestamp || new Date().getTime();
    if (!this.startTime) 
        this.startTime = timestamp;
    var runtime = timestamp - this.startTime;
    //var progress = runtime / this.duration
    if (runtime < this.duration) {
        if (!this.fn.call(this.self, Math.floor(runtime))) 
            window.requestAnimationFrame(callbackAnimate.bind(this));

        }
    }
export function animate(callback, duration) {

    window.requestAnimationFrame(callbackAnimate.bind({fn: callback, startAt: null, duration, self: this}));
}