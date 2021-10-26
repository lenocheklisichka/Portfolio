import React from "react";
import styles from "./Main.module.css";
import stylesContainer from "./../common/styles/Container.module.css";

function Main() {
    return (
        <div className={styles.main}>
            <div className={stylesContainer.container}>
                <div className={styles.text}>
                    <span>Hi There</span>
                    <h1>J am Elena Kritskaya</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={styles.photo}>
                    <img src='' alt={''}/>
                </div>
            </div>
        </div>
    );
}

export default Main;
