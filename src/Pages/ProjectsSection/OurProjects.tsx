// import React from 'react'
import Project1 from '../../assets/TotalImages/image1.jpeg'
import Project2 from '../../assets/TotalImages/image2.jpeg'
import Project3 from '../../assets/TotalImages/image3.jpeg'
import Project4 from '../../assets/TotalImages/Image4.jpeg'
import Project10 from '../../assets/TotalImages/Image10.jpeg'
import Project6 from '../../assets/TotalImages/image6.jpeg'
import Project7 from '../../assets/TotalImages/image7.jpeg'
import Project8 from '../../assets/TotalImages/image8.jpeg'
import Project9 from '../../assets/TotalImages/image9.jpeg'
import { BsBuildingsFill } from "react-icons/bs";
const OurProjects = () => {
    const projects=[
        {
            image:Project1
        },
        {
            image:Project2
        },
        {
            image:Project3
        },
        {
            image:Project4
        },
        {
            image:Project10
        },
        {
            image:Project6
        },
        {
            image:Project7
        },
        {
            image:Project8
        },
        {
            image:Project9
        },
    ]
  return (
    <div className='flex flex-col w-screen py-7 md:py-12 bg-[#FEF9E1]'>

      <div className='flex flex-col w-[90vw] mx-auto md:w-[80vw] items-center'>
        <div className='flex flex-row items-center gap-x-2 '>
            <BsBuildingsFill />
            <h2 className='text-xs md:text-sm font-bold uppercase'>Our  Projects</h2>
        </div>
        <h2 className='text-2xl md:text-4xl'>Our Stunning Projects</h2>
      <div className='w-[90vw] md:w-[80vw] mx-auto py-5 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-7'>
        {projects.map((project, index) => (
            <div key={index} className='overflow-clip rounded-xl not-md:w-[90vw] md:rounded-2xl md:h-[30vh]'>
                <img src={project?.image} className='w-[100%] h-[100%]' alt="" />
            </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default OurProjects
