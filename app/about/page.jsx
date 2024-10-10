import React from 'react'
import styles from "./about.module.css"
import SectionHeader from "../components/section-header/SectionHeader"
import AboutImage from "../assets/ceo.png"
import Image from 'next/image'

const page = () => {
  return (
    <section>
      <SectionHeader title="About Me" subtitle="Who I am and what I do"/>
      <div className={`container ${styles.aboutContainer}`}>
        <article className={styles.aboutImage}>
          <Image src={AboutImage} alt=''/>
        </article>
        <article className={styles.aboutContent}>
          <h4>My name is Boluwatife and I am a developer</h4>
          <p>I started my coing journey about a year ago and as a self sponsor, i have to start learning through some open source materials and online resource. </p>
          <p>I find joy in coding and learning coding despite my finantial contraint. My dedication is actually yielding the moment i started solving some problems independently</p>
          <p>I ma so determine to be a reknown fullstack developer in the coming year. Presently, it is so conviniet for me to code in frontend and i am gradually diving in to backend. many thanks to the platform like plp, alx, digital for all that are offering African student a scholarship to study software develoment track. </p>
          <a href="../assets/cv.pdf" className={`btn primary ${styles.aboutCta}`} download rel='noopener noreferrer'>Download cv</a>
        </article>
      </div>
    </section>
  )
}

export default page