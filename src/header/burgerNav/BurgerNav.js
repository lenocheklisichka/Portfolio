import React from 'react';
import style from './BurgerNav.module.scss'
import {Link} from "react-scroll";
import styles from "../nav/Nav.module.scss";

export const BurgerNav = () => {
    return (
        <div className={style.burgerNav}>
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
    )
}