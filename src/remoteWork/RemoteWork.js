import React from "react";
import styles from "./../remoteWork/RemoteWork.module.css";

function RemoteWork() {
    return (
        // <div className={styles.work}>
        //     <h3 className={styles.title}>Considering options for remote work</h3>
        //     <button className={styles.button}>Hire me</button>
        // </div>
    <div className={styles.workBlock}>
        <div className={styles.workContainer}>
            <h2 className={styles.title}>Considering options for remote work</h2>
            <button className={styles.button}>Hire me</button>
        </div>
    </div>
    );
}

export default RemoteWork;