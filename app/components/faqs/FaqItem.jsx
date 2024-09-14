"use client"

import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import styles from './faqs.module.css'

const FaqItem = ({title, desc}) => {
    const [open, setOpen] = useState(false)
  return (
    <article className={`${styles.faq}  ${open ? styles.open : ""}`} onClick={()=>setOpen(!open)}>
      <div>
     <span>{open ? <AiOutlineMinus/> : <AiOutlinePlus/>}</span>
     <h6>{title}</h6>
      </div>
      {open && <p>{desc}</p>}
    </article>
  )
}

export default FaqItem