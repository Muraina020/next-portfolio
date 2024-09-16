"use client"

import React, { useContext, useEffect, useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import {FaBars} from 'react-icons/fa6'
import {AiOutlineClose} from 'react-icons/ai'
import {GoMoon, GoSun} from 'react-icons/go'
import { usePathname } from 'next/navigation'
import { ThemeContext } from '../../context/themeContext'

const data = [
    {id: 1, link: '/', caption: 'Home'},
    {id: 2, link: '/about', caption: 'About'},
    {id: 3, link: '/services', caption: 'Services'},
    {id: 4, link: '/portfolio', caption: 'Portfolio'},
    {id: 5, link: '/contact', caption: 'Contact'},
]

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const pathname = usePathname();
  const {theme, setTheme} = useContext(ThemeContext)

//   close dropdown when on small screen
 const closeNavHandler = () => {
    if(window.innerWidth <= 600){
        setNavOpen(false)
    }
 }
// check if user is on screen larger than 600px. if so then show nav menu
 useEffect(()=>{
    if(window.innerWidth > 600){
        setNavOpen(true)
    }
 }, [navOpen])


//  Function to change the theme

  const changeThemeHandler = () =>{
    if(theme === "light"){
      setTheme('dark')
    }else {
      setTheme('light')
    }
  }

  return (
    <div className={styles.nav}>
        <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.navLogo} onClick={closeNavHandler}>E-TECH</Link>
        { navOpen && <ul className={styles.navItems}>
         {
            data.map(({id, link, caption}) => <li key={id}>
           <Link href={link} onClick={closeNavHandler} className={pathname === link ? "active" : ""}>{caption}</Link>
            </li>)
         }
        </ul>}
        <div className={styles.navBtns}>
         <button className={styles.themeBtn} onClick={ changeThemeHandler}>{ theme === 'light' ? <GoMoon/> : <GoSun/>}</button>
         <button className={styles.navBtn} onClick={() => setNavOpen(!navOpen)}>{navOpen ? <AiOutlineClose/> : <FaBars/>}</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar