import React from 'react'
import Header from "./components/header/Header"
import ServicesSection from "./components/services/ServicesSection"
import Testimonials from './components/testimonials/Testimonials'
import Faqs from './components/faqs/Faqs'
import SliderPage from './components/sliderPage/SliderPage'
import { bannerImages } from './components/sliderPage/sliderData'; 

const Home = () => {
  return (
    <>
    <Header/>
    <ServicesSection/>
    <Testimonials/>
    <Faqs/>
    {/* <SliderPage  images={bannerImages}/> */}
    </>
  )
}

export default Home