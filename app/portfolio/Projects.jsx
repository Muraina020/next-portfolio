import React from 'react'
import Card from '../components/card/Card'
import Image from 'next/image'
import styles from './portfolio.module.css'
import Link from 'next/link'

const Projects = ({projects}) => {
  return (
    <div className={styles.projects}>
        {
    projects.map(({id, image, category, title, desc, demo, github}) => <Card key={id} className={styles.project}>
        <div className={styles.image}>
            <Image src={image} alt=''/>
        </div>
        <div className={styles.content}>
            <h4>{title}</h4>
            <p>{desc}</p>
            <div className={styles.cta}>
          <Link href={demo} className={`${styles.btn} ${styles.primary} `} target='_blank' rel='noopener noreferrer'>Demo</Link>
          <Link href={github} className={`${styles.btn}`} target='_blank' rel='noopener noreferrer'>Github</Link>
            </div>
        </div>
    </Card>)
        }
    </div>
  )
}

export default Projects