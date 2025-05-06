// import React from 'react'
import ProjectHero from './ProjectsSection/ProjectHero'
import OurProjects from './ProjectsSection/OurProjects'
import EngineerQuote from './SharedSections/EngineerQuote'

const Projects = () => {
  return (
    <div className='relative'>
      <ProjectHero />
      <OurProjects />
      <EngineerQuote />
    </div>
  )
}

export default Projects
