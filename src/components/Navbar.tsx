import React from 'react'
import { Button } from './ui/button'
import { MdOutlineTimer } from "react-icons/md";

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>

        <div className='flex items-center'>
        <MdOutlineTimer className='text-xl' />
        <h1>Time</h1>

        </div>

    
        <Button>Logout</Button>
    </div>
  )
}
