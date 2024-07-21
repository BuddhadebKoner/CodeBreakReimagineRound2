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
                  <button className="hero_btn">Post Now</button>
               </BoxReveal>
            </div>
         </div>
      </div>
   );
}
