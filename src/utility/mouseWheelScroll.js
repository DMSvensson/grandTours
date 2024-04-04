import { getIntervalId, stopAutoScroll } from "./autoScroll";

const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

function mouseWheelScroll(event, boxWidth, setBoxWidth, sensitivity = 5) {
    const delta = event.deltaY;
    const newWidth = Math.min(viewportWidth + 100, boxWidth + (delta / sensitivity));
    if(newWidth < -50) {
        return;
    }
    setBoxWidth(newWidth);
    if(getIntervalId()) {
        stopAutoScroll()
    }
}

export default mouseWheelScroll;