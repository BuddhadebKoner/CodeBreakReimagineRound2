import React from "react";
import Globe from "./magicui/globe";
import Navbar from "./Navbar";
import "../styles/hero.css";
import BoxReveal from "./magicui/box-reveal";

export default function Herosections() {

   const speedOfHeroText = 1


  return (
    <div className="hero_nav_container">
      <Navbar />
      <div className="hero_content">
        <Globe className="custom-globe" />
        <BoxReveal boxColor={"#ffffff"} duration={speedOfHeroText}>
          <h1 className="hero_title">INDIA POST</h1>
        </BoxReveal>
        <BoxReveal boxColor={"#ffffff"} duration={speedOfHeroText}>
          <p>
            Urgent Hai ?<br /> speed post kardo na !
          </p>
        </BoxReveal>
        <BoxReveal boxColor={"#ffffff"} duration={speedOfHeroText}>
          <button className="hero_btn" >Post Now</button>
        </BoxReveal>
      </div>
    </div>
  );
}
