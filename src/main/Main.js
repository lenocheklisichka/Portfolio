import React from "react";
import styles from "./Main.module.scss";
import Particles from "react-tsparticles";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';
import {loadFull} from "tsparticles";

function Main() {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div id='home' className={styles.container}>
            <div className={styles.main}>
                <Particles className={styles.particles}
                           id="tsparticles"
                           init={particlesInit}
                           loaded={particlesLoaded}
                           options={{
                               fpsLimit: 50,
                               interactivity: {
                                   events: {
                                       onClick: {
                                           enable: true,
                                           mode: "push",
                                       },
                                       onHover: {
                                           enable: true,
                                       },
                                       resize: true,
                                   },
                                   modes: {
                                       push: {
                                           quantity: 4,
                                       },
                                       repulse: {
                                           distance: 200,
                                           duration: 0.4,
                                       },
                                   },
                               },
                               particles: {
                                   color: {
                                       value: "#bdbdbd"
                                   },
                                   links: {
                                       color: "#000",
                                       distance: 120,
                                       enable: true,
                                       opacity: 0.3,
                                       width: 1,
                                   },
                                   collisions: {
                                       enable: true,
                                   },
                                   move: {
                                       direction: "none",
                                       enable: true,
                                       outModes: {
                                           default: "bounce",
                                       },
                                       random: false,
                                       speed: 1,
                                       straight: false,
                                   },
                                   number: {
                                       density: {
                                           enable: true,
                                           area: 800,
                                       },
                                       value: 80,
                                   },
                                   opacity: {
                                       value: 0.5,
                                   },
                                   shape: {
                                       type: "circle",
                                   },
                                   size: {
                                       value: {min: 1, max: 5},
                                   },
                               },
                               detectRetina: true,
                           }}
                />
                <Fade left>
                    <div className={styles.blockMain}>
                        <Tilt className="Tilt" options={{max: 25}}>
                            <div className={styles.photo}>
                                <div className={styles.image}>
                                </div>
                            </div>
                        </Tilt>
                        <div className={styles.text}>
                            <Flip>
                                <p>Welcome</p>
                            </Flip>
                            <h1>I'm Elena Kritskaya</h1>
                            <ReactTypingEffect className={styles.textH2}
                                               text="Frontend Developer."
                            />
                            <p>looking into remote work options</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Main;
