import React from "react";
import styles from "./IconNetwork.module.css"

function IconNetwork(props) {
    return (
        <div className={styles.icon}>{props.icon}</div>
    );
}

export default IconNetwork;
