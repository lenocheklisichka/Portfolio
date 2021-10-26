import React from "react";
import styles from "./../work/Work.module.css";

function Work(props) {
    return (
        <div className={styles.work}>
            <div className={styles.img}>
                <a href={''}><button className={styles.projectView}>VIEW</button></a>
            </div>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default Work;