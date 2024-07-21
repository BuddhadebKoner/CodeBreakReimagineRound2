import assets from "@/assets/assets";
import About_hero from "@/components/About_hero";
import React from "react";

export default function AboutUs() {
   return (
      <>
         <div className="lower_navbar">
            <img src={assets.logo} alt="" className="navlogo" />
            <img src={assets.navbar_right} alt="" className="navright" />
         </div>
         <About_hero/>
      </>
   );
}
