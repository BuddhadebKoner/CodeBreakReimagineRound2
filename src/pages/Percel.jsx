import React, { useState } from "react";
import "../styles/Parcel.css";
import { Link } from "react-router-dom";
import assets from "@/assets/assets";
import { statesAndUTs, cities } from "@/assets/assets"; // Ensure the path is correct

export default function Percel() {
   const [selectedState, setSelectedState] = useState('');
   const [districts, setDistricts] = useState([]);

   const handleStateChange = (e) => {
      const state = e.target.value;
      setSelectedState(state);
      setDistricts(cities[state] || []);
   };

   return (
      <>
         <div className="lower_navbar">
            <Link to="/">
               <img src={assets.logo} alt="Logo" className="navlogo" />
            </Link>
            <img src={assets.navbar_right} alt="Navbar Right" className="navright" />
         </div>
         <div className="pincode_section_container">
            <div className="pincode_section_container_card">
               <div className="pincode_section_header">
                  <h1>Pincode Search</h1>
                  <p>Find your area by searching for the pincode</p>
               </div>
               <div className="pincode_section_form">
                  <form className="form-horizontal">
                     <div className="form-group">
                        <label htmlFor="state-select">
                           State / Union Territory
                        </label>
                        <select 
                           id="state-select" 
                           className="form-control"
                           value={selectedState}
                           onChange={handleStateChange}
                        >
                           <option value="-1">--Select--</option>
                           {statesAndUTs.map((state, index) => (
                              <option key={index} value={state}>
                                 {state}
                              </option>
                           ))}
                        </select>
                        <small className="error-message"></small>
                     </div>

                     <div className="form-group">
                        <label htmlFor="district-select">City / District</label>
                        <select id="district-select" className="form-control">
                           <option value="-1">--Select--</option>
                           {districts.map((city, index) => (
                              <option key={index} value={city}>
                                 {city}
                              </option>
                           ))}
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
                        <button
                           id="search-button"
                           type="button"
                           className="btn"
                        >
                           Search
                        </button>
                     </div>
                  </form>

                  <div
                     id="search-results"
                     className="search-results"
                     style={{ display: "none" }}
                  >
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
                     <div
                        id="no-results"
                        className="no-results"
                        style={{ display: "none" }}
                     >
                        <span className="no-results-text">
                           No results found.
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
