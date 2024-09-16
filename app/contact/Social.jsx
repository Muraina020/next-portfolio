import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import styles from "./contact.module.css"


const Social = () => {
  return (
    <div className={styles.contactWrapper}>
    <a href="murainaboluwatife@gmail.com" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
      < MdOutlineEmail className={styles.contactIcon}/>
    </a>
    <a href="https://www.instagram.com/muraina020" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
      <RiMessengerLine className={styles.contactIcon}/>
    </a>
    <a href="https://wa.me/+2347061048347" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
      <BsWhatsapp  className={styles.contactIcon}/>
    </a>
    </div>
  )
}

export default Social