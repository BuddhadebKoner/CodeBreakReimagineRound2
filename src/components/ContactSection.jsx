import React from "react";
import "../styles/ContactSection.css";
import assets from "@/assets/assets";

export default function ContactSection() {
   return (
      <>
         <div className="contact_section_container">
            <div className="contact_section_container_card">
               <div className="contact_section_information">
                  <div className="contact_section_information_head">
                     <h1>Contact Information</h1>
                     <p>Say something to Review Us</p>
                  </div>
                  <div className="contact_section_information_details">
                     <div className="contact_section_information_details_ph">
                        <img src={assets.call} alt="" />
                        <p>1800 266 6868</p>
                     </div>
                     <div className="contact_section_information_details_mail">
                        <img src={assets.mail} alt="" />
                        <p>plipg.dte@indiapost.gov.in</p>
                     </div>
                     <div className="contact_section_information_details_add">
                        <img src={assets.location} alt="" />
                        <p>Dak Bhawan, New Delhi-110001</p>
                     </div>
                  </div>
               </div>
               <div className="contact_section_form">
                  <div className="basic_information_input">
                     <input type="text" placeholder="First Name" />
                     <input type="text" placeholder="Last Name" />
                     <input type="email" placeholder="Email" />
                     <input type="number" placeholder="Number" />
                  </div>
                  <div className="message_section">
                     <h1>Message</h1>
                     <input
                        className="message_input"
                        type="text"
                        name=""
                        id=""
                        placeholder="Write Your message"
                     />
                     <button
                        type="submit"
                        className="send_message_button send_message_button_extra"
                     >
                        Send Message
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
