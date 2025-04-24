// import React from 'react'

import { BiPhoneCall } from "react-icons/bi";
import { BsInstagram, BsPersonBadge, BsTwitterX } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Quoting = () => {
  return (
    <div className="bg-[#02044A] w-[90vw] my-3 rounded-md md:rounded-3xl mx-auto px-3 md:px-8 flex flex-col gap-y-4 md:flex-row md:gap-x-20 justify-between py-2 md:py-12">
      <div className="flex flex-col gap-y-3 md:gap-y-7">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-white font-bold text-2xl md:text-4xl">
            Get A Quote
          </h1>
          <p className="text-white">
            Fill the Form and our team will get back to <br /> you within 24 hrs
          </p>
        </div>
        <div className="flex flex-col text-white gap-y-3 py-7">
          <div className="flex flex-row items-center gap-x-2 hover:border border-[#2C68CF] hover:cursor-pointer rounded-lg py-3 px-2 ease-in duration-200">
            <BiPhoneCall color="#2C68CF" size={20} />
            <p>+250783115599</p>
          </div>
          <div className="flex flex-row items-center gap-x-2 hover:border border-[#2C68CF] hover:cursor-pointer rounded-lg py-3 px-2 ease-in duration-200">
            <MdEmail color="#2C68CF" size={20} />
            <p>totalbuildierslimited@gmail.com</p>
          </div>
          <div className="flex flex-row items-center gap-x-2 hover:border border-[#2C68CF] hover:cursor-pointer rounded-lg py-3 px-2 ease-in duration-200">
            <FaLocationPin color="#2C68CF" size={20} />
            <p>Nduba, Gasabo,Kigali City, RWANDA</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-2 items-center">
          <Link
            to=""
            className="flex flex-col w-[10vw] h-[10vw] md:w-[5vw] md:h-[5vw] ease-in duration-400 rounded-full hover:bg-[#2C68CF] items-center justify-center"
          >
            <FaFacebook size={20} color="white" />
          </Link>
          <Link
            to=""
            className="flex flex-col w-[10vw] h-[10vw] md:w-[5vw] md:h-[5vw] ease-in duration-400 rounded-full hover:bg-[#2C68CF] items-center justify-center"
          >
            <BsTwitterX size={20} color="white" />
          </Link>
          <Link
            to=""
            className="flex flex-col w-[10vw] h-[10vw] md:w-[5vw] md:h-[5vw] ease-in duration-400 rounded-full hover:bg-[#2C68CF] items-center justify-center"
          >
            <BsInstagram size={20} color="white" />
          </Link>
        </div>
      </div>
      <form
        action=""
        className="bg-white rounded-lg py-2 md:py-6 w-[40vw] gap-y-3 flex flex-col"
      >
        <div className="flex flex-col w-[90%] mx-auto">
          <label htmlFor="Name" className="text-gray-400">
            Your Name
          </label>
          <div className="flex flex-row items-center border border-gray-400 gap-x-3 py-2 rounded-lg">
            <BsPersonBadge size={20} color="#F3F3F5" />
            <input
              type="text"
              required
              name="name"
              className="outline-none text-gray-400"
              id=""
            />
          </div>
        </div>
        <div className="flex flex-col w-[90%] mx-auto">
          <label htmlFor="Name" className="text-gray-400">
            Mail
          </label>
          <div className="flex flex-row items-center border border-gray-400 gap-x-3 py-2 rounded-lg">
            <CgMail size={20} color="#F3F3F5" />
            <input
              type="email"
              required
              name="name"
              className="outline-none text-gray-400"
              id=""
            />
          </div>
        </div>
        <div className="flex flex-col w-[90%] mx-auto">
          <label htmlFor="Message" className="text-gray-400">
            Message
          </label>

          <textarea
            required
            placeholder="Message"
            name="message"
            className="outline-none border rounded-lg h-[10vh] px-3 border-gray-400 text-gray-400"
            id=""
          />
        </div>
        <button className="bg-[#2C68CF] py-3 px-7 rounded-lg self-end mr-[5%] text-white cursor-pointer hover:bg-[#2C68CF]/80">Send Message</button>
      </form>
    </div>
  );
};

export default Quoting;
