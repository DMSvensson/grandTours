import React, { useRef } from "react";
import styles from "./winnerTable.module.css";
import { useWheelActive } from "../../contexts/WheelActiveContext";

function WinnerTable({winners, type, flagDirectionLeft, hide}) {
    const table = useRef(null);
    const {setWheelActive} = useWheelActive();
    const handleMouseEnter = (event) => {
        let target = event.target;

        if(event.target.parentNode.parentNode.parentNode.parentNode === table.current) {
            target = event.target.parentNode.parentNode.parentNode.parentNode;
        }
        
        var hasVerticalScrollbar  = target.scrollHeight  > target.clientHeight;
        if(!hasVerticalScrollbar) return;
        setWheelActive(false);
    };
    
    const handleMouseLeave = () => {
        setWheelActive(true);
    };    
    return (
        <div ref={table} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${styles.winners} ${hide ? '': 'hide'} ${styles.animationFromTop} ${type === 'mountain' ? styles.mountain : styles.sprint } ${flagDirectionLeft ? styles.left : styles.right}`}>
            <table>
                <tbody>
                    {winners.map((winner, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{winner.name}</td>
                                <td>{winner.points}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default WinnerTable;