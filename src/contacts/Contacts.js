import React from "react";
import styles from "./Contacts.module.scss";
import Title from "../common/components/title/Title";


function Contacts() {
    return (
        <div id='contacts' className={styles.contactsBlock}>
            <div className={styles.contactsContainer}>
                <Title text={"Contacts"}/>
                <form className={styles.form}>
                    <input  type='text' placeholder='Name ...'/>
                    <input type='email' placeholder='Email ...'/>
                    <textarea placeholder='Messages ...' cols={"5"} rows={"8"}/>
                  <button type='submit' className={styles.buttonForm}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
