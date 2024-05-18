import { Navbar } from "@/components/Navbar";
import { NewLog } from "@/components/NewLog";
import {Calender} from "@/components/Calender";
import React from "react";
import { Logs } from "@/components/Logs";

export default function Page() {
  return (
   <div className="p-5 space-y-10">
  <Navbar />
  <NewLog />
  <Calender/>
  <Logs />


   </div>
  );
}
