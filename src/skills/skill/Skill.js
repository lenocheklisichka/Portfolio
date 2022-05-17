import React from "react";
import styles from "./Skill.module.scss";
function Skill(props) {
    return (
        <div className={styles.skill}>
            <div className={styles.iconImage} style={props.style}>
            </div>
            <h3 className={styles.header} >{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default Skill;
