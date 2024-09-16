"use client"

import React, { useState } from 'react'
import styles from './portfolio.module.css'
import { data } from './data'
import SectionHeader from '../components/section-header/SectionHeader'
import CategoryButtons from './CategoryButtons'
import Projects from './Projects'

const Page = () => {
  const [projects, setProjects] = useState(data)
  const categories = data.map(item => item.category);
  const uniqueCategories = ["all", ...new Set(categories)]

  console.log(uniqueCategories)

  const filterProjectsHandler = (category) => {
    if(category === "all"){
      setProjects(data)
      return
    }
    const filteredProjects = data.filter(project => project.category === category)
    setProjects(filteredProjects)
  }
  return (
    <section>
       <SectionHeader title="My Projects" subtitle="My recent projects. Filter with the button"/>
       <div className='container'>
        <CategoryButtons categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
        <Projects projects={projects}/>
       </div>

    </section>
  )
}

export default Page