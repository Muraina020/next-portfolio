import React from 'react'
import styles from './services.module.css'
import { data } from './servicesData'
import SectionHeader from '../components/section-header/SectionHeader'
import Card from "../components/card/Card"

const page = () => {
  return (
    <section>
       <SectionHeader title="My Services" subtitle="The services I am rendring"/>
       <div className={`container ${styles.container}`}>
        {data.map(({id, icon, title, description}) => <Card key={id} className={styles.service}>
          <span>{icon}</span>
          <h5>{title}</h5>
          <p>{description}</p>
        </Card>)}
       </div>
    </section>
  )
}

export default page