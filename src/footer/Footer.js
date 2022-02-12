import React from "react";
import styles from "./Footer.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faOdnoklassniki, faInstagram, faTelegram, faVk, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={styles.footerContainer}>
                <div className={styles.iconBlock}>
                    <div className={styles.socialIcons}>
                        <FontAwesomeIcon icon={faOdnoklassniki}
                                         style={{color: '#ff9100', width: '30px', height: '30px'}}
                                         className={styles.icon}/>
                        <FontAwesomeIcon icon={faTelegram} style={{color: '#29b6f6', width: '30px', height: '30px'}}
                                         className={styles.icon}/>
                        <FontAwesomeIcon icon={faInstagram} style={{color: '#8d6e63', width: '30px', height: '30px'}}
                                         className={styles.icon}/>
                        <FontAwesomeIcon icon={faVk} style={{color: '#1e88e5', width: '30px', height: '30px'}}
                                         className={styles.icon}/>
                        <FontAwesomeIcon icon={faWhatsapp} style={{color: '#00c853', width: '30px', height: '30px'}}
                                         className={styles.icon}/>
                    </div>
                </div>
                <div className={styles.footer}>Copyright © 2021. <a href={''} className={styles.name}>Elena.</a> All
                    Rights Reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;