import React from "react";
import styles from "./Main.module.scss";
import Particles from "react-tsparticles";
import Fade from "react-reveal/Fade";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

const particlesOptions = {
    "interactivity": {
        "events": {
            "onHover": {
                "enable": true,
                "mode": "bubble"
            }
        }
    },
    "particles": {
        "color": {
            "value": "#000"
        },
        "links": {
            "color": {
                "value": "#000"
            },
            enable: true,
            opacity: 0.5
        },
        "move": {
            "enable": true
        },
        opacity: {
            value: 0.5
        },
        "size": {
            value: 5
        },
        'number': {
            'value': 150,
            'density': {
                'enable': true,
                'value_area': 800
            }
        }
    }
}

function Main() {
    return (
        <div id="home" className={styles.container}>
            <a name="home"/>
            <div className={styles.main}>
                <Particles className={styles.particles} params={particlesOptions}/>
                <Fade top>
                    <div className={styles.blockMain}>
                        <Tilt className="Tilt" options={{ max : 25 }}>
                            <div className={styles.photo}>
                                <div className={styles.image}>
                                </div>
                            </div>
                        </Tilt>
                        <div className={styles.text}>
                            <span>Welcome</span>
                            <h1>I'm Elena Kritskaya</h1>
                            {/*<h2>Frontend Developer.</h2>*/}
                            <ReactTypingEffect className={styles.textH2}
                                text="Frontend Developer."
                            />
                            <p>looking into remote work options</p>
                            <a href={'/'}>
                                <button className={styles.button}>Hire me</button>
                            </a>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Main;
