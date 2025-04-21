import React,{useState} from 'react'
import { CiMenuFries, } from "react-icons/ci"
import { IoCloseSharp } from "react-icons/io5";
import Logo from '/logo.png'
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [menu,setMenu]=useState(false)
    function handleMenuNav(){
        setMenu(!menu)
    }
  return (
    <div className='w-screen'>
      <div className='text-white font-bold flex flex-row justify-between items-center w-[80%] mx-auto shadow-b shadow-b-md shadow-b-white z-10'>
      <div>
        <img src={Logo} alt="Total Builders Ltd" className='w-[10rem] md:w-md'/>
      </div>
      <div>
        <ul className='hidden md:flex flex-row'>
            <li className='p-4'><Link to='/' >Home</Link></li>
            <li className='p-4'><Link to='/about'>About</Link></li>
            <li className='p-4'><Link to='/services'>Services</Link></li>
            <li className='p-4'><Link to='/projects'>Projects</Link></li>
            <li className='p-4'><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
      <button className='bg-[rgb(253,152,0)] text-white font-bold p-3 rounded-full hidden md:block'>Get A free Quote</button>
      <div className='md:hidden' onClick={handleMenuNav}>
        {!menu?<CiMenuFries size={20}/>:<IoCloseSharp size={20} />}
      </div>
      <div className={!menu?'md:hidden flex flex-col h-auto fixed -left-[100%] ease-in duration-500 top-12 w-[100%] bg-white text-black':'md:hidden ease-in duration-500 flex flex-col h-auto fixed text-black left-0 top-12 w-[100%] bg-white' }>
            <ul className='md:hidden flex flex-col'>
            <li className='p-2'><Link to='/'>Home</Link></li>
            <li className='p-2'><Link to='/about'>About</Link></li>
            <li className='p-2'><Link to='/services'>Services</Link></li>
            <li className='p-2'><Link to='/projects'>Projects</Link></li>
            <li className='p-2'><Link to='/contact'>Contact</Link></li>
            </ul>
      </div>
    </div>
    </div>
  )
}

export default NavBar
