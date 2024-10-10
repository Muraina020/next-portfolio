"use client";

import React, { useState } from 'react';
import styles from "./contact.module.css";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch('/api/contact', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         message,
  //       }),
  //       headers: {
  //         'Content-Type': "application/json",
  //       },
  //     });

  //     if (res.ok) {
  //       console.log('Form submitted successfully');
  //     } else {
  //       const errorData = await res.json();
  //       console.error('Error submitting form:', errorData);
  //     }
  //   } catch (err) {
  //     console.error('Error submitting form:', err);
  //   }
  // };

  async function sendEmail() {
     try{ await fetch('/api/contact', {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, message}) 
      })
      setName('');
      setEmail('');
      setMessage('');
     }catch(e){
      console.error(e);
     }
  }

  return (
    <form className={styles.form}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.formInput}
        type="text"
        placeholder="NAME"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`${styles.formInput} ${styles.mt5}`}
        type="email"
        placeholder="EMAIL"
        required
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={`${styles.formInput} ${styles.mt5}`}
        placeholder="MESSAGE"
        rows="4"
        cols="50"
        required
      />
      <button type="submit" className={styles.submitButton} onClick={sendEmail}>
        SEND ME A MESSAGE
      </button>
    </form>
  );
}

export default ContactForm;
