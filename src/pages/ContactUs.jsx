import assets from "@/assets/assets";
import React from "react";
import ContactSection from "@/components/ContactSection";

export default function ContactUs() {
   return (
      <>
         <div className="lower_navbar">
            <img src={assets.logo} alt="" className="navlogo" />
            <img src={assets.navbar_right} alt="" className="navright" />
         </div>
         <ContactSection />
      </>
   );
}
