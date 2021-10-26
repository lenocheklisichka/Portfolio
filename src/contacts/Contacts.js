import React from "react";
import styles from "./Contacts.module.css";

function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={styles.contactsContainer}>
                <h2>Contacts</h2>
                <div className={styles.contactForm}>
                    <form className={styles.form}>
                        <input type={''} placeholder={''} className={styles.inputForm}/>
                        <input type={''} placeholder={''} className={styles.inputForm}/>
                        <textarea cols={"5"} rows={"8"}/>
                    </form>
                </div>
                <button className={styles.buttonForm}>Send</button>
            </div>
        </div>
    );
}

export default Contacts;
