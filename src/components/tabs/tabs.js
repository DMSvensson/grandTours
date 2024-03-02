import React, { useState } from "react";
import styles from './tabs.module.css';


function Tabs({tabs, handleAction}) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
        handleAction();
    };

    return (
        <div className={styles.tab}>
            <div className={styles.tabsHeader}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={index === activeTab ? `btn-primary` : 'btn-secondary'}
                        onClick={() => handleTabClick(index)}>
                        {tab.label} 
                    </button>
                ))}
            </div>
            <div className={styles.tabContent}>
                {tabs[activeTab].content}
            </div>
        </div>
    )
}

export default Tabs;