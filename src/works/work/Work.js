import React from "react";
import styles from "./../work/Work.module.css";

function Work(props) {
    return (
        <div className={styles.work}>
            <div className={styles.img}>
                <a href={''} className={styles.projectView}>VIEW</a>
            </div>
            <h3 className={styles.title}>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default Work;