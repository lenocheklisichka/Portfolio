import React from "react";
import styles from "./Main.module.scss";
import ava from "../assets/image/photo-ava.jpg"

function Main() {
    return (
        <div id="home" className={styles.container}>
            <a name="home"/>
            <div className={styles.main}>
                <div className={styles.photo}>
                    <img src={ava} alt={''}/>
                </div>
                <div className={styles.text}>
                    <span>Welcome</span>
                    <h1>I'm Elena Kritskaya</h1>
                    <span>Frontend-Developer</span>
                    <p>Considering options for remote work</p>
                    <a href={'/'}>
                        <button className={styles.button}>Hire me</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Main;
