import assets from "@/assets/assets";
import About_hero from "@/components/About_hero";
import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
   return (
      <>
         <div className="lower_navbar">
            <Link to="/">
            <img src={assets.logo} alt="" className="navlogo" />
            </Link>
            <img src={assets.navbar_right} alt="" className="navright" />
         </div>
         <About_hero/>
      </>
   );
}
