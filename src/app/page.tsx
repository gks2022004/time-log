import { Navbar } from "@/components/Navbar";
import { NewLog } from "@/components/NewLog";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Page() {
  return (
   <div className="p-5 space-y-10">
  <Navbar/>
  <NewLog/>

   </div>
  );
}
