import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { BsWhatsapp } from 'react-icons/bs'
import styles from "./contact.module.css"


const Social = () => {
  return (
    <div className={styles.contactWrapper}>
    <a href="https://www.linkedin.com/in/muraina020/" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
      <CiLinkedin className={styles.contactIcon}/>
    </a>
    <a href="https://www.instagram.com/muraina020" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
      < FaInstagram  className={styles.contactIcon}/>
    </a>
    <a href="https://wa.me/+2347061048347" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
      <BsWhatsapp  className={styles.contactIcon}/>
    </a>
    </div>
  )
}

export default Social