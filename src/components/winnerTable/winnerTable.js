import React from "react";
import styles from "./winnerTable.module.css";

function WinnerTable({winners, type, flagDirectionLeft, hide}) {
    return (
        <div className={`${styles.winners} ${hide ? '': 'hide'} ${styles.animationFromTop} ${type === 'mountain' ? styles.mountain : styles.sprint } ${flagDirectionLeft ? styles.left : styles.right}`}>
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