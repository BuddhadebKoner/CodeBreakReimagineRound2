import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../styles/navbar.css";

export default function Navbar() {
  const location = useLocation();
  const routeTitles = {
    "/": "India Post - Home",
    "/buystamp": "India Post - Buy Stamps",
    "/percel": "India Post - Percel",
    "/contactus": "India Post - Contact Us",
    "/about": "India Post - About Us",
  };

  const currentTitle = routeTitles[location.pathname] || "India Post";

  return (
    <>
      <Helmet>
        <title>{currentTitle}</title>
      </Helmet>
      <div className="navbar_container">
        <div className="uppernavbar">
          <div className="contactbar_container">
            <div className="contactbar_container_btns">
              <a href="tel:+4065550120">+(406) 555-0120</a>
              <a href="mailto:ckctm12@gmail.com">ckctm12@gmail.com</a>
            </div>
            <div className="contactbar_container_lang">
              <a href="">English</a>
            </div>
          </div>
          <div className="navlinks_container">
            <div className="navbuttons">
              <button className="navbutton">Sign Up / Register</button>
            </div>
            <div className="navlinks">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav_links_active" : "nav_links_normal"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/buystamp"
                className={({ isActive }) =>
                  isActive ? "nav_links_active" : "nav_links_normal"
                }
              >
                Buy Stamps
              </NavLink>
              <NavLink
                to="/percel"
                className={({ isActive }) =>
                  isActive ? "nav_links_active" : "nav_links_normal"
                }
              >
                Parcel
              </NavLink>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  isActive ? "nav_links_active" : "nav_links_normal"
                }
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav_links_active" : "nav_links_normal"
                }
              >
                About Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
