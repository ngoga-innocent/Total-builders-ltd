// import React from 'react'
import AboutHeroImIage from '../../assets/aboutHero.jpeg'
const AboutHero = () => {
  return (
    <div className='w-screen md:h-[80vh] h-[60vh] bg-cover bg-no-repeat bg-fixed text-white' style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${AboutHeroImIage})`
      }}>
      <div className='w-[80%] mx-auto flex flex-col justify-center h-[100%] gap-y-6 md:gap-y-7'> 
            <h1 className='text-2xl text-white md:text-5xl md:w-[45%] leading-relaxed font-bold'>Welcome to Earthly Elegance</h1>
            <p className='md:w-[50%] text-white md:text-lg font-bold'>From Innovative Design to Meticulous Maintenance, We Deliver Exceptional Results Tailored to your vision.</p>
      </div>
    </div>
  )
}

export default AboutHero
