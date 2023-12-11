import React, { useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close the navbar on section click
  };
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isFoundersMenuOpen, setIsFoundersMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleServiceMenu = () => {
    setIsServiceMenuOpen(!isServiceMenuOpen);
  };
  const toggleFoundersMenu = () => {
    setIsFoundersMenuOpen(!isFoundersMenuOpen);
  };

  return (
    <>
      <div
        className={`navbar-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleNavbar}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`sliding-menu-container ${isOpen ? "open" : ""}`}>
        <ul className="mobile-navbar-list">
          <li>
            <button onClick={() => scrollToSection("home-section")}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about-section")}>
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("blog-section")}>
              Blog
            </button>
          </li>
          
          <li>
            <button onClick={() => scrollToSection("contact-section")}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNavbar;
