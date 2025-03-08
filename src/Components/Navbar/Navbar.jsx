import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "./navbar.css";
import logo from "../images/logo-2-yellow.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);



  let hoverTimeout;

  useEffect(() => {
    setNavVisible(true); // Trigger animation when component mounts
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setServicesOpen(true);
  };


  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => setServicesOpen(false), 200);
  };

  return (
    <nav className="z-50 p-3 Navbar-main" style={{ borderBottom: "1px solid rgba(0,0,0,0.1" }}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <img src={logo} alt="" className="LOGOSSS" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`${active === name
                ? "text-orange-500 border-b-2 border-orange-500"
                : "hover:text-orange-500"
                }`}
              onClick={() => setActive(name)}
            >
              {name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/services"
              className={`${active === "Services"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "hover:text-orange-500"
                }`}
              onClick={() => setActive("Services")}
            >
              Services
            </Link>
            {servicesOpen && (
              <div className="absolute left-0 top-full mt-4 w-60 bg-white shadow-md rounded-sm z-50 border border-gray-200">
                {[
                  { name: "Mobile App Development", path: "/services/MobileApp" },
                  { name: "Web Development", path: "/services/WebMain" },
                  { name: "Game Development", path: "/services/Game" },
                  { name: "Digital Marketing", path: "/services/digital-marketing" },
                  { name: "UI/UX Design", path: "/services/ui-ux" },
                ].map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                    onClick={() => setActive("Services")}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Links */}
          {[
            { name: "Career", path: "/career" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Contact Us", path: "/contact" },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`${active === name
                ? "text-orange-500 border-b-2 border-orange-500"
                : "hover:text-orange-500"
                }`}
              onClick={() => setActive(name)}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Take a Solution Button */}
        <div className="why-choose-one__link wow fadeInUp take-sollutopnnnjabdhbs">
          <Link to="/contact" className="why-choose-one__link__btn ostech-btn">
            Take Solution
          </Link>
        </div>


        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(true)}>
          <FiMenu />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-900 text-white transform ${menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 p-5`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl font-bold">BRAINART</div>
          <button onClick={() => setMenuOpen(false)}>
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Career", path: "/career" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Contact Us", path: "/contact" },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`${active === name
                ? "text-orange-500 border-l-4 border-orange-500 pl-2"
                : "hover:text-orange-500"
                }`}
              onClick={() => {
                setActive(name);
                setMenuOpen(false);
              }}
            >
              {name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative">
            <button
              className={`${active === "Services"
                ? "text-orange-500 border-l-4 border-orange-500 pl-2"
                : "hover:text-orange-500"
                } flex items-center`}
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
            </button>
            {mobileServicesOpen && (
              <div className="mt-2 pl-4 space-y-2">
                {[
                  { name: "Mobile App Development", path: "/services/MobileApp" },
                  { name: "Web Development", path: "/services/WebMain" },
                  { name: "Game Development", path: "/services/Game" },
                  { name: "Digital Marketing", path: "/services/digital-marketing" },
                  { name: "UI/UX Design", path: "/services/ui-ux" },
                ].map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    className="block hover:text-orange-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Contact Details & Social Icons */}
        <div className="mt-6 border-t border-gray-700 pt-4">
          <p className="flex items-center text-sm">
            <FaPhone className="mr-2" /> +91 9876543210
          </p>
          <p className="flex items-center text-sm mt-2">
            <FaEnvelope className="mr-2" /> info@brainart.com
          </p>

          <div className="flex space-x-4 mt-4">
            <FaLinkedin className="text-lg cursor-pointer" />
            <FaFacebook className="text-lg cursor-pointer" />
            <FaInstagram className="text-lg cursor-pointer" />
            <FaWhatsapp className="text-lg cursor-pointer" />
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
