import assets from "@/assets/assets";
import React from "react";

export default function AboutUs() {
   return (
      <>
         <div className="lower_navbar">
            <img src={assets.logo} alt="" className="navlogo" />
            <img src={assets.navbar_right} alt="" className="navright" />
         </div>
      </>
   );
}
