import React, { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import Logo from "/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function handleMenuNav() {
    setMenu(!menu);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // 80vh ≈ 80% of viewport height
      setScrolled(scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md " : "bg-transparent text-white"
      }`}
    >
      <div className=" font-bold flex flex-row justify-between items-center w-[80%] mx-auto py-3">
        <div>
          <img src={Logo} alt="Total Builders Ltd" className="w-[10rem] md:w-md" />
        </div>
        <div>
          <ul className="hidden md:flex flex-row">
            <li className="p-4">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4">
              <Link to="/about">About</Link>
            </li>
            <li className="p-4">
              <Link to="/services">Services</Link>
            </li>
            <li className="p-4">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="p-4">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <button className="bg-[rgb(253,152,0)] text-white font-bold p-3 rounded-full hidden md:block">
          Get A free Quote
        </button>
        <div className="md:hidden" onClick={handleMenuNav}>
          {!menu ? <CiMenuFries size={20} /> : <IoCloseSharp size={20} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col h-auto fixed top-12 w-full text-black transition-all duration-500 ${
          menu ? "left-0 bg-white" : "-left-full"
        }`}
      >
        <ul className="md:hidden flex flex-col">
          <li className="p-2">
            <Link to="/" onClick={() => setMenu(false)}>Home</Link>
          </li>
          <li className="p-2">
            <Link to="/about" onClick={() => setMenu(false)}>About</Link>
          </li>
          <li className="p-2">
            <Link to="/services" onClick={() => setMenu(false)}>Services</Link>
          </li>
          <li className="p-2">
            <Link to="/projects" onClick={() => setMenu(false)}>Projects</Link>
          </li>
          <li className="p-2">
            <Link to="/contact" onClick={() => setMenu(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
