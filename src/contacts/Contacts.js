import React from "react";
import styles from "./Contacts.module.css";

function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={styles.contactsContainer}>
                <h2 className={styles.title}>Contacts</h2>
                    <form className={styles.form}>
                        <input type='text' className={styles.inputForm}/>
                        <input type='text' className={styles.inputForm}/>
                        <textarea cols={"5"} rows={"8"}/>
                    </form>
                <button className={styles.buttonForm}>Send</button>
            </div>
        </div>
    );
}

export default Contacts;
