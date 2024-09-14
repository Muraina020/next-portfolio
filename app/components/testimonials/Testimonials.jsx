"use client"

import React from 'react'
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react'
import {data} from "./testimonialsData" 
import styles from './testimonials.module.css'
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className={styles.section}>
        <h2>Testimonials</h2>
        <p>Check out what my clients say</p>
        <Swiper
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {data.map(({id, name, avatar, profession, quote}) => <SwiperSlide key={id} className={styles.slide}>
        <div className={styles.avatarWraper}>
            <div className={styles.avatar}>
                <Image src={avatar} alt=''/>
            </div>
        </div>
        <h6 className={styles.name}>{name}</h6>
        <small className={styles.job}>{profession}</small>
        <p className={styles.quote}>{quote}</p>
      </SwiperSlide>)}
      <div className='swiper-pagination'></div>
    </Swiper>
   
    </section>
  )
}

export default Testimonials