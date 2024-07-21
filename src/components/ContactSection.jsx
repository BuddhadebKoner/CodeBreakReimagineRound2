import React from "react";
import "../styles/ContactSection.css";

export default function ContactSection() {
   return (
      <>
         <div className="contact_section_container">
            <div className="contact_section_container_card">
               <div className="contact_section_information"></div>
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
                     <button type="submit" className="send_message_button">
                        Send Message
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
