// import React from "react";
// import Image1 from "../../assets/TotalImages/Image8.jpeg";
import Image2 from "../../assets/TotalImages/Image10.jpeg";
import { BsBuildingsFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const OurLegacy = () => {
  return (
    <div className="flex flex-col py-7 md:py-24">
      <div className="flex flex-col md:flex-row w-[90%] items-center justify-between gap-x-10 md:gap-x-20 md:w-[80%] mx-auto not-md:gap-y-20">
        <div className=" relative flex flex-col flex-1">
          <img src={Image2} alt="" className="rounded-2xl" />
          <div className="md:w-[20vw] md:h-[25vh] w-[50vw] h-[20vh] self-end bg-[#0f172a] md:-my-[10vh] -my-[7vh] -mr-[3vw] flex flex-col items-center justify-center right-0 z-10 rounded-2xl border-7 border-white">
            <h1 className="text-lg md:text-3xl text-white font-bold">7+</h1>
            <p className="text-white text-center">
              years of <br /> experience
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex flex-row items-center">
            <BsBuildingsFill className="text-2xl text-[#0f172a] mr-2" />
            <p>OUR LEGACY</p>
          </div>
          <h3 className="text-2xl md:text-4xl my-2">
            Decades of Trusted Excellence
          </h3>
          <p>
            Our extensive expertise allows us to tackle projects of any size and
            complexity, always delivering results that exceed expectations.
            Trust us to bring your outdoor dreams to life with a commitment to
            excellence that stands the test of time.
          </p>
          <ul className="py-5 md:py-12 flex flex-col gap-y-2">
            <li className="flex flex-row gap-x-2 items-center">
              <FaCheckCircle color="#e98c00" size={20} />
              <p>Superior Workmanship</p>
            </li>
            <li className="flex flex-row gap-x-2 items-center">
              <FaCheckCircle color="#e98c00" size={20} />
              <p>Transparent Practices</p>
            </li>
            <li className="flex flex-row gap-x-2 items-center">
              <FaCheckCircle color="#e98c00" size={20} />
              <p>Creative solutions</p>
            </li>
          </ul>
          <Link to='/contact' className="flex flex-row items-center gap-x-2 rounded-full border border-[#0f172a] hover:bg-amber-300 transition ease-in w-fit px-4 py-2 md:py-3">
            <h2 className="md:text-xl">Call Us Now</h2>
            <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurLegacy;
