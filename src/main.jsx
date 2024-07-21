import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import BuyStamps from "./pages/BuyStamps.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Percel from "./pages/Percel.jsx";
import TrackNow from "./pages/TrackNow.jsx";



const Main = () => {
   useEffect(() => {
      // Check if the page is being reloaded
      if (performance.getEntriesByType("navigation")[0].type === "reload") {
         // Check if localStorage has the last visited path
         const lastVisitedPath = localStorage.getItem("lastVisitedPath");
         if (!lastVisitedPath || lastVisitedPath === "/") {
            // Redirect to '/ExploreBuddhadebKoner'
            window.location.href = "./";
         }
      }

      // Store the current path in localStorage
      localStorage.setItem("lastVisitedPath", window.location.pathname);
   }, []);

   const router = createBrowserRouter(
      createRoutesFromElements(
      <Route path="/" element={<App />}>
         <Route path="" element={<Home/>}/>
         <Route path="about" element={<AboutUs/>}/>
         <Route path="buystamp" element={<BuyStamps/>}/>
         <Route path="contactus" element={<ContactUs/>}/>
         <Route path="percel" element={<Percel/>}/>
         <Route path="tracknow" element={<TrackNow/>}/>
      </Route>)
   );

   return (
      <React.StrictMode>
         <RouterProvider router={router} />
      </React.StrictMode>
   );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
