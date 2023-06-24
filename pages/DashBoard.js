import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";
import { useState } from 'react';

const DashBoard = () => {
    const [open, setOpen] = useState(true);

  return (
<div class="flex">
  <div class={`h-screen bg-teal-900 p-5 pt-8 ${open ? "w-64" : "w-20"} relative`}>

  <BsArrowLeftShort class="bg-white text-teal-950 text-3xl rounded-full absolute -right-3
  top-8 border border-teal-950 cursor-pointer" onClick={() => setOpen (!open)}
   /> 
  DashBoard

    </div>    
  
      <div class="p-7">
        <h1 class="text-2xl font-semibold">Homepage</h1>
      </div>
     

</div>


































  );
};

























export default dynamic(() => Promise.resolve(DashBoard), { ssr: false });
