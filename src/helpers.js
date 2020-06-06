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