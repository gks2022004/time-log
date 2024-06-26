"use client";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GrAdd } from "react-icons/gr";
import { DatePicker } from "./DatePicker";
import { useLogStore } from "@/store";

export function NewLog() {
  const log = useLogStore((state) => state.log);
  const setLog = useLogStore((state) => state.setLog);

  return (
    <Dialog>
      <DialogTrigger asChild>

       <div className="w-full sm:3-72 border-dashed border py-3 flex items-center
       justify-center rounded-md cursor-pointer hover:border-solid">
               <GrAdd/>
       </div>

      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Log</DialogTitle>
          <DialogDescription>
           {
            "Remember time is your most valuable assest invest it wisely with our Time Log App!"
           }
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date{" "}
            </Label>
         <DatePicker/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="hour" className="text-right">
              Hour
            </Label>
            <Input id="hour" type="number" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="note" className="text-right">
              Note
            </Label>
            <Input id="note" placeholder="note the log" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
