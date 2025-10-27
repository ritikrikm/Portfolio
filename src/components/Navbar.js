import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyle.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  // Function to smoothly scroll to the top and close the mobile menu
  const scrollToTop = () => {
    setClick(false); // Close the mobile menu
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Toggle the mobile menu state and scroll to the top (primarily for mobile view)
  const handleClick = () => {
    setClick(!click);
    // Optional: Keep scrolling to top on toggle, though closing on link click is more standard.
    // window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  // Change the header background color based on scroll position
  const changeColor = useCallback(() => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  }, []); // useCallback ensures the function reference is stable

  // Attach and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", changeColor);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, [changeColor]);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" onClick={scrollToTop}>
        <h1>Ritik Mehta</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={scrollToTop}>Home</Link>
        </li>
        <li>
          <Link to="/project" onClick={scrollToTop}>Project</Link>
        </li>
        <li>
          <Link to="/experience" onClick={scrollToTop}>Experience</Link>
        </li>
        <li>
          <Link to="/about" onClick={scrollToTop}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={scrollToTop}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger menu icon, only visible on mobile */}
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} aria-label="Close Menu" />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} aria-label="Open Menu" />
        )}
      </div>
    </div>
  );
};

export default Navbar;