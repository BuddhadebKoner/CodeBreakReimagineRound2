import React from "react";
import "../styles/About_hero.css";
import assets from "@/assets/assets";

export default function About_hero() {
   return (
      <>
         <div className="about_section_container">
            <div className="about_section_container_card">
               <div className="about_section_information">
                  <img src={assets.aboutBanner} alt="" />
               </div>
               <div className="about_section_content">
                  <div className="basic_information_content">
                     <h1>Indian Postal Services</h1>
                     <p>
                        Indian Postal Services, operated by India Post, is one
                        of the world's largest postal networks. Established in
                        1854, it provides a wide range of services including
                        mail delivery, parcel services, and financial services
                        like savings accounts and money transfers. With over
                        150,000 post offices, it serves urban and rural areas,
                        connecting the entire nation. India Post has evolved to
                        include digital services, ensuring modern and efficient
                        communication and logistical solutions for millions of
                        people across India.
                     </p>
                     <div className="basic_information_content_btns">
                        <button className="send_message_button send_message_button_login">Login</button>
                        <button className="send_message_button send_message_button_register">Register</button>
                     </div>
                  </div>
                  <div className="bio_section">
                     
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
