import React from "react";
import styles from "./Works.module.scss";
import stylesContainer from "../common/styles/Container.module.scss";
import Work from "./work/Work";
import Title from "../common/components/title/Title";
import socImage from "../assets/image/social-network.jpg";
import todoImage from "../assets/image/todolist.gif";
import counterImage from "../assets/image/counter.png"

function Works() {
    const social = {
        backgroundImage: `url(${socImage})`
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`
    };
    const counter = {
        backgroundImage: `url(${counterImage})`
    };
    return (
        <div className={styles.worksBlock}>
            <a name='works'/>
            <div className={`${stylesContainer.containers} ${styles.worksContainer}`}>
                <Title text={'Projects'}/>
                <div className={styles.works}>
                    <Work style={social} title={"Social Network"} description={"Lorem ipsum dolor sit amet, consecrated advising elite,"}/>
                    <Work style={todolist} title={"Todolist"} description={"Lorem ipsum dolor sit amet, consecrated advising elite,"}/>
                    <Work style={counter} title={"Counter"} description={"Lorem ipsum dolor sit amet, consecrated advising elite,"}/>
                </div>
            </div>
        </div>
    );
}

export default Works;
