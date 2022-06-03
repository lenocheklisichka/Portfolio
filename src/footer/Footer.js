import React from "react";
import styles from "./Footer.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faOdnoklassniki, faInstagram, faTelegram, faVk, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={styles.footerContainer}>
                <div className={styles.iconBlock}>
                    <ul>
                        <div className={styles.socialIcons}>
                            <li><FontAwesomeIcon
                                icon={faOdnoklassniki}
                                style={{color: '#ff9100'}}
                                className={styles.icon}/>
                            </li>
                            <li><a href={'https://t.me/Lisichka_rizhaya'} target={'_blank'}><FontAwesomeIcon
                                icon={faTelegram}
                                style={{color: '#29b6f6'}}
                                className={styles.icon}/>
                            </a></li>
                            <li><FontAwesomeIcon
                                icon={faInstagram}
                                style={{color: '#8d6e63'}}
                                className={styles.icon}/>
                            </li>
                            <li><a href={'https://vk.com/id152905799'} target={'_blank'}><FontAwesomeIcon
                                icon={faVk}
                                style={{color: '#1e88e5'}}
                                className={styles.icon}/>
                            </a></li>
                            <li><a href={''} target={'_blank'}><FontAwesomeIcon
                                icon={faWhatsapp}
                                style={{color: '#00c853'}}
                                className={styles.icon}/>
                            </a></li>
                        </div>
                    </ul>
                </div>
                <div className={styles.footer}>Copyright © 2021. <a href={''} className={styles.name}>Elena.</a> All
                    Rights Reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;