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
                    <Skill title={'CSS'} description={"Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor et door magna alia. "}/>
                    <Skill title={'JS'} description={"Ut enum ad minim venial, quits nostrum excitation Alamo labors nisei ut aliquot ex ea commode consequent."}/>
                    <Skill title={'REACT'} description={"Dais ate inure dolor in reprehended in voltage veldt ease cilium door eu fugit null parity."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
