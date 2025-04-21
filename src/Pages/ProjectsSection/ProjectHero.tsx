// import React from 'react'
import ProjectImage from '../../assets/project.jpg'
const ProjectHero = () => {
  return (
    <div className='w-screen md:h-[80vh] h-[60vh] bg-cover bg-no-repeat bg-fixed text-white' style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${ProjectImage})`
      }}>
      <div className='w-[80%] mx-auto flex flex-col justify-center h-[100%] gap-y-6 md:gap-y-7'> 
            <h1 className='text-2xl text-white md:text-5xl md:w-[45%] leading-relaxed font-bold'>Our Projects</h1>
            <p className='md:w-[40%] text-white md:text-lg'>From small  to sprawling estates, each project reflects our commitment to quality and innovation..</p>
      </div>
    </div>
  )
}

export default ProjectHero
