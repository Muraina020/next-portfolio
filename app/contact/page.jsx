import React from 'react'
import styles from './contact.module.css'
import SectionHeader from '../components/section-header/SectionHeader'
import Social from './Social'
import ContactForm from './ContactForm'

const page = () => {
  return (
<section>
<SectionHeader title="Our Contact" subtitle="You can reach out to us by filling the form or through our social media platforms. We are available 27/4"/>
<div className={`container ${styles.container}`}>
  <article className={styles.sociaForm}>
    <Social/>
    <ContactForm/>
  </article>
  </div>
  </section>
  )
}

export default page