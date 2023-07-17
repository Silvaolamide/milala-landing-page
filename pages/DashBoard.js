import React, { useState } from 'react';
import { BsArrowRightShort, BsSearch, BsChevronDown } from 'react-icons/bs';
import Menus from '../components/menuItems';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const router = useRouter();

  const handleSubmenuToggle = (menuId) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [menuId]: !prevState[menuId],
    }));
  };

  return (
    <>
     
     <section id="Navbar" class="rounded-xl fixed top-0 w-full">
    <nav class="rounded-[20px] bg-white fixed w-10/12 -mt-4 top-4 lg:left-28  right-3 left-3">
      <div class="max-w-screen-xl flex flex-wrap items-center  -pb-3 justify-between mx-auto p-2">
      <Link href="/" class="flex sm:items-center -ml-7 items-center">
          <Image src="./img/milala-logo.svg" class="h-12 w-20 mt-3 mr-6" alt="Milala Logo" height={20} width={20}></Image>
          <span class="self-center text-[#009A9A] -ml-12 font-inter text-2xl  font-semibold whitespace-nowrap ">Milala</span>
      </Link>
      <div class="flex md:order-2">
          <div class="text-gray text-sm px-4 py-2 text-center mr-3 md:mr-0 "> <ConnectButton class="rounded-full">  </ConnectButton> </div>
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
      </div>
      <div class="items-center justify-between hidden w-full  md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border text-center border-gray-100  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent ">
          <li>
            <Link href="/" class="block py-2 pl-3 pr-4 text-gray-900 bg-transparent rounded-xl  hover:text-teal md:bg-transparent md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
          </li>
          <li>
            <Link href="#" class="block py-2 pl-3 pr-4 text-gray-900  hoveroundedr:bg-teal-700 hover:text-teal-700 700 md:p-0 dark:text-gray dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent dark:border-gray-700">For Investors</Link>
          </li>
          <li>
            <Link href="/DashBoard" class="block py-2 pl-3 pr-4 text-gray-900   hover:text-teal-700  md:p-0 md:dark:hover:text-blue-500 dark:text-gray dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent dark:border-gray-700">For Founders</Link>
          </li>
          <li>
            <Link href="#" class="block py-2 pl-3 pr-4 text-gray-900  hover:text-teal-700 md:p-0 ">Contact Us</Link>
          </li>
          <li>
            <Link href="#Recents" class="block py-2 pl-3 pr-4 text-gray-900 rounded  hover:text-teal-700 md:p-0 ">Projects</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    
    </section>
      <div className="flex">
        <div className={`h-100vh top-0 fixed bg-teal-900 p-5 pt-8 ${open ? 'w-64' : 'w-20'} duration-300 relative`}>
          <BsArrowRightShort
            className={`bg-white text-teal-950 text-3xl rounded-full absolute ml-3 -right-3 top-8 border border-teal-950 cursor-pointer duration-300 ${
              !open && 'rotate-180'
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="inline-flex -pt-3">
         
              <Image
                src="/img/milala-logo.svg"
                alt="Milala Logo"
                height={20}
                width={20}

                class={`h-20 w-20 -mt-6 rounded-full block float-left cursor-pointer ${open ? '-mr-5' : '-ml-3'} duration-500 ${open ? 'rotate-[360deg]' : ''}`}

              >

              </Image>
           
            <h1 className={`text-white font-bold text-2xl duration-300 -mt-1 ml-2 ${!open && 'scale-0'}`}>Milala</h1>
          </div>
          <div className={`flex items-center rounded-md bg-[#FFFFF7] mt-6 ${!open ? 'px-2.5' : 'px-4'} py-2 bg-opacity-30 backdrop-filter backdrop-blur-lg`}>
            <BsSearch className={`text-white text-xl block float-left cursor-pointer ${open && 'mr-2'}`} />
            <input
              type="search"
              placeholder="Search"
              className={`text-sm bg-transparent w-full text-white focus:outline-none focus:ring-0 placeholder:text-white ${!open && 'hidden'}`}
            />
          </div>

          <ul>
            {Menus.map((menu) => (
              <li
                key={menu.id}
                className={`text-white text-m flex flex-col gap-y-2 cursor-pointer p-2 ${
                  submenuOpen[menu.id] ? '' : 'hover:bg-slate-300 hover:text-teal-900 hover:rounded-lg'
                } mt-2`}
              >
                <div className="flex items-center gap-x-2">
                  <span className="text-3xl">{menu.icon}</span>
                  <span className={`text-base ${!open && 'hidden'}`}>{menu.label}</span>
                  {menu.submenus && open && (
                    <BsChevronDown
                      className={`${submenuOpen[menu.id] ? 'rotate-180' : ''} ${open && 'display'}`}
                      onClick={() => handleSubmenuToggle(menu.id)}
                    />
                  )}
                </div>

                {menu.submenus && submenuOpen[menu.id] && open && (
                  <ul className="text-white text-sm ml-4">
                    {menu.submenus.map((submenu) => (
                      <li key={submenu.id} className="">
                        <div className="flex p-2 items-center">
                          <a onClick={() => router.push(submenu.link)}>{submenu.label}</a>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-grow p-5">{children}</div>
        <div class="h-screen"></div>
      </div>
    </>
  );
};

export default Sidebar;
