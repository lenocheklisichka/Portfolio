import React from "react";
import styles from "./Footer.module.css"
import IconNetwork from "./icon/IconNetwork";

function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={styles.footerContainer}>
                <h3>Elena Kritskaya</h3>
                <div className={styles.iconBlock}>
                    <div className={styles.icons}>
                        <IconNetwork icon={<img src={'icon/icons8-whatsapp.svg'} alt={'icon'}/>}/>
                        <IconNetwork icon={<img src={'icon/icon-odnoklassniki'} alt={'icon'}/>}/>
                        <IconNetwork icon={<img src={'icon/instagram'} alt={'icon'}/>}/>
                        <IconNetwork icon={<img src={'icon/vkontakte'} alt={'icon'}/>}/>
                        <IconNetwork icon={<img src={'icon/facebook'} alt={'icon'}/>}/>
                    </div>
                </div>
                <div className={styles.footer}>2021 All rights reserved</div>
            </div>
        </div>
    );
}

export default Footer;