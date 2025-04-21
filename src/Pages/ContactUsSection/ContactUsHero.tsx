// import React from 'react'
import ContactHeroImage from '../../assets/house_construction.jpg'
const ContactHero = () => {
  return (
    <div className='w-screen md:h-[80vh] h-[60vh] bg-cover bg-no-repeat bg-fixed text-white' style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${ContactHeroImage})`
      }}>
      <div className='w-[80%] mx-auto flex flex-col justify-center h-[100%] gap-y-6 md:gap-y-7'> 
            <h1 className='text-2xl text-white md:text-5xl md:w-[45%] leading-relaxed font-bold'>Contact Us</h1>
            <p className='md:w-[30%] text-white'>Contact us Today to Schedule a Consultation or to Learn More about our Services.</p>
      </div>
    </div>
  )
}

export default ContactHero
