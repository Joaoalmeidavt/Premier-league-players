import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoPL from "../assets/images/PL.webp";
import LogoSubtitle from "../assets/images/sub-logo.png";
// Update FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faTshirt,
  faBars,
  faClose,
  faUsers,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#184E77] opacity-80 w-full h-[100px] fixed top-0 z-30 flex items-center shadow-md">
      <Link className="p-2 flex items-center" to="/">
        <img src={LogoPL} className="w-[60px] ml-4 " />
        <img
          src={LogoSubtitle}
          className="w-[120px] ml-[-5px]"
          alt="PremierZone"
        />
      </Link>
      <nav
        className={`${
          showNav ? "flex" : "hidden"} md:flex flex-grow justify-evenly fixed md:static top-[100px] left-0 right-0 
        bg-[#184E77] md:bg-transparent 
        flex-col md:flex-row 
        items-center 
        py-4 md:py-0`}
      >
        <NavLink
          exact="true" className="text-[#f0f0f0cc] text-xl mx-10 relative hover:text-white" to="/">
          {showNav ? "Home" : <FontAwesomeIcon icon={faHome} />}
        </NavLink>

        <NavLink
          exact="true" className="text-[#f0f0f0cc] text-xl mx-10 relative hover:text-white" to="/teams">
         {showNav ? "Teams" : <FontAwesomeIcon icon={faUsers} />}
        </NavLink>

        <NavLink
          exact="true" className="text-[#f0f0f0cc] text-xl mx-10 relative hover:text-white" to="/nation">
          {showNav ? "Nation" : <FontAwesomeIcon icon={faFlag} />}
        </NavLink>

        <NavLink
          exact="true" className="text-[#f0f0f0cc] text-xl mx-10 relative hover:text-white"  to="/position">
           {showNav ? "Position" : <FontAwesomeIcon icon={faTshirt} />}
        </NavLink>

        <NavLink
          exact="true" className="text-[#f0f0f0cc] text-xl mx-10 relative hover:text-white"   to="/search">
          {showNav ? "Search" : <FontAwesomeIcon icon={faSearch} />}
        </NavLink>

        {showNav && isMobile &&(
          <FontAwesomeIcon
            icon={faClose}
            size="3x"
            className="fixed top-4 right-4 cursor-pointer md:hidden" color="#f0f0f0cc"
            onClick={() => setShowNav(false)}
          />
        )}
      </nav>
      {!showNav && isMobile && (
        <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#f0f0f0cc" size="2x"
          className="cursor-pointer md:hidden absolute top-4 right-4 mt-5 mr-5 "
        />
      )}
    </div>
  );
};

export default Sidebar;
