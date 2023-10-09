import { useWheelActive } from "../contexts/WheelActiveContext";

function useToggleScrollBehaviorByMouse() {
    const {setWheelActive} = useWheelActive();

    function handleMouseEnter(event) {
        var hasVerticalScrollbar = event.currentTarget.scrollHeight > event.currentTarget.clientHeight;
        if (!hasVerticalScrollbar) return;
        setWheelActive(false);
    }

    function handleMouseLeave() {
        setWheelActive(true);
    }

    return {handleMouseEnter, handleMouseLeave};
}

export default useToggleScrollBehaviorByMouse;