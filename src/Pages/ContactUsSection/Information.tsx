// import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
const Information = () => {
  return (
    <div className="flex flex-col bg-[#FEF9E1] py-7 md:py-12 w-screen">
      <div className="w-[80%] mx-auto flex flex-col md:flex-row gap-x-12 not-md:gap-y-3">
        <div className="flex flex-col bg-white rounded-xl py-7 px-7 gap-y-3">
            <div className="rounded-full w-[4vw] h-[4vw] p-2 md:p-4 bg-[#454F5E] flex flex-col items-center justify-center">
              <FaPhoneAlt color="FEF9E1" size={23} />  
            </div>
            <h1 className="text-xl md:text-2xl">Make a Call</h1>
            <p className="text-[#454F5E]">phone:+250783115599  whatsapp:+250783115599</p>
        </div>
        <div className="flex flex-col bg-white rounded-xl py-7 px-7 gap-y-3">
            <div className="rounded-full w-[4vw] h-[4vw] p-2 md:p-4 bg-[#454F5E] flex flex-col items-center justify-center">
              <MdEmail color="FEF9E1" size={23} />  
            </div>
            <h1 className="text-xl md:text-2xl">Send Email</h1>
            <p className="text-[#454F5E]">phone:totalbuilderslimited@gmail.com </p>
        </div>
        <div className="flex flex-col bg-white rounded-xl py-7 px-7 gap-y-3">
            <div className="rounded-full w-[4vw] h-[4vw] p-2 md:p-4 bg-[#454F5E] flex flex-col items-center justify-center">
              <MdLocationPin color="FEF9E1" size={23} />  
            </div>
            <h1 className="text-xl md:text-2xl">Visit an Office</h1>
            <p className="text-[#454F5E]">Nduba, Gasabo, Kigali city, Rwanda</p>
        </div>
      </div>
    </div>
  )
}

export default Information
