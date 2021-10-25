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
                    <img src='https://img.freepik.com/free-vector/girls-cartoon-wavy-hair_8462-2849.jpg?size=338&ext=jpg' alt={''}/>
                </div>
            </div>
        </div>
    );
}

export default Main;
