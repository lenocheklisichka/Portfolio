import React from "react";
import styles from "./Skills.module.css";
import stylesContainer from "./../common/styles/Container.module.css";
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'CSS'} description={" Lorem ipsum dolor sit amet, consecrated advising elite"}/>
                    <Skill title={'JS'} description={" sed do emus temper incident ut labor et door magna alia."}/>
                    <Skill title={'REACT'} description={"Ut enum ad minim venial,quits nostrum excitation ."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
