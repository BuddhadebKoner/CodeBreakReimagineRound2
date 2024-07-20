import React, { useEffect, useState } from "react";
import "./App.css";
import Lenis from "lenis";
import Home from "./pages/Home";
import assets from "./assets/assets";
import GradualSpacing from "./components/magicui/gradual-spacing";

const lenis = new Lenis();

function raf(time) {
   lenis.raf(time);
   requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function App() {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
   }, []);

   return (
      <>
         {isLoading ? (
            <div className="loading_container">
               <img src={assets.indiapost} alt="" />
               <GradualSpacing
                  className="loading_container_text"
                  text="INDIA&nbsp;&nbsp;POST"
               ></GradualSpacing>
            </div>
         ) : (
            <Home />
         )}
      </>
   );
}

export default App;
