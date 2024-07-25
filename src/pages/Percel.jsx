import React from "react";
import assets from "@/assets/assets";
import "../styles/Parcel.css";
import { Link } from "react-router-dom";

export default function Percel() {
   return (
      <>
         <div className="lower_navbar">
            <Link to="/">
               <img src={assets.logo} alt="" className="navlogo" />
            </Link>
            <img src={assets.navbar_right} alt="" className="navright" />
         </div>
         <div id="form-container">
            <div className="header">
            </div>

            <div id="error-message" style={{ display: "none" }}>
               <span className="error-text"></span>
            </div>

            <div className="form-container">
               <form className="form-horizontal">
                  <div className="form-group">
                     <label htmlFor="state-select">
                        State / Union Territory
                     </label>
                     <select id="state-select" className="form-control">
                        <option value="-1">--Select--</option>
                        {/* options here */}
                     </select>
                     <small className="error-message"></small>
                  </div>

                  <div className="form-group">
                     <label htmlFor="district-select">City / District</label>
                     <select id="district-select" className="form-control">
                        <option value="-1">--Select--</option>
                     </select>
                     <small className="error-message"></small>
                  </div>

                  <div className="form-group">
                     <small className="or-text">OR</small>
                  </div>

                  <div className="form-group">
                     <label htmlFor="pin-code">Pincode</label>
                     <input
                        type="text"
                        id="pin-code"
                        maxLength="6"
                        className="form-control"
                     />
                     <small className="error-message"></small>
                  </div>

                  <div className="form-group">
                     <button id="search-button" type="button" className="btn">
                        Search
                     </button>
                  </div>
               </form>

               <div id="search-results" style={{ display: "none" }}>
                  <table id="results-table">
                     <thead>
                        <tr>
                           <th>Post Office</th>
                           <th>Address</th>
                           <th>PIN Code</th>
                        </tr>
                     </thead>
                     <tbody></tbody>
                  </table>
                  <div id="no-results" style={{ display: "none" }}>
                     <span className="no-results-text">No results found.</span>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
