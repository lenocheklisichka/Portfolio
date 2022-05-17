import React, {useState} from 'react';
import {Link} from "react-scroll";
import styles from "../burgerNav/BurgerNav.module.scss";
import Fade from "react-reveal/Fade"

export const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    let onBurgerMenuClick = () => {
        setMenuIsOpen(!menuIsOpen)
        console.log(!menuIsOpen)
    }
    return (
        <div className={styles.burgerNav}>
            <Fade right>
                <div className={menuIsOpen ? `${styles.burgerNavItems} ${styles.show}` : styles.burgerNavItems}>
                    <Link
                        activeClass={styles.active} to="home"
                        spy={true} smooth={true}
                        offset={-1} duration={500}>Home
                    </Link>
                    <Link
                        activeClass={styles.active} to="skills"
                        spy={true} smooth={true}
                        offset={1} duration={500}>Skills
                    </Link>
                    <Link
                        activeClass={styles.active} to="works"
                        spy={true} smooth={true}
                        offset={1} duration={500}>Works
                    </Link>
                    <Link
                        activeClass={styles.active} to="contacts"
                        spy={true} smooth={true}
                        offset={1} duration={500}>Contacts
                    </Link>
                </div>
            </Fade>
            <div onClick={onBurgerMenuClick} className={styles.btnMenu}>
                <span>
                </span>
                <span>
                </span>
                <span>
                </span>
            </div>
        </div>
    )
}