import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/navbar.css";

export default function Navbar() {
   const container = useRef();

   useGSAP(
      () => {
         const t1 = gsap.timeline({ paused: true });

         t1.to(".one", 0.5, {
            y: 6,
            rotation: 45,
            ease: "expo.inOut",
         });
         t1.to(".two", 0.5, {
            y: -6,
            rotation: -45,
            ease: "expo.inOut",
            delay: -0.5,
         });

         t1.to(".menu", 1.5, {
            top: "0%",
            ease: "expo.inOut",
            delay: -0.5,
         });

         t1.staggerFrom(
            ".menu ul li",
            0.75,
            { x: -30, opacity: 0, ease: "expo.out" },
            0.1
         );

         t1.reverse();

         const handleClick = () => {
            t1.reversed(!t1.reversed());
         };

         const buttons = container.current.querySelectorAll(".toggle-btn, a");
         buttons.forEach((btn) => btn.addEventListener("click", handleClick));

         return () => {
            buttons.forEach((btn) =>
               btn.removeEventListener("click", handleClick)
            );
         };
      },
      { scope: container }
   );

   return (
      <div ref={container}>
         <div className="toggle-btn">
            <span className="one"></span>
            <span className="two"></span>
         </div>
         <div className="menu">
            <div className="data">
               <ul>
                  <li>
                     <a href="#">Track Now</a>
                  </li>
                  <li>
                     <a href="#">Parcel</a>
                  </li>
                  <li>
                     <a href="#">About Us</a>
                  </li>
                  <li>
                     <a href="#">Buy Stams</a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}
