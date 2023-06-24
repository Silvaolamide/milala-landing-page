import React from 'react';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRightShort, BsFillGearFill, BsSearch } from "react-icons/bs";
import {
    MdOutlineTune,
    MdAllInclusive,
    MdSettings,
    MdNewLabel,
     MdAccountBalanceWallet,
    MdOutlinePayments,
    MdSettingsInputComponent,
    MdCancelScheduleSend,
    MdPriceCheck,
    MdStorage,
    MdCheck,
    MdOutlineMonetizationOn
  } from "react-icons/md";


const DashBoard = () => {
    const [open, setOpen] = useState(true);

    const Menus = [
        {
          id: 1,
          label: 'Projects Management',
          icon: MdOutlineTune,
          link: '/',
        },
        {
          id: 2,
          label: 'My Projects',
          icon: MdAllInclusive,
          link: '/my-projects',
        },
        {
          id: 3,
          label: "Projects' Management",
          icon: MdSettings,
          submenus: [
            {
              id: 31,
              label: 'Add Project',
              icon: MdNewLabel,
              link: '/AddProject',
            },
            {
              id: 32,
              label: 'Add Milestones',
              icon: MdSettingsInputComponent,
              link: '/AddMilestones',
            },
          ],
        },
        {
          id: 4,
          label: 'Funding',
          icon: MdAccountBalanceWallet,
          submenus: [
            {
              id: 41,
              label: 'Request For Funding',
              icon: MdCancelScheduleSend,
              link: '/RequestFunding',
            },
          ],
        },
        {
          id: 5,
          label: 'Milestones',
          icon: MdStorage,
          submenus: [
            {
              id: 51,
              label: 'Completed Milestones',
              icon: MdCheck,
              link: '/CompletedMilestones',
            },
            {
              id: 52,
              label: 'Update Milestones',
              icon: MdNewLabel,
              link: '/add-milestones',
            },
          ],
        },
        {
          id: 6,
          label: 'Repayment',
          icon: MdPriceCheck,
          submenus: [
            {
              id: 61,
              label: 'Repay Milestone',
              icon: MdOutlineMonetizationOn,
              link: '/repay-milestone',
            },
            {
              id: 62,
              label: 'Repayments History',
              icon: MdOutlinePayments,
              link: '/repayment-history',
            },
          ],
        },
      ];
    

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

<div className={`flex items-center rounded-md bg-[#FFFFF7] mt-6 ${!open ? "px-2.5" : "px-4"} py-2 bg-opacity-30 backdrop-filter backdrop-blur-lg`}>
  <BsSearch className={`text-white text-xl block float-left cursor-pointer ${open && "mr-2"}`} />

  <input type="search" placeholder="Search" className={`text-sm bg-transparent w-full text-white focus:outline-none focus:ring-0 placeholder:text-white ${!open && "hidden"}`} />
</div>


<ul>
  {Menus.map((menu) => (
    <li key={menu.id} className="text-white">
      <span>{menu.label}</span>
    </li>
  ))}
</ul>


</div>





























</div>

</>


  );
};

























export default dynamic(() => Promise.resolve(DashBoard), { ssr: false });
