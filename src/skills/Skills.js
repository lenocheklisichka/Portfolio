import React from "react";
import styles from "./Skills.module.scss";
import stylesContainer from "../common/styles/Container.module.scss";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import cssImage from "./iconSkills/css.png";
import htmlImage from "./iconSkills/html-5.png";
import jsImage from "./iconSkills/js.png";
import reactImage from "./iconSkills/physics.png";
import gitImage from "./iconSkills/github.png";
import Fade from "react-reveal/Fade"

function Skills() {
    const html = {
        backgroundImage: `url(${htmlImage})`
    };
    const css = {
        backgroundImage: `url(${cssImage})`
    };
    const js = {
        backgroundImage: `url(${jsImage})`
    };
    const react = {
        backgroundImage: `url(${reactImage})`,
        backgroundColor: 'white'
    };
    const git = {
        backgroundImage: `url(${gitImage})`,
        backgroundColor: 'white',
        borderRadius: '50px',
    };
    return (
        <div id='skills' className={styles.skillsBlock}>
            <div className={`${stylesContainer.containers} ${styles.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={styles.skills}>
                    <Fade top>
                        <Skill style={html} title={'HTML'}
                               description={"Lorem ipsum dolor sit amet, consecrated advising "}/>
                    </Fade>
                    <Fade bottom>
                        <Skill style={css} title={'CSS'}
                               description={"Lorem ipsum dolor sit amet, consecrated advising "}/>
                    </Fade>
                    <Fade top>
                        <Skill style={js} title={'JS'}
                               description={"Ut enum ad minim venial, quits nostrum excitation"}/>
                    </Fade>
                    <Fade bottom>
                        <Skill style={react} title={'REACT'}
                               description={"Dais ate inure dolor in reprehended in voltage "}/>
                    </Fade>
                    <Fade top>
                        <Skill style={git} title={'GIT'}
                               description={"Dais ate inure dolor in reprehended in voltage "}/>
                    </Fade>
                </div>
            </div>
</div>
)
    ;
}

export default Skills;
