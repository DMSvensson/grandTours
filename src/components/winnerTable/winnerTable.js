import React, { useRef } from "react";
import styles from "./winnerTable.module.css";
import useToggleScrollBehaviorByMouse from "../../hooks/useToggleScrollBeavhior";

function WinnerTable({winners, type, flagDirectionLeft, hide}) {
    const table = useRef(null);
    const {handleMouseEnter, handleMouseLeave} = useToggleScrollBehaviorByMouse();
    return (
        <div ref={table} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${styles.winners} ${hide ? '': 'hide'} ${styles.animationFromTop} ${type === 'Mountain' ? styles.mountain : styles.sprint } ${flagDirectionLeft ? styles.left : styles.right}`}>
            <table>
                <tbody>
                    {winners.map((winner) => {
                        return (
                            <tr key={winner.name}>
                                <td>{winner.position}</td>
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