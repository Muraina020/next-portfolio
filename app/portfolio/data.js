"use client"

import Image1 from "../assets/project1.png"
import Image2 from "../assets/project2.png"
import Image3 from "../assets/project3.png"
import Image4 from "../assets/project4.png"
import Image5 from "../assets/project5.png"
import Image6 from "../assets/project6.png"
import Image7 from "../assets/project7.jpg"
import Image8 from "../assets/project8.png"
// import { data } from "../services/servicesData"

export const data = [
    {
        id: 1, 
        category: "Frontend", 
        image: Image1, 
        title: "Project title1 (A single page website)", 
        desc: "A single page website built with react.js, framer motion, animation and fully functional contact form.", 
        demo: "https://react-tailwind-project-3.vercel.app/", 
        github: "https://github.com/Muraina020/react-tailwind-project-3"},
    {
        id: 2, 
        category: "Frontend", 
        image: Image2, 
        title: "Project title (E-commerce multpage website)", 
        desc: "An e-commerce website name greenhouse project built with next.js, slider, swiper.js, and one can actually filter through the catalog. ", 
        demo: "https://greenhouse-project.vercel.app/", 
        github: "https://github.com/Muraina020/greenhouse-project"},

    {id: 3, 
   category: "Fullstack", 
   image: Image3, 
   title: "Project title1 (multipage e-commerce website with login functionality)",
   desc: "A multipage website built with next.js where one can upload contents and images. It has a login and register page to authenticate users and also has single details page. It has light and dark mode functionality", 
   demo: "https://next-js-app-five-gray.vercel.app/", 
   github: "https://github.com/Muraina020/next.js-app"},
    
    {
        id: 4, 
        category: "backend", 
        image: Image5, 
        title: "Project title1 (a single page website)", 
        desc: "It is simple and has fully functional contact from section where user can directly send a message", 
        demo: "https://greatstack.in/", github: "https://github.com/Muraina020"},      

        {
            id: 5, 
            category: "fullstack", 
            image: Image4, 
            title: "Project title1 (portfolio website)", 
            desc: "A full stack project that house all other project. it was built with next.js, animation and has light and dark mood functionality", 
            demo: "https://next-portfolio-nine-sigma-22.vercel.app/portfolio", 
            github: "https://github.com/Muraina020/next-portfolio"
        },
    
]