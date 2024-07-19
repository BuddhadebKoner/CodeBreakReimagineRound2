import React from "react";
import ShineBorder from "./magicui/shine-border";
import "../styles/maincontext.css";
import TypingAnimation from "./magicui/typing-animation";

export default function Components() {
   return (
      <>
         <div className="main_context_container">
            <ShineBorder
               borderRadius={10}
               borderWidth={2}
               duration={10}
               color={["#ffffff", "#ffffff", "#ffffff"]}
               // color={["#ff0000", "#00ff00", "#0000ff"]}
               className="ShineBorder_main"
            >
               <div className="ShineBorder_intter">
                  <TypingAnimation
                     className="text-4xl font-bold text-white"
                     text="World Largest Posting platform"
                  />
               </div>
            </ShineBorder>
            <div className="track_post_container">
               <div className="track_post_container_card">
                     <h1>Track A Mail or Package</h1>
                     <input
                        type="text"
                        placeholder="Indicate your tracking number or delivery notice"
                     />
                     <a href="">Track Shipment</a>
               </div>
            </div>
         </div>
      </>
   );
}
