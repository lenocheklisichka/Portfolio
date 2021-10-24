import React from "react";
import styles from "./Main.module.css"

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.blockMain}>
                <div className={styles.text}>
                    <span>Hi There</span>
                    <h1>J am Elena Kritskaya</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={styles.photo}>
                    <img src="https://images.vexels.com/media/users/3/158067/isolated/preview/c7d1cdffff99983cf006d81639b25ca0-long-wavy-hair-woman-avatar.png" alt={''}/>
                </div>
            </div>
        </div>
    );
}

export default Main;
