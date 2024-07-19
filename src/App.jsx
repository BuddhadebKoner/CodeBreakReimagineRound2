import React from "react";
import "./App.css";
import Lenis from "lenis";
import Home from "./pages/Home";

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
   return (
      <>
         <Home/>
      </>
   );
}

export default App;
