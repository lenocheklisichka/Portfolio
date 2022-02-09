import React from "react";
import styles from "./../remoteWork/RemoteWork.module.css";

function RemoteWork() {
    return (
    <div className={styles.workBlock}>
        <div className={styles.workContainer}>
            <h2 className={styles.title}>Considering options for remote work</h2>
            <a href={'/'}><button className={styles.button}>Hire me</button></a>
        </div>
    </div>
    );
}

export default RemoteWork;