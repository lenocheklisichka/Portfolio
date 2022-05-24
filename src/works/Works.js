import React from "react";
import styles from "./Works.module.scss";
import stylesContainer from "../common/styles/Container.module.scss";
import Work from "./work/Work";
import Title from "../common/components/title/Title";
import socImage from "../assets/image/social-network.jpg";
import todoImage from "../assets/image/todolist.gif";
import counterImage from "../assets/image/counter.png";
import Fade from "react-reveal/Fade";

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
        <div id='works' className={styles.worksBlock}>
            <div className={`${stylesContainer.containers} ${styles.worksContainer}`}>
                <Title text={'Projects'}/>
                <div className={styles.works}>
                    <Fade top>
                    <Work style={social} title={"Social Network"}
                          description={"Project Social network with the ability to add posts, subscribe, login. Stack used: TypeScript, React, Redux, Redux Thunk, Axios."}
                          link={'https://lenocheklisichka.github.io/soc-network/'}/>
                    <Work style={todolist} title={"Todolist"}
                          link={'https://lenocheklisichka.github.io/it-incubator-todolist-ts/'}
                          description={"Project Todolists with the ability to add todolists, tasks. Stack used: TypeScript, React, Redux, Redux Thunk, Axios."}/>
                    <Work style={counter} title={"Counter"}
                          description={"Project Counter with settings,allows you to enter the maximum and minimum value of the counter . Stack used: TypeScript, React."}
                          link={'https://lenocheklisichka.github.io/counter-2/'}/>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Works;
