import Herosections from "@/components/Herosections";
import Maincontext from "@/components/Maincontext";
import Loadingpage from "@/components/Loadingpage";
import React from "react";

export default function Home() {
   return (
      <>
         <Loadingpage />
         <Herosections />
         <Maincontext />
      </>
   );
}
