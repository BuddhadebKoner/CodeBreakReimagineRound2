import React from "react";
import "./App.css";
import Herosections from "./components/Herosections";
import Maincontext from "./components/Maincontext";
import Lenis from "lenis";

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
         <Herosections />
         <Maincontext/>
      </>
   );
}

export default App;
