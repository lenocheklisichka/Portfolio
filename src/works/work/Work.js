import React from "react";
import styles from "./../work/Work.module.css";

function Work(props) {
    return (
        <div className={styles.work}>
            <a href={""} className={styles.img}></a>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default Work;