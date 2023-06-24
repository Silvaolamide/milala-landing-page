import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRightShort, BsFillGearFill, BsSearch } from "react-icons/bs";
import { useState } from 'react';

const DashBoard = () => {
    const [open, setOpen] = useState(true);

  return (
    <>

<div class="flex">
  <div class={`h-screen bg-teal-900 p-5 pt-8 ${open ? "w-64" : "w-20"} duration-300 relative`}>

  <BsArrowRightShort class={`bg-white text-teal-950 text-3xl rounded-full absolute ml-3 -right-3
  top-8 border border-teal-950 cursor-pointer duration-300 ${
    !open && "rotate-180"
  }`} 
  onClick={() => setOpen (!open)}
   /> 
<div class="inline-flex -pt-3">
<BsFillGearFill class={`bg-white mr-2 text-3xl text-teal-950 border rounded-full cursor-pointer block float-left duration-500 ${open && "rotate-[360deg]"}`}
/>
<h1 class={` text-white font-bold text-2xl duration-300 -mt-1 ml-2 ${!open && "scale-0"}       `}> 
    Milala
</h1>
</div>

<div class={`flex items-center rounded-md bg-[#FFFFF7] mt-6  ${!open ? "px-2.5" : "px-4"}  py-2`}>
<BsSearch class={` text-teal-500 text-lg block float-left cursor-pointer ${open && "mr-2"}`} />

<input type={"search"} placeholder='Search' class={`text-base bg-transparent w-full  text-white focus:outline-none ${!open && "hidden"}`}/>
</div>
   

</div>





























</div>

</>


  );
};

























export default dynamic(() => Promise.resolve(DashBoard), { ssr: false });
