import assets from "@/assets/assets";
import React from "react";
import ContactSection from "@/components/ContactSection";
import { Link } from "react-router-dom";

export default function ContactUs() {
   return (
      <>
         <div className="lower_navbar">
            <Link to="/">
               <img src={assets.logo} alt="" className="navlogo" />
            </Link>
            <img src={assets.navbar_right} alt="" className="navright" />
         </div>
         <ContactSection />
      </>
   );
}
