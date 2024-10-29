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
          <h4>Hi, I am Muraina S.B. I am a developer with three years of experience</h4>
          <p>I started my coding journey about three years ago. And I have executed many projects which actually affirm my proficience in the latest technology. I am so convinient using React and Next.js to bring the concept into live </p>
          <p>With my nature of fast learning ability, I can easily adapt to the emerging latest technoloy. I am commited to giving the best to whatever I do in rendering and in support to grow</p>
          <a href="../assets/cv.pdf" className={`btn primary ${styles.aboutCta}`} download rel='noopener noreferrer'>Download cv</a>
        </article>
      </div>
    </section>
  )
}

export default page