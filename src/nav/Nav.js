import React from "react";
import styles from './Nav.module.scss';
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <div className={styles.nav}>
            <a href="#home">Home</a>
            <a href='#skills'>Skills</a>
            <a href='#works'>Works</a>
            <a href='#contacts'>Contacts</a>
        </div>
    );
}

export default Nav;