import React from 'react'
import {data} from './faqsData'
import styles from './faqs.module.css'
import FaqItem from './FaqItem'

const Faqs = () => {
  return (
    <section className={styles.section}>
        <h2>Frequently Ask Questions</h2>
        <p>Find answer to some of the frequently asked questionsa below. Contact me if you have more questions</p>
       <div className={`container ${styles.container}`}>
       {data.map(({id, title, description}) => <FaqItem key={id} title={title} desc={description}/>)}
       </div>
    </section>
  )
}

export default Faqs