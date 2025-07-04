// import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { TbBrandWhatsappFilled } from "react-icons/tb";
// import { FaMessage } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  const linkClasses = (path: string) =>
    `p-4 transition-colors duration-200 hover:text-[rgb(253,152,0)] ${
      location.pathname === path ? "text-[rgb(253,152,0)] font-semibold" : ""
    }`;
  return (
    <div className="flex flex-col  divide-y text-[#0F172A] not-md:text-center divide-[#0f172a]/30 w-screen bg-[#FEF9E1] py-6 md:py-12">
      <div className="w-[90%] mx-auto not-md:flex not-md:flex-col  md:grid  not-md:items-center not-md:justify-center md:grid-cols-4 gap-x-2 gap-y-2 py-2">
        {/* div 1 */}
        <div className="flex flex-col not-md:items-center not-md:justify-center gap-y-2 md:gap-y-4">
          <img
            src="logo.png"
            className=" w-[40vw] md:w-[12vw]"
            alt="Total Builders ltd"
          />
          <p className="text-[#0F172A] md:text-xl not-md:text-sm">
            Get Professional Construction & Architecting Services for a better
            Tomorrow
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col gap-y-1 md:gap-y-3">
          <h3 className="text-[#0F172A] font-bold text-lg md:text-xl ">
            Quick Links
          </h3>
          <ul className="flex flex-row flex-wrap md:block not-md:w-[100%] not-md:mx-auto gap-x-1 md:gap-x-2">
            <li className="not-md:text-sm">
              <Link to="/" className={linkClasses("/")}>
                Home
              </Link>
            </li>
            <li className="not-md:text-sm">
              <Link to="/about" className={linkClasses("/about")}>
                About
              </Link>
            </li>
            <li className="not-md:text-sm">
              <Link to="/services" className={linkClasses("/services")}>
                Services
              </Link>
            </li>
            <li className="not-md:text-sm">
              <Link to="/projects" className={linkClasses("/projects")}>
                Projects
              </Link>
            </li>
            <li className="not-md:text-sm">
              <Link to="/contact" className={linkClasses("/contact")}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col gap-y-1 md:gap-y-3">
          <h3 className="text-[#0F172A] font-bold text-lg md:text-xl ">
            {" "}
            Services
          </h3>
          <ul className="list-disc">
            <li>Electrical infrastructure design and consultation </li>
            <li>Civil engineering studies and supervision</li>
            <li>Water Supply and treatment systems</li>
            <li>Environmental management and sustainability</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-1 md:gap-y-3">
          <h3 className="text-[#0F172A] font-bold text-lg md:text-xl ">
            Address
          </h3>
          <p className="text-[#0F172A] md:text-xl not-md:text-sm">Nduba, Gasabo,Kigali City, RWANDA</p>

          <div className="mt-8 flex flex-col gap-y-1">
            <a
              href="//api.whatsapp.com/send?phone=250783115599&text=Hello"
              target="_blank"
              className="flex flex-row items-center gap-x-2"
            >
              <div className="py-4 px-2 border-3 border-[#0f172a] rounded-lg">
                <FaPhoneAlt
                  color="#0000FF"
                  // size={20}
                  className="text-[#0F172A] md:text-xl not-md:text-sm"
                />
                <TbBrandWhatsappFilled
                  color="#075E54"
                  className="text-[#0F172A] md:text-xl not-md:text-sm"
                />
              </div>
              {/* <FaMessage  color="#008000" size={24} /> */}
              <p className="text-[#0F172A] md:text-xl not-md:text-sm">+250783115599</p>
            </a>
            <div className="flex flex-row gap-x-2 items-center">
              <div className="py-4 px-2 border-3 border-[#0f172a] rounded-lg">
                <MdMarkEmailRead
                  // size={25}
                  className="text-[#0F172A] md:text-xl not-md:text-sm"
                />
              </div>
              <p className="text-[#0F172A] md:text-xl not-md:text-sm">totalbuildierslimited@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto flex flex-col items-center py-4">
        <p className="text-[#0F172A]/30 not-md:font-bold not-md:text-sm">
          copyright &copy; 2025 Total builders ltd All right reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
