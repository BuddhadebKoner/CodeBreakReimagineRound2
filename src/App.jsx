import React, { useEffect, useState } from "react";
import "./App.css";
import Lenis from "lenis";
import assets from "./assets/assets";
import GradualSpacing from "./components/magicui/gradual-spacing";
import Index from "./pages";

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
      }, 3000); // 3 sec

      return () => clearTimeout(timer);
   }, []);

   return (
      <>
         {isLoading ? (
            <div className="loading_container">
               <img src={assets.logo} alt="" />
               <GradualSpacing
                  className="loading_container_text"
                  text="INDIA&nbsp;&nbsp;POST"
               ></GradualSpacing>
            </div>
         ) : (
            <Index/>
         )}
      </>
   );
}

export default App;
