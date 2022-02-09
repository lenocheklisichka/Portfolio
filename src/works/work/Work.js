import React from "react";
import styles from "./Work.module.scss";

function Work(props) {
    return (
        <div className={styles.work}>
            <div className={styles.img} style={props.style}>
                <a href={'/'} className={styles.projectViewBtn}>VIEW</a>
            </div>
            <div className={styles.workInfo}>
                <h3 className={styles.titleWork}>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Work;