import React from 'react'
import styles from './contact.module.css'
import SectionHeader from '../components/section-header/SectionHeader'
import Social from './Social'

const page = () => {
  return (
<section>
<SectionHeader title="Our Contact" subtitle="You can reach out to us by filling the form or through our social media platforms. We are available 27/4"/>
<div className={`container ${styles.container}`}>
  <article className={styles.sociaForm}>
    <Social/>
    <form
    target="_blank"
    method="POST"
    className={styles.form}
  >
    {/* Name Input */}
    <input
      className={styles.formInput}
      type="text"
      placeholder="NAME"
    />
  
    {/* Email Input */}
    <input
      className={`${styles.formInput} ${styles.mt5}`}
      type="text"
      placeholder="EMAIL"
    />
  
    {/* Message Textarea */}
    <textarea
      className={`${styles.formInput} ${styles.mt5}`}
      placeholder="MESSAGE"
      rows="4"
      cols="50"
    />
    {/* Submit Button */}
    <button type="submit" className={styles.submitButton}>
      SEND ME A MESSAGE
    </button>
  </form>
  </article>
  </div>
  </section>
  )
}

export default page