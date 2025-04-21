// import React from 'react'
import Engineer from '../../assets/TotalImages/engineer2.jpg'
import { Link } from 'react-router-dom'
const EngineerQuote = () => {
  return (
    <div className='h-[60vh] flex flex-col text-white bg-cover  bg-no-repeat' style={{
        backgroundImage:`linear-gradient(to right,rgba(0,0,0,0.4),rgba(253,152,0,0.4)),url(${Engineer})`
    }}>
      <div className='w-[80vw] mx-auto flex flex-col md:items-end justify-center h-[100%]'>
        <div className='flex flex-col gap-y-3'>
            <h3 className='text-lg md:text-3xl '>Ready to Transform Your <br /> Outdoor Space</h3>
            <p>Contact us today to schedule a consultation or to learn more about our services.</p>

            <Link className='rounded-full py-2 px-4 text-white bg-[#fd9800] w-fit' to='/'>Get A free Quote</Link>
        </div>
      </div>
    </div>
  )
}

export default EngineerQuote
