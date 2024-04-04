import React, { useState } from "react";
import { getIntervalId, setupAutoScroll, startAutoScroll, stopAutoScroll } from "../../utility/autoScroll";
import useScrollBehavior from "../../hooks/useScrollBehavior";
import { useWheelActive } from "../../contexts/WheelActiveContext";

function ProgressBox({ showOverview, year }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const { boxWidth, setBoxWidth, boxRef } = useWheelActive();

    setupAutoScroll(boxRef, setIsPlaying, setBoxWidth);
    useScrollBehavior(boxWidth, setBoxWidth, year);

    const toggleAutoScroll = () => {
        if (!getIntervalId()) {
            startAutoScroll();
        } else {
            stopAutoScroll();
        }
    }

    return (
        <>
            <div ref={boxRef} id="box" className='box' style={{ width: `${boxWidth}px` }}></div>
            <div className='outerPlayButton' data-overview={showOverview} onClick={() => toggleAutoScroll()}>
                <button className={`playButton ${isPlaying ? 'pause' : 'play'}`}></button>
            </div>
        </>
    );
}

export default ProgressBox;