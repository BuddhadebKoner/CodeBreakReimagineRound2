import React from "react";
import Globe from "./magicui/globe";
import Navbar from "./Navbar";
import "../styles/hero.css";

export default function Herosections() {
   return (
      <>
         <div className="hero_container">
            <Navbar />
            <Globe />
            <h1>hello</h1>
         </div>
      </>
   );
}
