import React from "react";
import styles from "./Main.module.scss";
import ava from "../assets/image/photo-ava.jpg"

function Main() {
    return (
        <div className={styles.container}>
            <a name="home"/>
            <div className={styles.main}>
                <div className={styles.photo}>
                    <img src={ava} alt={''}/>
                </div>
                <div className={styles.text}>
                    <span>Welcome</span>
                    <h1>I'm Elena Kritskaya</h1>
                    <p>Frontend-Developer</p>
                </div>
            </div>
        </div>
    );
}

export default Main;
