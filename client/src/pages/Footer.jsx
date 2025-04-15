// import React from 'react'
import { FaCopyright } from "react-icons/fa";

export default function  Footer() {
  return (
    <div className="relative bottom-0 w-full">
      <div className='mt-12 bottom-0 w-full h-10 flex items-center text-white gap-3' 
  style={{ backgroundColor: 'red' }}
  >

        <FaCopyright className=" ml-24  h-5 "/>
          Event Management
      </div>
    </div>
  )
}
