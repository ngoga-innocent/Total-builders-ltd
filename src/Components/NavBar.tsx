import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import Logo from "/logo.png";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  function handleMenuNav() {
    setMenu(!menu);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (path: string) =>
    `p-4 transition-colors duration-200 hover:text-[rgb(253,152,0)] ${
      location.pathname === path ? "text-[rgb(253,152,0)] font-semibold" : ""
    }`;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="font-bold flex flex-row justify-between items-center w-[80%] mx-auto py-3">
        <div>
          <img src={Logo} alt="Total Builders Ltd" className="w-[10rem] md:w-md" />
        </div>
        <div>
          <ul className="hidden md:flex flex-row">
            <li><Link to="/" className={linkClasses("/")}>Home</Link></li>
            <li><Link to="/about" className={linkClasses("/about")}>About</Link></li>
            <li><Link to="/services" className={linkClasses("/services")}>Services</Link></li>
            <li><Link to="/projects" className={linkClasses("/projects")}>Projects</Link></li>
            <li><Link to="/contact" className={linkClasses("/contact")}>Contact</Link></li>
          </ul>
        </div>
        <button className="bg-[rgb(253,152,0)] text-white font-bold p-3 rounded-full hidden md:block hover:brightness-110">
         <Link to='/free-quote'>Get A Free Quote</Link> 
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
          <li><Link to="/" onClick={() => setMenu(false)} className={linkClasses("/")}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenu(false)} className={linkClasses("/about")}>About</Link></li>
          <li><Link to="/services" onClick={() => setMenu(false)} className={linkClasses("/services")}>Services</Link></li>
          <li><Link to="/projects" onClick={() => setMenu(false)} className={linkClasses("/projects")}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setMenu(false)} className={linkClasses("/contact")}>Contact</Link></li>
          <li><Link to="/free-quote" onClick={() => setMenu(false)} className={linkClasses("/contact")}>Get a free Quote</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
