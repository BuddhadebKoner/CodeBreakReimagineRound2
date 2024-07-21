import React from "react";
import ShineBorder from "./magicui/shine-border";
import "../styles/maincontext.css";
import TypingAnimation from "./magicui/typing-animation";
import assets from "@/assets/assets";

export default function Components() {
   return (
      <>
         <div className="main_context_container">
            <div className="track_post_container">
               <div className="track_post_container_card">
                  <h1>Track A Package</h1>
                  <input type="text" placeholder="Delivery Code" />
                  <a href="">Track Shipment</a>
               </div>
            </div>
         </div>
      </>
   );
}
