import React from "react";
import styles from './Nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";

function Nav() {
    return (
        <div className={styles.nav}>
            <a href='#home'>Home</a>
            <a href='#skills'>Skills</a>
            {/*<a href='#works'>Works</a>*/}
            <Link
                activeClass={styles.active}
                to="works"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Works</Link>
            <a href='#contacts'>Contacts</a>
        </div>
    );
}

export default Nav;