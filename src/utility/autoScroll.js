const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
let intervalId = null;
let _boxRef;
let _setIsPlaying;
let _setBoxWidth;

function setupAutoScroll(boxRef, setIsPlaying, setBoxWidth) {
    _boxRef = boxRef;
    _setIsPlaying = setIsPlaying;
    _setBoxWidth = setBoxWidth;
}

function getIntervalId() {
    return intervalId;
}

function startAutoScroll() {
    _setIsPlaying(true);
    intervalId = setInterval(() => {
        if(_boxRef.current == null) {
            stopAutoScroll();
            return;
        }
        const currentWidth = _boxRef.current.offsetWidth;
        const newWidth = Math.min(viewportWidth, currentWidth + 5);
        _setBoxWidth(newWidth);
    }, 30);
}

function stopAutoScroll() {
    clearInterval(intervalId);
    intervalId = null;
    _setIsPlaying(false);
}

export {
    getIntervalId,
    startAutoScroll,
    stopAutoScroll,
    setupAutoScroll
}