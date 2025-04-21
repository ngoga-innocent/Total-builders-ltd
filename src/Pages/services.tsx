// import React from 'react'
import ServiceHero from './ServicePageSections/ServiceHero'
import AllServices from './ServicePageSections/AllServices'
import OurLegacy from './ServicePageSections/OurLegacy'
import EngineerQuote from './SharedSections/EngineerQuote'

const Services = () => {
  return (
    <div>
      <ServiceHero />
      <AllServices />
      <OurLegacy />
      <EngineerQuote />
    </div>
  )
}

export default Services
