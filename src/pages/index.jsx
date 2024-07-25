import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Index() {
   return(
   <>
      <Navbar />
      <Outlet/>
      <Footer />
   </>
   );
}
