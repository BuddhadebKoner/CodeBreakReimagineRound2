import React from "react";
import Globe from "./magicui/globe";
import "../styles/hero.css";
import BoxReveal from "./magicui/box-reveal";
import { Outlet } from "react-router-dom";

export default function Herosections() {
   const speedOfHeroText = 1;

   return (
      <div className="hero_nav_container">
         <Globe className="custom-globe" />
         <div className="hero_content">
            <div className="hero_content_glassbox">
               <BoxReveal boxColor={"#ffffff"} duration={speedOfHeroText}>
                  <h1 className="hero_title">INDIA POST</h1>
               </BoxReveal>
               <BoxReveal boxColor={"#ffffff"} duration={speedOfHeroText}>
                  <p>Urgent Hai ?</p>
               </BoxReveal>
               <BoxReveal boxColor={"#ffffff"} duration={speedOfHeroText}>
                  <p>speed post kardo na !</p>
               </BoxReveal>
               <BoxReveal boxColor={"#ffffff"} duration={speedOfHeroText}>
                  <div className="hero_btn">
                     <a
                        className="group relative inline-block overflow-hidden border-white focus:outline-none focus:ring"
                        href="#"
                     >
                        <span className="absolute inset-x-0 bottom-0 h-[2px] bg-white transition-all group-hover:h-full group-active:bg-white"></span>

                        <span className="relative text-xl font-bold font-sans text-white transition-colors group-hover:text-black">
                           TRACK NOW
                        </span>
                     </a>
                  </div>
               </BoxReveal>
            </div>
         </div>
      </div>
   );
}
