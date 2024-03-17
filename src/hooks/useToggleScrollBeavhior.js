import { useState } from "react";
import { useWheelActive } from "../contexts/WheelActiveContext";
import { getIntervalId, startAutoScroll, stopAutoScroll } from "../utility/autoScroll";

function useToggleScrollBehaviorByMouse() {
    const {setWheelActive} = useWheelActive();
    const [autoScrollOn, setAutoScrollOn] = useState(false);

    function handleMouseEnter(event) {
        var hasVerticalScrollbar = event.currentTarget.scrollHeight > event.currentTarget.clientHeight;
        if (!hasVerticalScrollbar) return;
        setWheelActive(false);
        if(getIntervalId()) {
            stopAutoScroll();
            setAutoScrollOn(true);
        } else {
            setAutoScrollOn(false);
        }
    }

    function handleMouseLeave() {
        setWheelActive(true);
        if(autoScrollOn) {
            startAutoScroll();
        }
    }

    return {handleMouseEnter, handleMouseLeave};
}

export default useToggleScrollBehaviorByMouse;