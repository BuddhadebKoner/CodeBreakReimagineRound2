import React, { useEffect, useState } from "react";
import "./App.css";
import Lenis from "lenis";
import Home from "./pages/Home";
import assets from "./assets/assets";

const lenis = new Lenis();

lenis.on("scroll", (e) => {
   console.log(e);
});

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
      }, 1700);

      return () => clearTimeout(timer); 
   }, []);

   return (
      <>
         {isLoading ? (
            <div className="loading_container">
               <img src={assets.loadingGif} alt="Loading" />
            </div>
         ) : (
            <Home />
         )}
      </>
   );
}

export default App;
