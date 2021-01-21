import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import styles from './Contacts.module.css';
import facebookicon from '../Contacts/facebook.svg';
import telegramicon from '../Contacts/telegram.svg';
import githubicon from '../Contacts/github.svg';
import mailicon from '../Contacts/mail.svg';

const Contacts = () => {
	return (
        <CardContent>
            <div className={styles.contacts}>
	            <h1 className={styles.contacts_myname}>Oxana Aysan</h1>
	            <div className={styles.contacts_mail}>
	                <a className={styles.contacts_link} href="mailto:oxyrud@hotmail.com" target="_blank" rel="noopener noreferrer">
	                <img className={styles.contacts_icon} src={mailicon} alt=""/>
	                </a>
	            </div>
	            <div className={styles.contacts_facebook}>
	                <a className={styles.contacts_link} href="https://www.facebook.com/oxana.aysan" target="_blank" rel="noopener noreferrer">
	                <img className={styles.contacts_icon} src={facebookicon} alt=""/>
	                </a>
	            </div>
	            <div className={styles.contacts_telegram}>
	                <a className={styles.contacts_link} href="tg://resolve?domain=oxyrud">
	                <img className={styles.contacts_icon} src={telegramicon} alt=""/>
	                </a>
	            </div>
	            <div className={styles.contacts_github}>
	                <a className={styles.contacts_link} href="https://github.com/oxyrud" target="_blank" rel="noopener noreferrer" >
	                <img className={styles.contacts_icon} src={githubicon} alt=""/>
	                </a>
	            </div>
	        </div>
        </CardContent>
    );
 };   

export default Contacts;
