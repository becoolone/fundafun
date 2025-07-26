import React from "react";
import "./Header.css";

const Header = () => {
  const toggleMobileMenu = () => {
    const menu = document.getElementById("mobileMenu");
    if (menu) {
      menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    }
  };

  return (
    <div className="header">
      <div className="header-left">
        <a href="/">
          <img src="logo.png" alt="FundaFun Logo" />
        </a>
        <span className="beta">beta</span>
      </div>
      <div className="nav-links">
        <a href="/subscribe" className="subscribe">
          Subscribe <img src="free.png" alt="Free Badge" />
        </a>
        <a href="/about">About</a>
        <a href="/donation">Donation</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <img src="ham.png" alt="Menu" />
      </div>
      <div className="mobile-menu" id="mobileMenu">
        <a href="/subscribe">Subscribe</a>
        <a href="/about">About</a>
        <a href="/donation">Donation</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
