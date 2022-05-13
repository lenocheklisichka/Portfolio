import React from "react";
import styles from './Nav.module.scss';
import {Link} from "react-scroll";

function Nav() {
    return (
        <div className={styles.nav}>
            <Link
                activeClass={styles.active} to="home"
                spy={true} smooth={true}
                offset={1} duration={500}>Home
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
    );
}

export default Nav;