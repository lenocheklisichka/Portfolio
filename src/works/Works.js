import React from "react";
import styles from "./Works.module.css";
import stylesContainer from "./../common/styles/Container.module.css";
import Work from "./work/Work";

function Works() {
    return (
        <div className={styles.worksBlock}>
            <div className={`${stylesContainer.container} ${styles.worksContainer}`}>
                <h2 className={styles.title}>My works</h2>
                <div className={styles.works}>
                    <Work title={"Project name"} description={"Short description"}/>
                    <Work title={"Project name"} description={"Short description"}/>
                </div>
            </div>
        </div>
    );
}

export default Works;
