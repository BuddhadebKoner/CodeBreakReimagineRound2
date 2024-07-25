import assets from "@/assets/assets";
import React from "react";
import "../styles/BuyStamps.css";
import { Link } from "react-router-dom";

export default function BuyStamps() {
   return (
      <>
         <div className="lower_navbar">
            <Link to={"/"}>
               <img src={assets.logo} alt="" className="navlogo" />
            </Link>
            <img src={assets.navbar_right} alt="" className="navright" />
         </div>
         <section className="section">
            <div>
               <header className="header">
                  <h2>Spl Cvr No Mosquito No Malaria 2016</h2>
                  <p>
                     This Customised Special cover on No Mosquito No Malaria
                     2016 was issued by Punjab Postal Circle on 08.02.2016.
                     Protector is not provided with this special cover.
                  </p>
               </header>

               <div className="button">
                  <span>Filters & Sorting</span>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                     />
                  </svg>
               </div>

               <div className="filters"></div>

               <div className="grid">
                  <div className="grid-item">
                     <a href="#">
                        <img src={assets.stamp2} alt="Image 1" />
                        <div className="grid-item-content">
                           <h3>Basic</h3>
                           <p>
                              <span className="price">₹ 50.00</span>
                           </p>
                        </div>
                     </a>
                  </div>
                  <div className="grid-item">
                     <a href="#">
                        <img src={assets.stamp1} alt="Image 1" />
                        <div className="grid-item-content">
                           <h3>Basic</h3>
                           <p>
                              <span className="price">₹ 24.00</span>
                           </p>
                        </div>
                     </a>
                  </div>
                  <div className="grid-item">
                     <a href="#">
                        <img src={assets.stamp3} alt="Image 1" />
                        <div className="grid-item-content">
                           <h3>Basic</h3>
                           <p>
                              <span className="price">₹ 20.00</span>
                           </p>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
