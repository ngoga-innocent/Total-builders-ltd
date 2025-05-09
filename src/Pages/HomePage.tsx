// import React from 'react'
import About_us from './HomePageSections/About_us'
import OurServices from './HomePageSections/OurServices'
import WhyUs from './HomePageSections/WhyUs'
import OurProject from './HomePageSections/OurProject'
import Testimonails from './HomePageSections/Testimonails'
import HeroSection from './HomePageSections/HeroSection'
import EngineerQuote from './SharedSections/EngineerQuote'
import OurClients from './HomePageSections/OurClients'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
      <About_us />
      <OurServices />
      <WhyUs />
      <OurProject />
      <OurClients />
      <Testimonails />
      <EngineerQuote />
    </div>
  )
}

export default HomePage
